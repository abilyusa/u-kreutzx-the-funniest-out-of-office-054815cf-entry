import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Your email found me out of office. I found your email out of line. We are even. I return Monday.";

// Gate from the competition rules: entry.txt must be UTF-8 text of 1-140
// characters, not only white space, on a single line. Count code points
// (not UTF-16 units) so the check matches the scorer.
const len = [...LINE].length;
if (len < 1 || len > 140 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`entry violates the 1-140 character gate (got ${len})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
