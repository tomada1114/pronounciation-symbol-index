export type Category = 'consonant' | 'monophthong' | 'diphthong' | 'r-colored'

export type Subcategory =
  | 'plosive'
  | 'fricative'
  | 'affricate'
  | 'nasal'
  | 'liquid'
  | 'glide'
  | 'front-vowel'
  | 'central-vowel'
  | 'back-vowel'
  | 'diphthong'
  | 'r-colored-vowel'

export interface Phoneme {
  readonly symbol: string
  readonly displaySymbol: string
  readonly category: Category
  readonly subcategory: Subcategory
  readonly voicing?: string
  readonly articulationPoint?: string
  readonly openness?: string
  readonly movement?: string
  readonly lipPosition: string
  readonly tonguePosition: string
  readonly exampleWord: string
  readonly elsaNotation: string
  readonly japaneseApprox: string
  readonly description: string
}

const VALID_CATEGORIES: ReadonlySet<string> = new Set<Category>([
  'consonant',
  'monophthong',
  'diphthong',
  'r-colored',
])

const VALID_SUBCATEGORIES: ReadonlySet<string> = new Set<Subcategory>([
  'plosive',
  'fricative',
  'affricate',
  'nasal',
  'liquid',
  'glide',
  'front-vowel',
  'central-vowel',
  'back-vowel',
  'diphthong',
  'r-colored-vowel',
])

export function isPhoneme(value: unknown): value is Phoneme {
  if (value === null || value === undefined || typeof value !== 'object') {
    return false
  }

  const obj = value as Record<string, unknown>

  return (
    typeof obj.symbol === 'string' &&
    typeof obj.displaySymbol === 'string' &&
    typeof obj.category === 'string' &&
    VALID_CATEGORIES.has(obj.category) &&
    typeof obj.subcategory === 'string' &&
    VALID_SUBCATEGORIES.has(obj.subcategory) &&
    typeof obj.lipPosition === 'string' &&
    typeof obj.tonguePosition === 'string' &&
    typeof obj.exampleWord === 'string' &&
    typeof obj.elsaNotation === 'string' &&
    typeof obj.japaneseApprox === 'string' &&
    typeof obj.description === 'string'
  )
}
