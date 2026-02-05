import { describe, expect, it } from 'vitest'
import {
  ORDERED_CATEGORIES,
  getLipShapeLabel,
  getPhonemesByCategory,
  getSubcategoryLabel,
  getTongueRegionLabel,
  getTongueTargetLabel,
  groupBySubcategory,
} from '../helpers'
import type { LipShape, Subcategory, TongueRegion, TongueTarget } from '../types'

describe('ORDERED_CATEGORIES', () => {
  it('has exactly 4 categories', () => {
    expect(ORDERED_CATEGORIES).toHaveLength(4)
  })

  it('is in the correct order', () => {
    expect(ORDERED_CATEGORIES.map((c) => c.category)).toEqual([
      'consonant',
      'monophthong',
      'diphthong',
      'r-colored',
    ])
  })

  it('has Japanese labels for each category', () => {
    expect(ORDERED_CATEGORIES.map((c) => c.label)).toEqual([
      '子音',
      '単母音',
      '二重母音',
      'R母音',
    ])
  })
})

describe('getPhonemesByCategory', () => {
  it('returns 24 consonants', () => {
    const result = getPhonemesByCategory('consonant')
    expect(result).toHaveLength(24)
    expect(result.every((p) => p.category === 'consonant')).toBe(true)
  })

  it('returns 11 monophthongs', () => {
    const result = getPhonemesByCategory('monophthong')
    expect(result).toHaveLength(11)
    expect(result.every((p) => p.category === 'monophthong')).toBe(true)
  })

  it('returns 5 diphthongs', () => {
    const result = getPhonemesByCategory('diphthong')
    expect(result).toHaveLength(5)
    expect(result.every((p) => p.category === 'diphthong')).toBe(true)
  })

  it('returns 7 r-colored vowels', () => {
    const result = getPhonemesByCategory('r-colored')
    expect(result).toHaveLength(7)
    expect(result.every((p) => p.category === 'r-colored')).toBe(true)
  })

  it('returns a new array (does not mutate ALL_PHONEMES)', () => {
    const result1 = getPhonemesByCategory('consonant')
    const result2 = getPhonemesByCategory('consonant')
    expect(result1).not.toBe(result2)
    expect(result1).toEqual(result2)
  })
})

describe('groupBySubcategory', () => {
  it('groups consonants by subcategory', () => {
    const consonants = getPhonemesByCategory('consonant')
    const grouped = groupBySubcategory(consonants)

    expect(Object.keys(grouped)).toContain('plosive')
    expect(Object.keys(grouped)).toContain('fricative')
    expect(Object.keys(grouped)).toContain('affricate')
    expect(Object.keys(grouped)).toContain('nasal')
    expect(Object.keys(grouped)).toContain('liquid')
    expect(Object.keys(grouped)).toContain('glide')
    expect(grouped['plosive']).toHaveLength(6)
    expect(grouped['fricative']).toHaveLength(9)
    expect(grouped['affricate']).toHaveLength(2)
    expect(grouped['nasal']).toHaveLength(3)
    expect(grouped['liquid']).toHaveLength(2)
    expect(grouped['glide']).toHaveLength(2)
  })

  it('groups monophthongs by subcategory', () => {
    const monophthongs = getPhonemesByCategory('monophthong')
    const grouped = groupBySubcategory(monophthongs)

    expect(grouped['front-vowel']).toHaveLength(4)
    expect(grouped['central-vowel']).toHaveLength(3)
    expect(grouped['back-vowel']).toHaveLength(4)
  })

  it('returns an empty object for an empty array', () => {
    const grouped = groupBySubcategory([])
    expect(grouped).toEqual({})
  })
})

describe('getSubcategoryLabel', () => {
  it('returns correct label for plosive', () => {
    expect(getSubcategoryLabel('plosive')).toEqual({
      ja: '破裂音',
      en: 'Plosives',
    })
  })

  it('returns correct label for fricative', () => {
    expect(getSubcategoryLabel('fricative')).toEqual({
      ja: '摩擦音',
      en: 'Fricatives',
    })
  })

  it('returns correct label for affricate', () => {
    expect(getSubcategoryLabel('affricate')).toEqual({
      ja: '破擦音',
      en: 'Affricates',
    })
  })

  it('returns correct label for nasal', () => {
    expect(getSubcategoryLabel('nasal')).toEqual({
      ja: '鼻音',
      en: 'Nasals',
    })
  })

  it('returns correct label for liquid', () => {
    expect(getSubcategoryLabel('liquid')).toEqual({
      ja: '流音',
      en: 'Liquids',
    })
  })

  it('returns correct label for glide', () => {
    expect(getSubcategoryLabel('glide')).toEqual({
      ja: '半母音',
      en: 'Glides',
    })
  })

  it('returns correct label for front-vowel', () => {
    expect(getSubcategoryLabel('front-vowel')).toEqual({
      ja: '前舌母音',
      en: 'Front Vowels',
    })
  })

  it('returns correct label for central-vowel', () => {
    expect(getSubcategoryLabel('central-vowel')).toEqual({
      ja: '中舌母音',
      en: 'Central Vowels',
    })
  })

  it('returns correct label for back-vowel', () => {
    expect(getSubcategoryLabel('back-vowel')).toEqual({
      ja: '後舌母音',
      en: 'Back Vowels',
    })
  })

  it('returns correct label for diphthong', () => {
    expect(getSubcategoryLabel('diphthong')).toEqual({
      ja: '二重母音',
      en: 'Diphthongs',
    })
  })

  it('returns correct label for r-colored-vowel', () => {
    expect(getSubcategoryLabel('r-colored-vowel')).toEqual({
      ja: 'R母音',
      en: 'R-colored Vowels',
    })
  })

  it('returns a label for every Subcategory value', () => {
    const allSubcategories: Subcategory[] = [
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
    ]

    for (const subcategory of allSubcategories) {
      const label = getSubcategoryLabel(subcategory)
      expect(label).toBeDefined()
      expect(typeof label.ja).toBe('string')
      expect(typeof label.en).toBe('string')
      expect(label.ja.length).toBeGreaterThan(0)
      expect(label.en.length).toBeGreaterThan(0)
    }
  })
})

