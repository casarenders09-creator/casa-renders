import path from "node:path";
import os from "node:os";

export const nextCacheTarget = path.join(
  os.homedir(),
  "AppData",
  "Local",
  "casa-renders-website-v2-next",
);
