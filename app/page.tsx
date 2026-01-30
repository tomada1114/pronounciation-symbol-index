'use client'

import { useState } from 'react'

import { PhonemeModal } from '@/app/components/PhonemeModal'
import { SectionGroup } from '@/app/components/SectionGroup'
import { TabBar } from '@/app/components/TabBar'
import { getPhonemesByCategory, groupBySubcategory } from '@/app/domain/helpers'
import type { Category, Phoneme, Subcategory } from '@/app/domain/types'

export default function Home() {
  const [activeTab, setActiveTab] = useState<Category>('consonant')
  const [selectedPhoneme, setSelectedPhoneme] = useState<Phoneme | null>(null)

  const filteredPhonemes = getPhonemesByCategory(activeTab)
  const grouped = groupBySubcategory(filteredPhonemes)

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
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary, #FAFAFA)' }}>
          発音記号インデックス
        </h1>
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
        <PhonemeModal phoneme={selectedPhoneme} onClose={handleClose} />
      )}
    </div>
  )
}
