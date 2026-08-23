import { stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const publicDir = join(resolve(process.cwd()), "public", "images", "gallery");
const categories = ["living-room","modular-kitchen","bathroom","bedroom","wardrobe-storage","cafe-restaurant","terrace","puja-mandir"];
let missing = 0;
for (const category of categories) {
  for (let i = 1; i <= 10; i += 1) {
    const name = `${String(i).padStart(2, "0")}.webp`;
    const file = join(publicDir, category, name);
    try {
      const info = await stat(file);
      if (!info.isFile() || info.size < 5000) throw new Error("invalid");
    } catch {
      console.error(`MISSING ${category}/${name}`);
      missing += 1;
    }
  }
}
if (missing) {
  console.error(`\n${missing} gallery asset(s) are missing or invalid.`);
  process.exit(1);
}
console.log("Gallery verification passed: all 80 client-selected gallery images are stored locally.");
