'use client'

import { getSubcategoryLabel } from '@/app/domain/helpers'
import type { Phoneme } from '@/app/domain/types'

interface PhonemeCardProps {
  readonly phoneme: Phoneme
  readonly onSelect: () => void
}

export function PhonemeCard({ phoneme, onSelect }: PhonemeCardProps) {
  const subcategoryLabel = getSubcategoryLabel(phoneme.subcategory)

  return (
    <button
      onClick={onSelect}
      aria-haspopup="dialog"
      className="flex w-full min-h-[44px] cursor-pointer flex-col items-center justify-center rounded-[10px] border p-4 transition-colors duration-150"
      style={{
        backgroundColor: 'var(--bg-secondary, #141416)',
        borderColor: 'var(--border-default, #242428)',
      }}
    >
      <span className="text-[28px] font-bold" style={{ color: 'var(--text-primary, #FAFAFA)' }}>
        {phoneme.displaySymbol}
      </span>
      <span className="mt-1 text-xs" style={{ color: 'var(--text-muted, #71717A)' }}>
        {subcategoryLabel.ja}
      </span>
    </button>
  )
}
