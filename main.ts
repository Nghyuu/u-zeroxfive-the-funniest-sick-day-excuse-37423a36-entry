// The Funniest Sick-Day Excuse — u-zeroxfive-the-funniest-sick-day-excuse-37423a36
// Writes a single one-line sick-day excuse to the output file.

import * as fs from "node:fs";
import * as path from "node:path";

const EXCUSE =
  "Can't come in today — a bee stung my face last night and it's so swollen my phone won't unlock anymore, so until the swelling goes down I technically don't exist.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = path.join(outDir, "entry.txt");

// The gate requires 1-200 characters of real text; refuse to write otherwise.
const len = [...EXCUSE].length;
if (len < 1 || len > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`excuse is ${len} characters, must be 1-200`);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, EXCUSE + "\n", "utf8");
fs.chmodSync(outFile, 0o644);
