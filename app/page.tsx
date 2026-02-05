'use client'

import Link from 'next/link'
import { useState } from 'react'

import { CategoryIndicator } from '@/app/components/CategoryIndicator'
import { PhonemeModal } from '@/app/components/PhonemeModal'
import { SectionGroup } from '@/app/components/SectionGroup'
import {
  ORDERED_CATEGORIES,
  getPhonemesByCategory,
  groupBySubcategory,
} from '@/app/domain/helpers'
import type { Phoneme, Subcategory } from '@/app/domain/types'
import { useDifficultPhonemes } from '@/app/hooks/useDifficultPhonemes'
import { useScrollSnap } from '@/app/hooks/useScrollSnap'

const CATEGORY_PANELS = ORDERED_CATEGORIES.map(({ category }) => ({
  category,
  groups: groupBySubcategory(getPhonemesByCategory(category)),
}))

export default function Home() {
  const [selectedPhoneme, setSelectedPhoneme] = useState<Phoneme | null>(null)
  const { symbols: difficultSymbols, toggleDifficult, isDifficult } = useDifficultPhonemes()
  const { containerRef, activeIndex, scrollToIndex } = useScrollSnap(ORDERED_CATEGORIES.length)

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

      <CategoryIndicator activeIndex={activeIndex} onSelect={scrollToIndex} />

      <div ref={containerRef} className="swipe-container">
        {CATEGORY_PANELS.map(({ category, groups }) => (
          <section
            key={category}
            role="tabpanel"
            id={`panel-${category}`}
            aria-labelledby={`tab-${category}`}
            className="swipe-panel"
          >
            {Object.entries(groups).map(([subcategory, phonemes]) => (
              <SectionGroup
                key={subcategory}
                subcategory={subcategory as Subcategory}
                phonemes={phonemes}
                onSelect={handleSelect}
              />
            ))}
          </section>
        ))}
      </div>

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
