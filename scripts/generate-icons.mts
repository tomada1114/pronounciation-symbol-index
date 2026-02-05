import { createCanvas } from '@napi-rs/canvas'
import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const iconsDir = join(__dirname, '..', 'public', 'icons')

mkdirSync(iconsDir, { recursive: true })

const BG_COLOR = '#0a0a0b'
const ACCENT_COLOR = '#3b82f6'

const SIZES = [72, 96, 128, 144, 152, 192, 384, 512]

function generateIcon(size: number, isMaskable = false): Buffer {
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = BG_COLOR
  ctx.fillRect(0, 0, size, size)

  ctx.fillStyle = ACCENT_COLOR
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  const fontSize = isMaskable ? size * 0.35 : size * 0.45
  ctx.font = `bold ${fontSize}px "Noto Sans", sans-serif`

  const centerX = size / 2
  const centerY = size / 2

  ctx.fillText('/ə/', centerX, centerY)

  return canvas.toBuffer('image/png')
}

function generateFavicon(size: number): Buffer {
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = ACCENT_COLOR
  ctx.fillRect(0, 0, size, size)

  ctx.fillStyle = '#ffffff'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  const fontSize = size * 0.6
  ctx.font = `bold ${fontSize}px "Noto Sans", sans-serif`

  ctx.fillText('ə', size / 2, size / 2)

  return canvas.toBuffer('image/png')
}

console.log('Generating PWA icons...')

for (const size of SIZES) {
  const buffer = generateIcon(size)
  const filename = `icon-${size}x${size}.png`
  writeFileSync(join(iconsDir, filename), buffer)
  console.log(`  ✓ ${filename}`)
}

const maskableBuffer = generateIcon(512, true)
writeFileSync(join(iconsDir, 'maskable-icon-512x512.png'), maskableBuffer)
console.log('  ✓ maskable-icon-512x512.png')

const appleIconBuffer = generateIcon(180)
writeFileSync(join(iconsDir, 'apple-touch-icon.png'), appleIconBuffer)
console.log('  ✓ apple-touch-icon.png')

const faviconBuffer = generateFavicon(32)
writeFileSync(join(iconsDir, 'favicon.ico'), faviconBuffer)
console.log('  ✓ favicon.ico')

console.log('\nDone! Icons generated in public/icons/')
