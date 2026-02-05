import { describe, expect, it } from 'vitest'
import { ALL_PHONEMES } from '../phonemes'
import { isPhoneme } from '../types'

describe('ALL_PHONEMES', () => {
  it('contains exactly 47 phonemes', () => {
    expect(ALL_PHONEMES).toHaveLength(47)
  })

  describe('category counts', () => {
    it('has 24 consonants', () => {
      const consonants = ALL_PHONEMES.filter((p) => p.category === 'consonant')
      expect(consonants).toHaveLength(24)
    })

    it('has 11 monophthongs', () => {
      const monophthongs = ALL_PHONEMES.filter((p) => p.category === 'monophthong')
      expect(monophthongs).toHaveLength(11)
    })

    it('has 5 diphthongs', () => {
      const diphthongs = ALL_PHONEMES.filter((p) => p.category === 'diphthong')
      expect(diphthongs).toHaveLength(5)
    })

    it('has 7 r-colored vowels', () => {
      const rColored = ALL_PHONEMES.filter((p) => p.category === 'r-colored')
      expect(rColored).toHaveLength(7)
    })
  })

  describe('subcategory counts', () => {
    it('has 6 plosives', () => {
      const plosives = ALL_PHONEMES.filter((p) => p.subcategory === 'plosive')
      expect(plosives).toHaveLength(6)
    })

    it('has 9 fricatives', () => {
      const fricatives = ALL_PHONEMES.filter((p) => p.subcategory === 'fricative')
      expect(fricatives).toHaveLength(9)
    })

    it('has 2 affricates', () => {
      const affricates = ALL_PHONEMES.filter((p) => p.subcategory === 'affricate')
      expect(affricates).toHaveLength(2)
    })

    it('has 3 nasals', () => {
      const nasals = ALL_PHONEMES.filter((p) => p.subcategory === 'nasal')
      expect(nasals).toHaveLength(3)
    })

    it('has 2 liquids', () => {
      const liquids = ALL_PHONEMES.filter((p) => p.subcategory === 'liquid')
      expect(liquids).toHaveLength(2)
    })

    it('has 2 glides', () => {
      const glides = ALL_PHONEMES.filter((p) => p.subcategory === 'glide')
      expect(glides).toHaveLength(2)
    })

    it('has 4 front vowels', () => {
      const frontVowels = ALL_PHONEMES.filter((p) => p.subcategory === 'front-vowel')
      expect(frontVowels).toHaveLength(4)
    })

    it('has 3 central vowels', () => {
      const centralVowels = ALL_PHONEMES.filter((p) => p.subcategory === 'central-vowel')
      expect(centralVowels).toHaveLength(3)
    })

    it('has 4 back vowels', () => {
      const backVowels = ALL_PHONEMES.filter((p) => p.subcategory === 'back-vowel')
      expect(backVowels).toHaveLength(4)
    })

    it('has 5 diphthongs', () => {
      const diphthongs = ALL_PHONEMES.filter((p) => p.subcategory === 'diphthong')
      expect(diphthongs).toHaveLength(5)
    })

    it('has 7 r-colored vowels', () => {
      const rColoredVowels = ALL_PHONEMES.filter((p) => p.subcategory === 'r-colored-vowel')
      expect(rColoredVowels).toHaveLength(7)
    })
  })

  describe('required fields', () => {
    it('every phoneme has all required fields', () => {
      for (const phoneme of ALL_PHONEMES) {
        expect(phoneme.symbol).toBeDefined()
        expect(typeof phoneme.symbol).toBe('string')
        expect(phoneme.displaySymbol).toBeDefined()
        expect(typeof phoneme.displaySymbol).toBe('string')
        expect(phoneme.category).toBeDefined()
        expect(phoneme.subcategory).toBeDefined()
        expect(phoneme.exampleWord).toBeDefined()
        expect(typeof phoneme.exampleWord).toBe('string')
        expect(phoneme.elsaNotation).toBeDefined()
        expect(typeof phoneme.elsaNotation).toBe('string')
        expect(phoneme.japaneseApprox).toBeDefined()
        expect(typeof phoneme.japaneseApprox).toBe('string')
        // New structured fields
        expect(phoneme.articulation).toBeDefined()
        expect(phoneme.articulation.lips).toBeDefined()
        expect(phoneme.articulation.lips.shape).toBeDefined()
        expect(typeof phoneme.articulation.lips.description).toBe('string')
        expect(phoneme.articulation.tongue).toBeDefined()
        expect(phoneme.articulation.tongue.region).toBeDefined()
        expect(typeof phoneme.articulation.tongue.description).toBe('string')
        expect(phoneme.pronunciationGuide).toBeDefined()
        expect(typeof phoneme.pronunciationGuide.mechanism).toBe('string')
        expect(typeof phoneme.pronunciationGuide.comparison).toBe('string')
      }
    })

    it('every phoneme passes the isPhoneme type guard', () => {
      for (const phoneme of ALL_PHONEMES) {
        expect(isPhoneme(phoneme)).toBe(true)
      }
    })
  })

  describe('displaySymbol format', () => {
    it('every displaySymbol is in "/symbol/" format', () => {
      for (const phoneme of ALL_PHONEMES) {
        expect(phoneme.displaySymbol).toMatch(/^\/.*\/$/)
      }
    })

    it('displaySymbol wraps the symbol with slashes', () => {
      for (const phoneme of ALL_PHONEMES) {
        expect(phoneme.displaySymbol).toBe(`/${phoneme.symbol}/`)
      }
    })
  })

  describe('immutability', () => {
    it('ALL_PHONEMES array is frozen', () => {
      expect(Object.isFrozen(ALL_PHONEMES)).toBe(true)
    })

    it('each phoneme object is frozen', () => {
      for (const phoneme of ALL_PHONEMES) {
        expect(Object.isFrozen(phoneme)).toBe(true)
      }
    })

    it('each articulation object is frozen', () => {
      for (const phoneme of ALL_PHONEMES) {
        expect(Object.isFrozen(phoneme.articulation)).toBe(true)
      }
    })

    it('each lips sub-object is frozen', () => {
      for (const phoneme of ALL_PHONEMES) {
        expect(Object.isFrozen(phoneme.articulation.lips)).toBe(true)
      }
    })

    it('each tongue sub-object is frozen', () => {
      for (const phoneme of ALL_PHONEMES) {
        expect(Object.isFrozen(phoneme.articulation.tongue)).toBe(true)
      }
    })

    it('each pronunciationGuide object is frozen', () => {
      for (const phoneme of ALL_PHONEMES) {
        expect(Object.isFrozen(phoneme.pronunciationGuide)).toBe(true)
      }
    })
  })
})
