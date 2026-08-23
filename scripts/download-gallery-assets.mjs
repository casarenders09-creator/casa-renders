import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

const root = resolve(process.cwd());
const publicDir = join(root, "public");
const force = process.argv.includes("--force");

const unsplash = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;
const unsplashDownload = (id) =>
  `https://unsplash.com/photos/${id}/download?force=true`;
const pexels = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

const manifest = {
  "living-room": [
    unsplash("photo-1616486338812-3dadae4b4ace"),
    unsplash("photo-1600210492486-724fe5c67fb0"),
    unsplash("photo-1618221195710-dd6b41faaea6"),
    unsplash("photo-1618220179428-22790b461013"),
    unsplash("photo-1600607687920-4e2a09cf159d"),
    unsplash("photo-1600607687939-ce8a6c25118c"),
    unsplash("photo-1615873968403-89e068629265"),
    unsplash("photo-1600566753086-00f18fb6b3ea"),
    unsplash("photo-1615529182904-14819c35db37"),
    unsplash("photo-1600566753190-17f0baa2a6c3"),
  ],
  "modular-kitchen": [
    unsplash("photo-1556912167-f556f1f39fdf"),
    unsplash("photo-1556911220-bff31c812dba"),
    unsplash("photo-1556912998-c57cc6b63cd7"),
    unsplash("photo-1600585152915-d208bec867a1"),
    unsplash("photo-1600566753051-f0b89df2dd90"),
    unsplash("photo-1600607687644-c7171b42498b"),
    unsplash("photo-1600573472591-ee6b68d14c68"),
    unsplash("photo-1600573472550-8090b5e0745e"),
    unsplash("photo-1600566753190-17f0baa2a6c3"),
    unsplash("photo-1600566753086-00f18fb6b3ea"),
  ],
  bathroom: [
    { local: "images/references/bathroom.webp", ext: "webp" },
    unsplashDownload("g51F6-WYzyU"),
    unsplashDownload("L4iRkKL5dng"),
    unsplash("photo-1507652313519-d4e9174996dd"),
    unsplash("photo-1661107259637-4e1c55462428"),
    unsplash("photo-1629079447777-1e605162dc8d"),
    unsplash("photo-1576698483491-8c43f0862543"),
    unsplashDownload("vTj_dmFGB1Y"),
    unsplashDownload("6TY_WrJTwSI"),
    unsplash("photo-1603825491103-bd638b1873b0"),
  ],
  bedroom: [
    { local: "images/references/bedroom.webp", ext: "webp" },
    unsplash("photo-1616594039964-ae9021a400a0"),
    unsplashDownload("hCU4fimRW-c"),
    unsplashDownload("kyt0PkBSCNQ"),
    unsplashDownload("ErDrzSvSNv4"),
    unsplashDownload("A4Kf_chf5dU"),
    unsplashDownload("emqnSQwQQDo"),
    unsplashDownload("ffFnddUEaL4"),
    unsplash("photo-1750420556288-d0e32a6f517b"),
    unsplashDownload("7jlVQPX8PLE"),
  ],
  "wardrobe-storage": [
    { local: "images/references/wardrobe.webp", ext: "webp" },
    unsplash("photo-1778731660303-1fa5ede75477"),
    unsplashDownload("9KVtDmNnFP4"),
    unsplashDownload("EFFzjMQsxTA"),
    unsplashDownload("22bEhQA7SMo"),
    unsplashDownload("x9LOGu51NnI"),
    unsplashDownload("ZXbDeof0nlQ"),
    unsplashDownload("ifmNRVa8m9s"),
    unsplashDownload("FeW2HBoDov0"),
    unsplashDownload("q7YTIho6I4I"),
  ],
  "cafe-restaurant": [
    unsplash("photo-1552566626-52f8b828add9"),
    unsplash("photo-1517248135467-4c7edcad34c4"),
    unsplash("photo-1555396273-367ea4eb4db5"),
    unsplash("photo-1559339352-11d035aa65de"),
    unsplash("photo-1515003197210-e0cd71810b5f"),
    unsplash("photo-1550966871-3ed3cdb5ed0c"),
    unsplash("photo-1414235077428-338989a2e8c0"),
    unsplash("photo-1556740749-887f6717d7e4"),
    unsplash("photo-1554118811-1e0d58224f24"),
    unsplash("photo-1578474846511-04ba529f0b88"),
  ],
  terrace: [
    { local: "images/references/terrace.webp", ext: "webp" },
    unsplash("photo-1493246318656-5bfd4cfb29b8"),
    unsplash("photo-1560448204-444f743ef6e7"),
    unsplashDownload("SKcssBkDhTo"),
    unsplashDownload("LDppuTdcqgw"),
    unsplashDownload("XbPf8_jvrPE"),
    unsplashDownload("6Iif8DpllLw"),
    unsplashDownload("mLpYmRKXYfc"),
    unsplashDownload("2ejojNrOypw"),
    unsplashDownload("NDlNcVDK_e4"),
  ],
  "puja-mandir": [
    { local: "images/references/mandir.webp", ext: "webp" },
    pexels("37116936"),
    pexels("37116934"),
    pexels("37116931"),
    pexels("30623344"),
    pexels("8887013"),
    pexels("36187718"),
    pexels("37116932"),
    pexels("36854238"),
    pexels("37116938"),
  ],
};