describe('getLipShapeLabel', () => {
  it('returns correct label for closed', () => {
    expect(getLipShapeLabel('closed')).toEqual({
      ja: '閉じる',
      en: 'Closed',
    })
  })

  it('returns correct label for rounded', () => {
    expect(getLipShapeLabel('rounded')).toEqual({
      ja: '丸める',
      en: 'Rounded',
    })
  })

  it('returns correct label for spread', () => {
    expect(getLipShapeLabel('spread')).toEqual({
      ja: '横引き',
      en: 'Spread',
    })
  })

  it('returns correct label for labiodental', () => {
    expect(getLipShapeLabel('labiodental')).toEqual({
      ja: '歯+唇',
      en: 'Labiodental',
    })
  })

  it('returns correct label for neutral', () => {
    expect(getLipShapeLabel('neutral')).toEqual({
      ja: '自然',
      en: 'Neutral',
    })
  })

  it('returns correct label for dynamic', () => {
    expect(getLipShapeLabel('dynamic')).toEqual({
      ja: '変化',
      en: 'Dynamic',
    })
  })

  it('returns a label for every LipShape value', () => {
    const allLipShapes: LipShape[] = [
      'closed',
      'rounded',
      'spread',
      'labiodental',
      'neutral',
      'dynamic',
    ]

    for (const shape of allLipShapes) {
      const label = getLipShapeLabel(shape)
      expect(label).toBeDefined()
      expect(typeof label.ja).toBe('string')
      expect(typeof label.en).toBe('string')
    }
  })
})

describe('getTongueRegionLabel', () => {
  it('returns correct label for tip', () => {
    expect(getTongueRegionLabel('tip')).toEqual({
      ja: '舌先',
      en: 'Tip',
    })
  })

  it('returns correct label for blade', () => {
    expect(getTongueRegionLabel('blade')).toEqual({
      ja: '前方',
      en: 'Blade',
    })
  })

  it('returns correct label for front', () => {
    expect(getTongueRegionLabel('front')).toEqual({
      ja: '前部',
      en: 'Front',
    })
  })

  it('returns correct label for center', () => {
    expect(getTongueRegionLabel('center')).toEqual({
      ja: '中央',
      en: 'Center',
    })
  })

  it('returns correct label for back', () => {
    expect(getTongueRegionLabel('back')).toEqual({
      ja: '舌の奥',
      en: 'Back',
    })
  })

  it('returns correct label for neutral', () => {
    expect(getTongueRegionLabel('neutral')).toEqual({
      ja: '特定なし',
      en: 'Neutral',
    })
  })

  it('returns correct label for dynamic', () => {
    expect(getTongueRegionLabel('dynamic')).toEqual({
      ja: '変化',
      en: 'Dynamic',
    })
  })

  it('returns a label for every TongueRegion value', () => {
    const allTongueRegions: TongueRegion[] = [
      'tip',
      'blade',
      'front',
      'center',
      'back',
      'neutral',
      'dynamic',
    ]

    for (const region of allTongueRegions) {
      const label = getTongueRegionLabel(region)
      expect(label).toBeDefined()
      expect(typeof label.ja).toBe('string')
      expect(typeof label.en).toBe('string')
    }
  })
})

describe('getTongueTargetLabel', () => {
  it('returns correct label for alveolar', () => {
    expect(getTongueTargetLabel('alveolar')).toEqual({
      ja: '歯茎',
      en: 'Alveolar',
    })
  })

  it('returns correct label for post-alveolar', () => {
    expect(getTongueTargetLabel('post-alveolar')).toEqual({
      ja: '後部歯茎',
      en: 'Post-alveolar',
    })
  })

  it('returns correct label for palatal', () => {
    expect(getTongueTargetLabel('palatal')).toEqual({
      ja: '硬口蓋',
      en: 'Palatal',
    })
  })

  it('returns correct label for velar', () => {
    expect(getTongueTargetLabel('velar')).toEqual({
      ja: '軟口蓋',
      en: 'Velar',
    })
  })

  it('returns correct label for dental', () => {
    expect(getTongueTargetLabel('dental')).toEqual({
      ja: '歯',
      en: 'Dental',
    })
  })

  it('returns correct label for interdental', () => {
    expect(getTongueTargetLabel('interdental')).toEqual({
      ja: '歯間',
      en: 'Interdental',
    })
  })

  it('returns correct label for none', () => {
    expect(getTongueTargetLabel('none')).toEqual({
      ja: 'なし',
      en: 'None',
    })
  })

  it('returns a label for every TongueTarget value', () => {
    const allTongueTargets: TongueTarget[] = [
      'alveolar',
      'post-alveolar',
      'palatal',
      'velar',
      'dental',
      'interdental',
      'none',
    ]

    for (const target of allTongueTargets) {
      const label = getTongueTargetLabel(target)
      expect(label).toBeDefined()
      expect(typeof label.ja).toBe('string')
      expect(typeof label.en).toBe('string')
    }
  })
})
