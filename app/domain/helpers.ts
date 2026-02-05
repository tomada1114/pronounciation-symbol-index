import { ALL_PHONEMES } from './phonemes'
import type { Category, LipShape, Phoneme, Subcategory, TongueRegion } from './types'

export const ORDERED_CATEGORIES: readonly { readonly category: Category; readonly label: string }[] =
  [
    { category: 'consonant', label: '子音' },
    { category: 'monophthong', label: '単母音' },
    { category: 'diphthong', label: '二重母音' },
    { category: 'r-colored', label: 'R母音' },
  ]

export function getPhonemesByCategory(category: Category): Phoneme[] {
  return ALL_PHONEMES.filter((p) => p.category === category)
}

export function groupBySubcategory(phonemes: readonly Phoneme[]): Record<string, Phoneme[]> {
  const groups: Record<string, Phoneme[]> = {}

  for (const phoneme of phonemes) {
    const key = phoneme.subcategory
    const existing = groups[key]
    groups[key] = existing ? [...existing, phoneme] : [phoneme]
  }

  return groups
}

const SUBCATEGORY_LABELS: Record<Subcategory, { ja: string; en: string }> = {
  plosive: { ja: '破裂音', en: 'Plosives' },
  fricative: { ja: '摩擦音', en: 'Fricatives' },
  affricate: { ja: '破擦音', en: 'Affricates' },
  nasal: { ja: '鼻音', en: 'Nasals' },
  liquid: { ja: '流音', en: 'Liquids' },
  glide: { ja: '半母音', en: 'Glides' },
  'front-vowel': { ja: '前舌母音', en: 'Front Vowels' },
  'central-vowel': { ja: '中舌母音', en: 'Central Vowels' },
  'back-vowel': { ja: '後舌母音', en: 'Back Vowels' },
  diphthong: { ja: '二重母音', en: 'Diphthongs' },
  'r-colored-vowel': { ja: 'R母音', en: 'R-colored Vowels' },
}

export function getSubcategoryLabel(subcategory: Subcategory): { ja: string; en: string } {
  return SUBCATEGORY_LABELS[subcategory]
}

const LIP_SHAPE_LABELS: Record<LipShape, { ja: string; en: string }> = {
  closed: { ja: '閉じる', en: 'Closed' },
  rounded: { ja: '丸める', en: 'Rounded' },
  spread: { ja: '横引き', en: 'Spread' },
  labiodental: { ja: '歯+唇', en: 'Labiodental' },
  neutral: { ja: '自然', en: 'Neutral' },
  dynamic: { ja: '変化', en: 'Dynamic' },
}

const TONGUE_REGION_LABELS: Record<TongueRegion, { ja: string; en: string }> = {
  tip: { ja: '舌先', en: 'Tip' },
  blade: { ja: '前方', en: 'Blade' },
  front: { ja: '前部', en: 'Front' },
  center: { ja: '中央', en: 'Center' },
  back: { ja: '舌の奥', en: 'Back' },
  neutral: { ja: '特定なし', en: 'Neutral' },
  dynamic: { ja: '変化', en: 'Dynamic' },
}

export function getLipShapeLabel(shape: LipShape): { ja: string; en: string } {
  return LIP_SHAPE_LABELS[shape]
}

export function getTongueRegionLabel(region: TongueRegion): { ja: string; en: string } {
  return TONGUE_REGION_LABELS[region]
}
