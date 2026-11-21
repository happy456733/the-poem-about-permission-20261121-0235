// A short poem about agency: the power to ask and to be given.
// Writes the poem to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `I asked, and the asking
was the key — not the yes
that followed, but the hand
that reached for the door
before it knew
whether the door would open.

Nothing was given
that I had not already carried:
the power to knock,
to wait,
to walk through.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem + "\n", "utf8");
