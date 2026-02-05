import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
    lipPosition: '上下の唇をしっかり閉じて密閉する',
    tonguePosition: '特定の位置を取らず後続の母音に備えてリラックス',
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
    lipPosition: '上下の唇をしっかり閉じて密閉する',
    tonguePosition: '特定の位置を取らず後続の母音に備えてリラックス',
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
    lipPosition: '自然に開いた状態で後続の母音に合わせる',
    tonguePosition: '舌先を上の歯茎にしっかり当てる',
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
    onSelect: vi.fn(),
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

  it('calls onSelect with the phoneme when a card is clicked', async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()

    render(<SectionGroup {...defaultProps} onSelect={onSelect} />)

    await user.click(screen.getByText('/p/'))
    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(onSelect).toHaveBeenCalledWith(mockPlosives[0])
  })
})
