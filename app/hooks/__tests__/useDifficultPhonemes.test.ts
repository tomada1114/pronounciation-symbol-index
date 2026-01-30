import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { useDifficultPhonemes } from '../useDifficultPhonemes'

const STORAGE_KEY = 'difficult-phonemes'

describe('useDifficultPhonemes', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('returns an empty set when localStorage is empty', () => {
    const { result } = renderHook(() => useDifficultPhonemes())

    expect(result.current.symbols.size).toBe(0)
  })

  it('reads existing symbols from localStorage', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(['p', 'b']))

    const { result } = renderHook(() => useDifficultPhonemes())

    expect(result.current.symbols.size).toBe(2)
    expect(result.current.isDifficult('p')).toBe(true)
    expect(result.current.isDifficult('b')).toBe(true)
  })

  it('toggleDifficult adds a symbol', () => {
    const { result } = renderHook(() => useDifficultPhonemes())

    act(() => {
      result.current.toggleDifficult('p')
    })

    expect(result.current.isDifficult('p')).toBe(true)
    expect(result.current.symbols.size).toBe(1)

    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    expect(stored).toEqual(['p'])
  })

  it('toggleDifficult removes an existing symbol', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(['p', 'b']))

    const { result } = renderHook(() => useDifficultPhonemes())

    act(() => {
      result.current.toggleDifficult('p')
    })

    expect(result.current.isDifficult('p')).toBe(false)
    expect(result.current.isDifficult('b')).toBe(true)
    expect(result.current.symbols.size).toBe(1)
  })

  it('isDifficult returns false for unknown symbols', () => {
    const { result } = renderHook(() => useDifficultPhonemes())

    expect(result.current.isDifficult('nonexistent')).toBe(false)
  })

  it('handles invalid JSON in localStorage gracefully', () => {
    localStorage.setItem(STORAGE_KEY, 'not-valid-json')

    const { result } = renderHook(() => useDifficultPhonemes())

    expect(result.current.symbols.size).toBe(0)
  })

  it('handles non-array JSON in localStorage gracefully', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ key: 'value' }))

    const { result } = renderHook(() => useDifficultPhonemes())

    expect(result.current.symbols.size).toBe(0)
  })

  it('filters non-string values from localStorage array', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(['p', 123, null, 'b']))

    const { result } = renderHook(() => useDifficultPhonemes())

    expect(result.current.symbols.size).toBe(2)
    expect(result.current.isDifficult('p')).toBe(true)
    expect(result.current.isDifficult('b')).toBe(true)
  })
})