const headers = {
  Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131 Safari/537.36",
};

async function healthy(path) {
  try {
    const info = await stat(path);
    return info.isFile() && info.size > 12_000;
  } catch {
    return false;
  }
}

async function fetchImage(url, destination) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        redirect: "follow",
        headers,
        signal: AbortSignal.timeout(45_000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const type = response.headers.get("content-type") ?? "";
      if (!type.startsWith("image/")) throw new Error(`Unexpected content-type: ${type || "unknown"}`);
      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.length < 12_000) throw new Error(`Image too small (${bytes.length} bytes)`);
      await mkdir(dirname(destination), { recursive: true });
      await writeFile(destination, bytes);
      return bytes.length;
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolveDelay) => setTimeout(resolveDelay, 900 * attempt));
    }
  }
  throw lastError;
}

async function copyLocal(source, destination) {
  const bytes = await readFile(join(publicDir, source));
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, bytes);
  return bytes.length;
}

async function syncOne(category, entry, index) {
  const number = String(index + 1).padStart(2, "0");
  const extension = typeof entry === "object" ? entry.ext : "jpg";
  const destination = join(publicDir, "images", "gallery", category, `${number}.${extension}`);

  if (!force && (await healthy(destination))) {
    console.log(`SKIP ${category}/${number}.${extension}`);
    return { ok: true, skipped: true };
  }

  try {
    const size = typeof entry === "object"
      ? await copyLocal(entry.local, destination)
      : await fetchImage(entry, destination);
    console.log(`OK   ${category}/${number}.${extension}  ${Math.round(size / 1024)} KB`);
    return { ok: true };
  } catch (error) {
    console.error(`FAIL ${category}/${number}.${extension}: ${error instanceof Error ? error.message : error}`);
    return { ok: false };
  }
}

console.log("\nCasa Renders gallery asset sync");
console.log("Downloading each reference once so the live website no longer depends on image hotlinks.\n");

const jobs = [];
for (const [category, entries] of Object.entries(manifest)) {
  entries.forEach((entry, index) => jobs.push({ category, entry, index }));
}

const concurrency = 4;
let cursor = 0;
const results = [];
async function worker() {
  while (cursor < jobs.length) {
    const job = jobs[cursor++];
    results.push(await syncOne(job.category, job.entry, job.index));
  }
}
await Promise.all(Array.from({ length: concurrency }, () => worker()));

const failed = results.filter((result) => !result.ok).length;
console.log(`\nCompleted: ${results.length - failed}/${results.length} assets ready.`);
if (failed) {
  console.error(`${failed} downloads failed. Run \"npm run gallery:sync\" once more; existing successful files will be skipped.`);
  process.exitCode = 1;
} else {
  console.log("All gallery images are now local. Run: npm run gallery:verify");
}
