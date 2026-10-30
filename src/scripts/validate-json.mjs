import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const DIRS = ["config", "locales", "sections", "templates", "blocks", "snippets"];

const walk = (dir) => {
	let files = [];
	let entries;

	try {
		entries = readdirSync(dir);
	} catch {
		return files;
	}

	for (const name of entries) {
		const p = join(dir, name);
		if (statSync(p).isDirectory()) files = files.concat(walk(p));
		else if (extname(p) === ".json") files.push(p);
	}

	return files;
};

let failed = false;

for (const file of DIRS.flatMap(walk)) {
	let text = readFileSync(file, "utf8");
	const stripped = text.replace(/^\s*\/\*[\s\S]*?\*\/\s*/, "");

	try {
		JSON.parse(stripped);
	} catch (e) {
		failed = true;
		const m = /position (\d+)/.exec(e.message);
		let where = "";

		if (m) {
			const before = stripped.slice(0, Number(m[1]));
			const line = before.split("\n").length;
			const col = before.length - before.lastIndexOf("\n");
			where = ` (рядок ${line}, колонка ${col})`;
		}

		console.error(`::error file=${file}::${e.message}${where}`);
		console.error(`${file}${where}: ${e.message}`);
	}
}

process.exit(failed ? 1 : 0);
