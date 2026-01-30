'use client'

import Link from 'next/link'
import { useState } from 'react'

import { PhonemeModal } from '@/app/components/PhonemeModal'
import { SectionGroup } from '@/app/components/SectionGroup'
import { TabBar } from '@/app/components/TabBar'
import { getPhonemesByCategory, groupBySubcategory } from '@/app/domain/helpers'
import type { Category, Phoneme, Subcategory } from '@/app/domain/types'
import { useDifficultPhonemes } from '@/app/hooks/useDifficultPhonemes'

export default function Home() {
  const [activeTab, setActiveTab] = useState<Category>('consonant')
  const [selectedPhoneme, setSelectedPhoneme] = useState<Phoneme | null>(null)
  const { symbols: difficultSymbols, toggleDifficult, isDifficult } = useDifficultPhonemes()

  const filteredPhonemes = getPhonemesByCategory(activeTab)
  const grouped = groupBySubcategory(filteredPhonemes)

  const handleSelect = (phoneme: Phoneme) => {
    setSelectedPhoneme(phoneme)
  }

  const handleClose = () => {
    setSelectedPhoneme(null)
  }

  const difficultCount = difficultSymbols.size

  return (
    <div className="mx-auto max-w-3xl px-4 lg:px-8">
      <header
        className="sticky top-0 z-20 py-4"
        style={{ backgroundColor: 'var(--bg-primary, #0A0A0B)' }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary, #FAFAFA)' }}>
            発音記号インデックス
          </h1>
          <Link
            href="/difficult"
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors duration-150"
            style={{
              color: 'var(--bookmark-active, #f59e0b)',
              backgroundColor: 'var(--bg-tertiary, #1c1c1f)',
            }}
          >
            <span aria-hidden="true">{'\u2605'}</span>
            <span>苦手一覧</span>
            {difficultCount > 0 && (
              <span
                className="ml-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-bold"
                style={{
                  backgroundColor: 'var(--bookmark-active, #f59e0b)',
                  color: 'var(--bg-primary, #0A0A0B)',
                }}
              >
                {difficultCount}
              </span>
            )}
          </Link>
        </div>
      </header>

      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="pb-8 pt-4">
        {Object.entries(grouped).map(([subcategory, phonemes]) => (
          <SectionGroup
            key={subcategory}
            subcategory={subcategory as Subcategory}
            phonemes={phonemes}
            onSelect={handleSelect}
          />
        ))}
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
