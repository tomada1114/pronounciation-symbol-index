import { describe, expect, it } from 'vitest'
import { getPhonemesByCategory, getSubcategoryLabel, groupBySubcategory } from '../helpers'
import type { Subcategory } from '../types'

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
