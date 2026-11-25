// Uso: node add-font.mjs ruta/NinjaNaruto.ttf [ruta/NinjaNaruto-Bold.ttf]
// Copia la fuente a assets/, calcula sha256 y bytes, y la aplica a los 7 temas.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const [regular, bold] = process.argv.slice(2);
if (!regular) { console.error("Uso: node add-font.mjs fuente.ttf [fuente-bold.ttf]"); process.exit(1); }

const here = path.dirname(new URL(import.meta.url).pathname);
const manifestPath = path.join(here, "kino-plugin.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
fs.mkdirSync(path.join(here, "assets"), { recursive: true });

const assets = (manifest.assets ?? []).filter((a) => !a.id.startsWith("font-"));
const fontFamily = {};
for (const [slot, file] of [["regular", regular], ["bold", bold]]) {
  if (!file) continue;
  const ext = path.extname(file).toLowerCase();
  if (![".ttf", ".otf"].includes(ext)) { console.error(`${file}: debe ser .ttf u .otf`); process.exit(1); }
  const buf = fs.readFileSync(file);
  if (buf.length > 1_000_000) { console.error(`${file}: pesa más de 1.000.000 bytes`); process.exit(1); }
  const id = "font-" + slot;
  const rel = `assets/${id}${ext}`;
  fs.writeFileSync(path.join(here, rel), buf);
  assets.push({ id, path: rel, sha256: crypto.createHash("sha256").update(buf).digest("hex"), bytes: buf.length });
  fontFamily[slot] = id;
}
manifest.assets = assets;
for (const t of manifest.appThemes) t.typography = { ...t.typography, fontFamily };
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log("Fuente aplicada a", manifest.appThemes.length, "temas:", fontFamily);
