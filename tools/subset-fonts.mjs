// Makes small WOFF2 copies of the Blueprint Sketch fonts with only the characters the site uses.
// The hatched font keeps its `calt` feature (it rotates three hatch variants per letter).
// Run from the site folder: node tools/subset-fonts.mjs
import { readFile, writeFile } from "node:fs/promises";
import subsetFont from "subset-font";

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" +
  " .,:;!?-–—_'\"’‘”“/\\()[]&$%+=*#@<>|€°" +
  "ÇĞİÖŞÜçğıöşüÂÎÛâîûÄä";

for (const name of ["BlueprintSketch", "BlueprintSketch-Solid"]) {
  const src = await readFile(`src/assets/fonts/${name}.otf`);
  const out = await subsetFont(src, chars, {
    targetFormat: "woff2",
    preserveNameIds: [0, 1, 2, 3, 4, 5, 6],
  });
  await writeFile(`src/assets/fonts/${name}.woff2`, out);
  console.log(`${name}: ${(src.length / 1024).toFixed(0)} KB -> ${(out.length / 1024).toFixed(0)} KB`);
}
