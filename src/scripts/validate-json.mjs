import fs from "node:fs";
import path from "node:path";

const listFiles = (dir) =>
	fs.existsSync(dir)
		? fs
			.readdirSync(dir, { recursive: true })
			.map((f) => path.join(dir, String(f)))
			.filter((f) => fs.statSync(f).isFile())
		: [];

let failed = false;
const fail = (file, msg) => {
	console.error(`::error file=${file}::${msg}`);
	failed = true;
};

const jsonDirs = ["templates", "sections", "config", "locales", "blocks"];
for (const dir of jsonDirs) {
	for (const file of listFiles(dir).filter((f) => f.endsWith(".json"))) {
		const raw = fs.readFileSync(file, "utf8").replace(/^\s*\/\*[\s\S]*?\*\//, "");

		try {
			JSON.parse(raw);
		} catch (e) {
			fail(file, e.message);
		}
	}
}

const schemaRe = /\{%-?\s*schema\s*-?%\}([\s\S]*?)\{%-?\s*endschema\s*-?%\}/;
for (const dir of ["sections", "blocks"]) {
	for (const file of listFiles(dir).filter((f) => f.endsWith(".liquid"))) {
		const match = fs.readFileSync(file, "utf8").match(schemaRe);
		if (!match) continue;

		try {
			JSON.parse(match[1]);
		} catch (e) {
			fail(file, "schema: " + e.message);
		}
	}
}

process.exit(failed ? 1 : 0);
