/*
 * AERIS — generación de imágenes con fal.ai (ejecutar en LOCAL, no en el entorno web).
 * El entorno de Claude Code web bloquea fal.run por su network policy.
 * Uso:  FAL_KEY='tu-key' node scripts/fal-generate.mjs
 * Requiere: npm i (sharp ya está en devDependencies).
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const KEY = process.env.FAL_KEY;
if (!KEY) { console.error("Falta FAL_KEY. Uso: FAL_KEY='tu-key' node scripts/fal-generate.mjs"); process.exit(1); }
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = resolve(ROOT, "public/img");
const TMP = resolve(ROOT, ".falgen-preview");
mkdirSync(OUT, { recursive: true });
mkdirSync(TMP, { recursive: true });

const STYLE = "warm cream and off-white tones, pale concrete, soft natural daylight, minimalist editorial fine-art architectural photography, photorealistic, high detail, no people, no text, no words";

const jobs = [
  { name: "hero-arch", model: "fal-ai/flux/dev",
    prompt: `A single large smooth curved concrete cylindrical structure, the curved form positioned toward the right with generous empty cream-colored negative space on the left, seamless soft studio-like cream background, subtle soft shadows, ${STYLE}`,
    size: { width: 1536, height: 1024 }, out: { w: 1536 } },

  { name: "door-agencia", model: "fal-ai/flux/dev",
    prompt: `A closed doorway in a smooth pale concrete wall boarded shut with two weathered wooden planks nailed in an X shape across it, frontal view, ${STYLE}`,
    size: { width: 768, height: 1024 }, out: { w: 720 } },
  { name: "door-equipo", model: "fal-ai/flux/dev",
    prompt: `A closed solid grey panelled door set in a smooth pale concrete wall, frontal symmetrical view, ${STYLE}`,
    size: { width: 768, height: 1024 }, out: { w: 720 } },
  { name: "door-freelance", model: "fal-ai/flux/dev",
    prompt: `A half-open pale grey stable door in a concrete wall, the lower half closed and the upper half open revealing a dark interior, frontal view, ${STYLE}`,
    size: { width: 768, height: 1024 }, out: { w: 720 } },

  { name: "caso-kmeleon", model: "fal-ai/flux/dev",
    prompt: `An elegant minimalist curved concrete staircase ascending beside a tall pale wall, soft light, ${STYLE}`,
    size: { width: 1200, height: 800 }, out: { w: 1000 } },
  { name: "caso-artiverse", model: "fal-ai/flux/dev",
    prompt: `A large circular skylight opening in a curved concrete ceiling with bright daylight pouring through, seen from below, ${STYLE}`,
    size: { width: 1200, height: 800 }, out: { w: 1000 } },
  { name: "caso-closius", model: "fal-ai/flux/dev",
    prompt: `A long minimalist concrete corridor with a bright glowing light source at the far end, strong one-point perspective, soft shadows, ${STYLE}`,
    size: { width: 1200, height: 800 }, out: { w: 1000 } },
];

async function gen(job) {
  const r = await fetch(`https://fal.run/${job.model}`, {
    method: "POST",
    headers: { "Authorization": `Key ${KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: job.prompt,
      image_size: job.size,
      num_images: 1,
      num_inference_steps: 30,
      guidance_scale: 3.5,
      enable_safety_checker: false,
    }),
  });
  if (!r.ok) throw new Error(`${job.name}: HTTP ${r.status} ${(await r.text()).slice(0,200)}`);
  const data = await r.json();
  const url = data.images?.[0]?.url;
  if (!url) throw new Error(`${job.name}: no image url ${JSON.stringify(data).slice(0,200)}`);
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
  const base = sharp(buf).resize({ width: job.out.w, withoutEnlargement: true });
  await base.clone().webp({ quality: 84 }).toFile(`${OUT}/${job.name}.webp`);
  await base.clone().avif({ quality: 60 }).toFile(`${OUT}/${job.name}.avif`);
  await base.clone().resize({ width: 320 }).png().toFile(`${TMP}/${job.name}.png`);
  console.log(`OK ${job.name}`);
}

let failed = 0;
for (const job of jobs) {
  try { await gen(job); } catch (e) { failed++; console.error("FAIL", e.message); }
}
console.log(`DONE failed=${failed}`);
