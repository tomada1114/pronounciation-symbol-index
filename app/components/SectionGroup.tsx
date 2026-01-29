'use client'

import { getSubcategoryLabel } from '@/app/domain/helpers'
import type { Phoneme, Subcategory } from '@/app/domain/types'

import { PhonemeCard } from './PhonemeCard'

interface SectionGroupProps {
  readonly subcategory: Subcategory
  readonly phonemes: readonly Phoneme[]
  readonly expandedSymbols: ReadonlySet<string>
  readonly onToggle: (symbol: string) => void
}

export function SectionGroup({
  subcategory,
  phonemes,
  expandedSymbols,
  onToggle,
}: SectionGroupProps) {
  const label = getSubcategoryLabel(subcategory)

  return (
    <section>
      <h2
        className="mb-3 mt-6 text-lg font-bold"
        style={{ color: 'var(--text-secondary, #A1A1AA)' }}
      >
        {label.ja}（{label.en}）
      </h2>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {phonemes.map((phoneme) => (
          <PhonemeCard
            key={phoneme.symbol}
            phoneme={phoneme}
            isExpanded={expandedSymbols.has(phoneme.symbol)}
            onToggle={() => onToggle(phoneme.symbol)}
          />
        ))}
      </div>
    </section>
  )
}
