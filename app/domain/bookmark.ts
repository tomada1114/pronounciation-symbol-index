import { ALL_PHONEMES } from './phonemes'
import type { Phoneme } from './types'

export function getPhonemesBySymbols(symbols: ReadonlySet<string>): readonly Phoneme[] {
  return ALL_PHONEMES.filter((p) => symbols.has(p.symbol))
}
