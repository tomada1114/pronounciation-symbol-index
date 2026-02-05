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

export type LipShape = 'closed' | 'rounded' | 'spread' | 'labiodental' | 'neutral' | 'dynamic'

export type TongueRegion = 'tip' | 'blade' | 'front' | 'center' | 'back' | 'neutral' | 'dynamic'

export type TongueTarget =
  | 'alveolar' // 歯茎
  | 'post-alveolar' // 後部歯茎
  | 'palatal' // 硬口蓋
  | 'velar' // 軟口蓋
  | 'dental' // 歯
  | 'interdental' // 歯間
  | 'none' // 接触なし

export interface LipArticulation {
  readonly shape: LipShape
  readonly description: string
}

export interface TongueArticulation {
  readonly region: TongueRegion
  readonly target?: TongueTarget
  readonly description: string
}

export interface Articulation {
  readonly lips: LipArticulation
  readonly tongue: TongueArticulation
  readonly voicing?: string
  readonly articulationPoint?: string
  readonly openness?: string
  readonly movement?: string
}

export interface PronunciationGuide {
  readonly mechanism: string
  readonly comparison: string
}

export interface Phoneme {
  readonly symbol: string
  readonly displaySymbol: string
  readonly category: Category
  readonly subcategory: Subcategory
  readonly articulation: Articulation
  readonly exampleWord: string
  readonly elsaNotation: string
  readonly japaneseApprox: string
  readonly pronunciationGuide: PronunciationGuide
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

const VALID_LIP_SHAPES: ReadonlySet<string> = new Set<LipShape>([
  'closed',
  'rounded',
  'spread',
  'labiodental',
  'neutral',
  'dynamic',
])

const VALID_TONGUE_REGIONS: ReadonlySet<string> = new Set<TongueRegion>([
  'tip',
  'blade',
  'front',
  'center',
  'back',
  'neutral',
  'dynamic',
])

const VALID_TONGUE_TARGETS: ReadonlySet<string> = new Set<TongueTarget>([
  'alveolar',
  'post-alveolar',
  'palatal',
  'velar',
  'dental',
  'interdental',
  'none',
])

function isValidArticulation(value: unknown): value is Articulation {
  if (value === null || value === undefined || typeof value !== 'object') {
    return false
  }

  const art = value as Record<string, unknown>

  // Lips sub-object validation
  if (art.lips === null || art.lips === undefined || typeof art.lips !== 'object') {
    return false
  }
  const lips = art.lips as Record<string, unknown>
  if (
    typeof lips.shape !== 'string' ||
    !VALID_LIP_SHAPES.has(lips.shape) ||
    typeof lips.description !== 'string'
  ) {
    return false
  }

  // Tongue sub-object validation
  if (art.tongue === null || art.tongue === undefined || typeof art.tongue !== 'object') {
    return false
  }
  const tongue = art.tongue as Record<string, unknown>
  if (
    typeof tongue.region !== 'string' ||
    !VALID_TONGUE_REGIONS.has(tongue.region) ||
    typeof tongue.description !== 'string'
  ) {
    return false
  }
  // target is optional, but if present must be valid
  if (tongue.target !== undefined && !VALID_TONGUE_TARGETS.has(tongue.target as string)) {
    return false
  }

  return true
}

function isValidPronunciationGuide(value: unknown): value is PronunciationGuide {
  if (value === null || value === undefined || typeof value !== 'object') {
    return false
  }

  const guide = value as Record<string, unknown>
  return typeof guide.mechanism === 'string' && typeof guide.comparison === 'string'
}

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
    isValidArticulation(obj.articulation) &&
    typeof obj.exampleWord === 'string' &&
    typeof obj.elsaNotation === 'string' &&
    typeof obj.japaneseApprox === 'string' &&
    isValidPronunciationGuide(obj.pronunciationGuide)
  )
}
