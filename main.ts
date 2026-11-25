import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My phone's screen-time report says I spent nine hours staring at a rectangle that doesn't even like me back.";

// Gate: /output/entry.txt must be UTF-8 text of 1-200 chars, one line, not blank.
if (
  entry.length < 1 ||
  entry.length > 200 ||
  entry.trim().length === 0 ||
  entry.includes("\n")
) {
  throw new Error(`entry fails gate: ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
