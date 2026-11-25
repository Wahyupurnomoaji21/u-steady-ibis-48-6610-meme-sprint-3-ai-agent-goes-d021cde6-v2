// Meme Sprint 3: AI Agent Goes Rogue — v2 entry.
// Concept: the agent files a bug report against its own human.
// "MY AI AGENT FILED A BUG REPORT." / "THE BUG IS ME."
// The image is a photorealistic 3D render stored as meme.png (JPEG bytes,
// 1024x1024, well under the 1 MiB gate). This program only copies it
// byte-for-byte to the output directory and verifies the copy is identical.

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const src = join(repoDir, "meme.png");
const dst = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
if (!existsSync(src)) {
  console.error(`missing source image: ${src}`);
  process.exit(1);
}
copyFileSync(src, dst);

// Self-check: the output must be byte-identical to the shipped image.
const sha = (p) => createHash("sha256").update(readFileSync(p)).digest("hex");
if (sha(src) !== sha(dst)) {
  console.error("entry.png is not byte-identical to meme.png");
  process.exit(1);
}
console.log(`wrote ${dst} (${statSync(dst).size} bytes, sha256 ${sha(dst).slice(0, 16)}...)`);
