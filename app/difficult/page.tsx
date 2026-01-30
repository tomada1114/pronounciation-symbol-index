'use client'

import Link from 'next/link'
import { useState } from 'react'

import { PhonemeCard } from '@/app/components/PhonemeCard'
import { PhonemeModal } from '@/app/components/PhonemeModal'
import { getPhonemesBySymbols } from '@/app/domain/bookmark'
import type { Phoneme } from '@/app/domain/types'
import { useDifficultPhonemes } from '@/app/hooks/useDifficultPhonemes'

export default function DifficultPage() {
  const [selectedPhoneme, setSelectedPhoneme] = useState<Phoneme | null>(null)
  const { symbols, toggleDifficult, isDifficult } = useDifficultPhonemes()

  const difficultPhonemes = getPhonemesBySymbols(symbols)

  const handleSelect = (phoneme: Phoneme) => {
    setSelectedPhoneme(phoneme)
  }

  const handleClose = () => {
    setSelectedPhoneme(null)
  }

  return (
    <div className="mx-auto max-w-3xl px-4 lg:px-8">
      <header
        className="sticky top-0 z-20 py-4"
        style={{ backgroundColor: 'var(--bg-primary, #0A0A0B)' }}
      >
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex h-8 w-8 items-center justify-center rounded-md transition-colors duration-150"
            style={{
              color: 'var(--text-secondary, #A1A1AA)',
              backgroundColor: 'var(--bg-tertiary, #1c1c1f)',
            }}
            aria-label="トップに戻る"
          >
            <span aria-hidden="true">{'\u2190'}</span>
          </Link>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary, #FAFAFA)' }}>
            苦手な発音
          </h1>
        </div>
      </header>

      <main className="pb-8 pt-4">
        {difficultPhonemes.length === 0 ? (
          <p
            className="py-12 text-center text-sm"
            style={{ color: 'var(--text-muted, #71717A)' }}
          >
            苦手な発音はまだ登録されていません
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {difficultPhonemes.map((phoneme) => (
              <PhonemeCard
                key={phoneme.symbol}
                phoneme={phoneme}
                onSelect={() => handleSelect(phoneme)}
              />
            ))}
          </div>
        )}
      </main>

      {selectedPhoneme !== null && (
        <PhonemeModal
          phoneme={selectedPhoneme}
          onClose={handleClose}
          isBookmarked={isDifficult(selectedPhoneme.symbol)}
          onToggleBookmark={() => toggleDifficult(selectedPhoneme.symbol)}
        />
      )}
    </div>
  )
}
