import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { SectionGroup } from '../SectionGroup'

import type { Phoneme } from '@/app/domain/types'

const mockPlosives: Phoneme[] = [
  {
    symbol: 'p',
    displaySymbol: '/p/',
    category: 'consonant',
    subcategory: 'plosive',
    voicing: '無声',
    articulationPoint: '両唇',
    exampleWord: 'pat',
    elsaNotation: '/pæt/',
    japaneseApprox: 'パ行',
    description: 'テスト説明',
  },
  {
    symbol: 'b',
    displaySymbol: '/b/',
    category: 'consonant',
    subcategory: 'plosive',
    voicing: '有声',
    articulationPoint: '両唇',
    exampleWord: 'bat',
    elsaNotation: '/bæt/',
    japaneseApprox: 'バ行',
    description: 'テスト説明',
  },
  {
    symbol: 't',
    displaySymbol: '/t/',
    category: 'consonant',
    subcategory: 'plosive',
    voicing: '無声',
    articulationPoint: '歯茎',
    exampleWord: 'top',
    elsaNotation: '/tɑp/',
    japaneseApprox: 'タ行',
    description: 'テスト説明',
  },
]

describe('SectionGroup', () => {
  afterEach(cleanup)

  const defaultProps = {
    subcategory: 'plosive' as const,
    phonemes: mockPlosives,
    expandedSymbols: new Set<string>(),
    onToggle: vi.fn(),
  }

  it('displays the section heading in "破裂音（Plosives）" format', () => {
    render(<SectionGroup {...defaultProps} />)

    expect(screen.getByText('破裂音（Plosives）')).toBeInTheDocument()
  })

  it('uses h2 element for the heading', () => {
    render(<SectionGroup {...defaultProps} />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('破裂音（Plosives）')
  })

  it('renders cards for each phoneme', () => {
    render(<SectionGroup {...defaultProps} />)

    expect(screen.getByText('/p/')).toBeInTheDocument()
    expect(screen.getByText('/b/')).toBeInTheDocument()
    expect(screen.getByText('/t/')).toBeInTheDocument()
  })

  it('renders expanded cards for phonemes in expandedSymbols', () => {
    render(<SectionGroup {...defaultProps} expandedSymbols={new Set(['p'])} />)

    const buttons = screen.getAllByRole('button')
    const pButton = buttons.find((btn) => btn.getAttribute('aria-expanded') === 'true')
    expect(pButton).toBeDefined()

    expect(screen.getByText('両唇')).toBeInTheDocument()
  })
})
