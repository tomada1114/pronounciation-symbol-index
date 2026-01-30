'use client'

import { useCallback, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'difficult-phonemes'

function getSnapshot(): ReadonlySet<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === null) return new Set<string>()
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return new Set<string>()
    return new Set<string>(parsed.filter((v): v is string => typeof v === 'string'))
  } catch {
    return new Set<string>()
  }
}

const EMPTY_SET: ReadonlySet<string> = new Set<string>()

function getServerSnapshot(): ReadonlySet<string> {
  return EMPTY_SET
}

let cachedSnapshot: ReadonlySet<string> = new Set<string>()

function subscribe(onStoreChange: () => void): () => void {
  cachedSnapshot = getSnapshot()

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      cachedSnapshot = getSnapshot()
      onStoreChange()
    }
  }

  const handleCustom = () => {
    cachedSnapshot = getSnapshot()
    onStoreChange()
  }

  window.addEventListener('storage', handleStorage)
  window.addEventListener('difficult-phonemes-updated', handleCustom)
  return () => {
    window.removeEventListener('storage', handleStorage)
    window.removeEventListener('difficult-phonemes-updated', handleCustom)
  }
}

function getClientSnapshot(): ReadonlySet<string> {
  return cachedSnapshot
}

function writeToStorage(symbols: ReadonlySet<string>): void {
  const json = JSON.stringify([...symbols])
  localStorage.setItem(STORAGE_KEY, json)
  cachedSnapshot = symbols
  window.dispatchEvent(new Event('difficult-phonemes-updated'))
}

export function useDifficultPhonemes() {
  const symbols = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot)

  const toggleDifficult = useCallback(
    (symbol: string) => {
      const next = new Set(symbols)
      if (next.has(symbol)) {
        next.delete(symbol)
      } else {
        next.add(symbol)
      }
      writeToStorage(next)
    },
    [symbols],
  )

  const isDifficult = useCallback((symbol: string): boolean => symbols.has(symbol), [symbols])

  return { symbols, toggleDifficult, isDifficult } as const
}
