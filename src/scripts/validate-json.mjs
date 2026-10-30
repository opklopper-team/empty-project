import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

//=================================================================================================

const JSON_DIRS = ["config", "locales", "sections", "templates", "blocks", "snippets"];
const LIQUID_DIRS = ["sections", "blocks"];

//=================================================================================================

const walk = (dir, ext) => {
	let files = [];
	let entries;

	try {
		entries = readdirSync(dir);
	} catch {
		return files;
	}

	for (const name of entries) {
		const p = join(dir, name);
		if (statSync(p).isDirectory()) files = files.concat(walk(p, ext));
		else if (extname(p) === ext) files.push(p);
	}

	return files;
}

//=================================================================================================

let failed = false;

const report = (file, text, offset, e) => {
	failed = true;
	const m = /position (\d+)/.exec(e.message);
	let where = "";

	if (m) {
		const before = text.slice(0, Number(m[1]));
		const line = before.split("\n").length + offset;
		const col = before.length - before.lastIndexOf("\n");
		where = ` (line ${line}, column ${col})`;
	}

	console.error(`::error file=${file}::${e.message}${where}`);
}

// Check all .json files
//=================================================================================================

for (const file of JSON_DIRS.flatMap((d) => walk(d, ".json"))) {
	const text = readFileSync(file, "utf8");
	const stripped = text.replace(/^\s*\/\*[\s\S]*?\*\/\s*/, "");
	const offset = text.slice(0, text.length - stripped.length).split("\n").length - 1;

	try {
		JSON.parse(stripped);
	} catch (e) {
		report(file, stripped, offset, e);
	}
}

// Check all {% schema %} blocks inside .liquid files
//=================================================================================================

const schemaRe = /{%-?\s*schema\s*-?%}([\s\S]*?){%-?\s*endschema\s*-?%}/;

for (const file of LIQUID_DIRS.flatMap((d) => walk(d, ".liquid"))) {
	const text = readFileSync(file, "utf8");
	const match = schemaRe.exec(text);
	if (!match) continue;

	const json = match[1];
	const startIndex = match.index + match[0].indexOf(json);
	const offset = text.slice(0, startIndex).split("\n").length - 1;

	try {
		JSON.parse(json);
	} catch (e) {
		report(file, json, offset, e);
	}
}

//=================================================================================================

process.exit(failed ? 1 : 0);
