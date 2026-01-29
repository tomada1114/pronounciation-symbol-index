'use client'

import { getSubcategoryLabel } from '@/app/domain/helpers'
import type { Phoneme } from '@/app/domain/types'

import { PhonemeDetail } from './PhonemeDetail'

interface PhonemeCardProps {
  readonly phoneme: Phoneme
  readonly isExpanded: boolean
  readonly onToggle: () => void
}

export function PhonemeCard({ phoneme, isExpanded, onToggle }: PhonemeCardProps) {
  const subcategoryLabel = getSubcategoryLabel(phoneme.subcategory)

  return (
    <div
      className="rounded-[10px] border"
      style={{
        backgroundColor: 'var(--bg-secondary, #141416)',
        borderColor: isExpanded
          ? 'var(--border-active, #1E3A5F)'
          : 'var(--border-default, #242428)',
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="flex w-full min-h-[44px] cursor-pointer flex-col items-center justify-center p-4 transition-colors duration-150"
        style={{
          borderRadius: 'var(--radius-card, 10px)',
        }}
      >
        <span className="text-[28px] font-bold" style={{ color: 'var(--text-primary, #FAFAFA)' }}>
          {phoneme.displaySymbol}
        </span>
        <span className="mt-1 text-xs" style={{ color: 'var(--text-muted, #71717A)' }}>
          {subcategoryLabel.ja}
        </span>
        {isExpanded && (
          <span
            className="mt-1 transition-transform duration-200"
            style={{
              color: 'var(--text-muted, #71717A)',
              transform: 'rotate(180deg)',
            }}
          >
            ▾
          </span>
        )}
      </button>
      {isExpanded && (
        <div className="px-4 pb-4">
          <PhonemeDetail phoneme={phoneme} />
        </div>
      )}
    </div>
  )
}
