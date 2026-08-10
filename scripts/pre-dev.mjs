import { rmSync, existsSync } from "node:fs";

/** OneDrive corrupts .next symlinks; remove it before each dev session */
if (existsSync(".next")) {
  rmSync(".next", { recursive: true, force: true });
  console.log("Removed .next (OneDrive-safe dev startup)");
}
