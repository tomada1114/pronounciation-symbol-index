import { describe, expect, it } from 'vitest'
import { isPhoneme } from '../types'
import type { Phoneme } from '../types'

describe('isPhoneme', () => {
  const validPhoneme: Phoneme = {
    symbol: 'p',
    displaySymbol: '/p/',
    category: 'consonant',
    subcategory: 'plosive',
    articulation: {
      lips: {
        shape: 'closed',
        description: '上下の唇をしっかり閉じて密閉する',
      },
      tongue: {
        region: 'neutral',
        description: '特定の位置を取らず後続の母音に備えてリラックス',
      },
      voicing: '無声',
      articulationPoint: '両唇',
    },
    exampleWord: 'pat',
    elsaNotation: '/pæt/',
    japaneseApprox: 'パ行',
    pronunciationGuide: {
      mechanism: 'この音の発音方法の説明がここに入ります。',
      comparison: '日本語との比較がここに入ります。',
    },
  }

  it('returns true for a valid Phoneme object', () => {
    expect(isPhoneme(validPhoneme)).toBe(true)
  })

  it('returns true for a valid vowel Phoneme without consonant-specific fields', () => {
    const vowel: Phoneme = {
      symbol: 'i',
      displaySymbol: '/i/',
      category: 'monophthong',
      subcategory: 'front-vowel',
      articulation: {
        lips: {
          shape: 'spread',
          description: '左右に横に引いて笑顔のような形にする',
        },
        tongue: {
          region: 'front',
          description: '舌の前部を硬口蓋に向かって最も高い位置に持ち上げる',
        },
        openness: '狭（閉）',
      },
      exampleWord: 'feet',
      elsaNotation: '/fit/',
      japaneseApprox: '「イー」（長め）',
      pronunciationGuide: {
        mechanism: 'この音の発音方法の説明がここに入ります。',
        comparison: '日本語との比較がここに入ります。',
      },
    }
    expect(isPhoneme(vowel)).toBe(true)
  })

  it('returns false for null', () => {
    expect(isPhoneme(null)).toBe(false)
  })

  it('returns false for undefined', () => {
    expect(isPhoneme(undefined)).toBe(false)
  })

  it('returns false for a string', () => {
    expect(isPhoneme('phoneme')).toBe(false)
  })

  it('returns false for a number', () => {
    expect(isPhoneme(42)).toBe(false)
  })

  it('returns false for an empty object', () => {
    expect(isPhoneme({})).toBe(false)
  })

  it('returns false for an object missing required fields', () => {
    const incomplete = {
      symbol: 'p',
      displaySymbol: '/p/',
      category: 'consonant',
      // missing subcategory, articulation, etc.
    }
    expect(isPhoneme(incomplete)).toBe(false)
  })

  it('returns false when symbol is not a string', () => {
    const invalid = { ...validPhoneme, symbol: 123 }
    expect(isPhoneme(invalid)).toBe(false)
  })

  it('returns false when category is not a valid Category', () => {
    const invalid = { ...validPhoneme, category: 'invalid' }
    expect(isPhoneme(invalid)).toBe(false)
  })

  it('returns false when articulation is missing', () => {
    const { articulation, ...withoutArticulation } = validPhoneme
    expect(isPhoneme(withoutArticulation)).toBe(false)
  })

  it('returns false when articulation.lips is missing', () => {
    const invalid = {
      ...validPhoneme,
      articulation: {
        tongue: validPhoneme.articulation.tongue,
      },
    }
    expect(isPhoneme(invalid)).toBe(false)
  })

  it('returns false when articulation.tongue is missing', () => {
    const invalid = {
      ...validPhoneme,
      articulation: {
        lips: validPhoneme.articulation.lips,
      },
    }
    expect(isPhoneme(invalid)).toBe(false)
  })

  it('returns false when lips.shape is invalid', () => {
    const invalid = {
      ...validPhoneme,
      articulation: {
        ...validPhoneme.articulation,
        lips: {
          shape: 'invalid-shape',
          description: 'test',
        },
      },
    }
    expect(isPhoneme(invalid)).toBe(false)
  })

  it('returns false when tongue.region is invalid', () => {
    const invalid = {
      ...validPhoneme,
      articulation: {
        ...validPhoneme.articulation,
        tongue: {
          region: 'invalid-region',
          description: 'test',
        },
      },
    }
    expect(isPhoneme(invalid)).toBe(false)
  })

  it('returns false when pronunciationGuide is missing', () => {
    const { pronunciationGuide, ...withoutGuide } = validPhoneme
    expect(isPhoneme(withoutGuide)).toBe(false)
  })

  it('returns false when pronunciationGuide.mechanism is missing', () => {
    const invalid = {
      ...validPhoneme,
      pronunciationGuide: {
        comparison: 'test',
      },
    }
    expect(isPhoneme(invalid)).toBe(false)
  })

  it('returns false when pronunciationGuide.comparison is missing', () => {
    const invalid = {
      ...validPhoneme,
      pronunciationGuide: {
        mechanism: 'test',
      },
    }
    expect(isPhoneme(invalid)).toBe(false)
  })
})
