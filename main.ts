// The Moon Finally Answers Back
// One line in the voice of the Moon, replying at last to four billion years
// of wishes, howls and late-night promises. Written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The comeback itself: wry, old, tired of being wished upon — the turn
// lands on "a night off", the one wish nobody ever made for the Moon.
const line =
  "Four billion years of wishes, howls, and 2 a.m. promises — and not one of you has ever wished me a night off.";

// Gate guard: single line of 1-240 characters (counted with the trailing newline).
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 240) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
