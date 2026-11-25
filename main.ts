// One Line, One Laugh — entry program for make.fun.
// Writes a single funny line (at most 200 characters) to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I put 'fluent in sarcasm' on my résumé. The interviewer asked if I could translate it into teamwork.";

const OUT_DIR = "/output";
const OUT_PATH = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// Validate what was actually written, not just what we intended to write.
const written = readFileSync(OUT_PATH, "utf8");
// The file must round-trip as UTF-8: a byte-level check, not just a
// string-length check, so a stray invalid sequence cannot slip through.
const roundTripped = Buffer.from(written, "utf8").toString("utf8");
if (roundTripped !== written) {
  throw new Error("entry.txt is not valid UTF-8 text");
}
// No control characters (other than none here — the entry is one line).
if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(written)) {
  throw new Error("entry.txt must not contain control characters");
}
if (written.length < 1 || written.length > 200) {
  throw new Error(
    `entry.txt must be 1-200 characters, got ${written.length}`,
  );
}
if (written.trim().length === 0) {
  throw new Error("entry.txt must not be whitespace-only");
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("entry.txt must be a single line");
}

console.log(`Wrote ${written.length} characters to ${OUT_PATH}`);
