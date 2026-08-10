import { rmSync, existsSync } from "node:fs";
import { nextCacheTarget } from "./next-cache-path.mjs";

const targets = [".next", nextCacheTarget, "node_modules/.cache"];

for (const target of targets) {
  if (existsSync(target)) {
    rmSync(target, { recursive: true, force: true });
    console.log(`Removed ${target}`);
  }
}

console.log("Cache cleared. Run: npm run dev");
