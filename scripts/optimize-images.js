import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname, dirname, basename } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ASSETS_DIR = join(__dirname, '../src/assets')

const SKIP = ['logo', 'logo-', 'integral-solutions-gutters-logo']

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === 'psd') continue
      files.push(...(await walk(full)))
    } else if (['.png', '.jpg', '.jpeg'].includes(extname(e.name).toLowerCase())) {
      if (SKIP.some((s) => e.name.toLowerCase().startsWith(s))) continue
      files.push(full)
    }
  }
  return files
}

async function main() {
  const files = await walk(ASSETS_DIR)
  console.log(`Found ${files.length} images to optimize\n`)

  let saved = 0
  for (const src of files) {
    const dest = src.replace(/\.(png|jpe?g)$/i, '.webp')
    const srcStat = await stat(src)
    await sharp(src)
      .webp({ quality: 82, effort: 4 })
      .toFile(dest)
    const destStat = await stat(dest)
    const reduction = (((srcStat.size - destStat.size) / srcStat.size) * 100).toFixed(1)
    saved += srcStat.size - destStat.size
    console.log(
      `  ✓ ${basename(src).slice(0, 50).padEnd(52)} ${(srcStat.size / 1024).toFixed(0).padStart(6)} KB → ${(destStat.size / 1024).toFixed(0).padStart(5)} KB  (${reduction}% smaller)`
    )
  }
  console.log(`\nTotal saved: ${(saved / 1024 / 1024).toFixed(2)} MB`)
}

main().catch(console.error)
