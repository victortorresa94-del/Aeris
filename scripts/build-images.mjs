/**
 * AERIS image pipeline.
 * Crops the architecture photos embedded in the approved mockup PNGs and emits
 * web-optimized AVIF + WebP into /public/img.
 *
 * TODO: regenerate these with AI (Higgsfield / aura /api/fal) at higher resolution
 * when image-gen credits / auth are available — these crops are faithful placeholders.
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const outDir = resolve(root, "public/img");
const tmpDir = "/tmp/aeris-prev";
mkdirSync(outDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

const M = (name) => resolve(root, name);

// Source mockups
const HERO = M("ChatGPT Image 2 jun 2026, 21_35_50.png");
const DOORS = M("ChatGPT Image 2 jun 2026, 21_35_34.png");
const CASOS = M("ChatGPT Image 3 jun 2026, 11_46_39.png");

/** [left, top, width, height] crop boxes within the 1536x1024 mockups. */
const jobs = [
  { name: "hero-arch", src: HERO, crop: null, width: 1400 },

  { name: "door-agencia", src: DOORS, crop: [95, 610, 350, 270], width: 640 },
  { name: "door-equipo", src: DOORS, crop: [478, 610, 350, 270], width: 640 },
  { name: "door-freelance", src: DOORS, crop: [846, 610, 250, 270], width: 560 },

  { name: "caso-kmeleon", src: CASOS, crop: [80, 360, 430, 300], width: 760 },
  { name: "caso-artiverse", src: CASOS, crop: [553, 360, 430, 300], width: 760 },
  { name: "caso-closius", src: CASOS, crop: [1026, 360, 430, 300], width: 760 },
];

async function run() {
  for (const job of jobs) {
    let pipe = sharp(job.src);
    if (job.crop) {
      const [left, top, width, height] = job.crop;
      pipe = pipe.extract({ left, top, width, height });
    }
    pipe = pipe.resize({ width: job.width, withoutEnlargement: true });

    const buf = await pipe.toBuffer();
    await sharp(buf).webp({ quality: 82 }).toFile(resolve(outDir, `${job.name}.webp`));
    await sharp(buf).avif({ quality: 60 }).toFile(resolve(outDir, `${job.name}.avif`));
    await sharp(buf).png().toFile(resolve(tmpDir, `${job.name}.png`)); // verification preview
    const meta = await sharp(buf).metadata();
    console.log(`✓ ${job.name}  ${meta.width}x${meta.height}`);
  }
  console.log("\nPreviews:", tmpDir);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
