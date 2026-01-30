import { describe, expect, it } from 'vitest'
import { getPhonemesBySymbols } from '../bookmark'

describe('getPhonemesBySymbols', () => {
  it('returns phonemes matching the given symbols', () => {
    const symbols = new Set(['p', 'b'])
    const result = getPhonemesBySymbols(symbols)

    expect(result).toHaveLength(2)
    expect(result[0].symbol).toBe('p')
    expect(result[1].symbol).toBe('b')
  })

  it('returns an empty array when symbols set is empty', () => {
    const result = getPhonemesBySymbols(new Set())
    expect(result).toEqual([])
  })

  it('ignores symbols that do not match any phoneme', () => {
    const symbols = new Set(['p', 'nonexistent'])
    const result = getPhonemesBySymbols(symbols)

    expect(result).toHaveLength(1)
    expect(result[0].symbol).toBe('p')
  })

  it('returns phonemes in the same order as ALL_PHONEMES', () => {
    const symbols = new Set(['k', 'b', 'p'])
    const result = getPhonemesBySymbols(symbols)

    expect(result).toHaveLength(3)
    expect(result[0].symbol).toBe('p')
    expect(result[1].symbol).toBe('b')
    expect(result[2].symbol).toBe('k')
  })

  it('returns a new array (does not mutate)', () => {
    const symbols = new Set(['p'])
    const result1 = getPhonemesBySymbols(symbols)
    const result2 = getPhonemesBySymbols(symbols)

    expect(result1).not.toBe(result2)
    expect(result1).toEqual(result2)
  })
})
