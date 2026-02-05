import { describe, expect, it } from 'vitest'
import { isPhoneme } from '../types'
import type { Phoneme } from '../types'

describe('isPhoneme', () => {
  const validPhoneme: Phoneme = {
    symbol: 'p',
    displaySymbol: '/p/',
    category: 'consonant',
    subcategory: 'plosive',
    voicing: '無声',
    articulationPoint: '両唇',
    lipPosition: '上下の唇をしっかり閉じて密閉する',
    tonguePosition: '特定の位置を取らず後続の母音に備えてリラックス',
    exampleWord: 'pat',
    elsaNotation: '/pæt/',
    japaneseApprox: 'パ行',
    description: 'この音の発音方法の説明がここに入ります。',
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
      openness: '狭（閉）',
      lipPosition: '左右に横に引いて笑顔のような形にする',
      tonguePosition: '舌の前部を硬口蓋に向かって最も高い位置に持ち上げる',
      exampleWord: 'feet',
      elsaNotation: '/fit/',
      japaneseApprox: '「イー」（長め）',
      description: 'この音の発音方法の説明がここに入ります。',
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
      // missing subcategory, exampleWord, elsaNotation, japaneseApprox, description
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

  it('returns false when lipPosition is missing', () => {
    const { lipPosition, ...withoutLip } = validPhoneme
    expect(isPhoneme(withoutLip)).toBe(false)
  })

  it('returns false when tonguePosition is missing', () => {
    const { tonguePosition, ...withoutTongue } = validPhoneme
    expect(isPhoneme(withoutTongue)).toBe(false)
  })
})
