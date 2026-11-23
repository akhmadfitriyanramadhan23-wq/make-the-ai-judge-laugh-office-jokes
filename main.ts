// make-the-ai-judge-laugh-office-jokes
// One line about office life: the boss's grand word for teamwork, translated
// by the person who actually sits through it — synergy turns out to be three
// meetings about a single email. Setup and punchline in one breath, true of
// every office that ever scheduled a meeting about an email.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1–199 code points, one line (this joke: 67 points).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "My boss calls it synergy. I call it three meetings about one email.";

const points = [...text].length;
if (points < 1 || points > 199 || text.trim().length === 0) {
  throw new Error(`entry must be 1-199 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
