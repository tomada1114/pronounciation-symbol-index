'use client'

import { ORDERED_CATEGORIES } from '@/app/domain/helpers'

interface CategoryIndicatorProps {
  readonly activeIndex: number
  readonly onSelect: (index: number) => void
}

export function CategoryIndicator({ activeIndex, onSelect }: CategoryIndicatorProps) {
  return (
    <nav
      role="tablist"
      className="sticky top-0 z-10 flex overflow-x-auto"
      style={{ backgroundColor: 'var(--bg-primary, #0A0A0B)' }}
    >
      {ORDERED_CATEGORIES.map(({ category, label }, index) => {
        const isActive = activeIndex === index
        return (
          <button
            key={category}
            role="tab"
            id={`tab-${category}`}
            aria-selected={isActive}
            aria-controls={`panel-${category}`}
            onClick={() => onSelect(index)}
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
