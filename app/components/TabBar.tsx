'use client'

import type { Category } from '@/app/domain/types'

interface TabBarProps {
  readonly activeTab: Category
  readonly onTabChange: (category: Category) => void
}

const TABS: readonly { readonly category: Category; readonly label: string }[] = [
  { category: 'consonant', label: '子音' },
  { category: 'monophthong', label: '単母音' },
  { category: 'diphthong', label: '二重母音' },
  { category: 'r-colored', label: 'R母音' },
]

export function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <nav
      role="tablist"
      className="sticky top-0 z-10 flex overflow-x-auto"
      style={{ backgroundColor: 'var(--bg-primary, #0A0A0B)' }}
    >
      {TABS.map(({ category, label }) => {
        const isActive = activeTab === category
        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(category)}
            className="shrink-0 cursor-pointer border-b-2 px-4 py-3 text-sm font-semibold transition-colors"
            style={{
              color: isActive ? 'var(--text-primary, #FAFAFA)' : 'var(--text-muted, #71717A)',
              borderBottomColor: isActive ? 'var(--accent-primary, #3B82F6)' : 'transparent',
            }}
          >
            {label}
          </button>
        )
      })}
    </nav>
  )
}
