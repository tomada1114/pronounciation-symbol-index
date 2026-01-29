import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { PhonemeCard } from '../PhonemeCard'

import type { Phoneme } from '@/app/domain/types'

const mockConsonant: Phoneme = {
  symbol: 'p',
  displaySymbol: '/p/',
  category: 'consonant',
  subcategory: 'plosive',
  voicing: '無声',
  articulationPoint: '両唇',
  exampleWord: 'pat',
  elsaNotation: '/pæt/',
  japaneseApprox: 'パ行',
  description: 'テスト用の発音説明です。',
}

const mockVowel: Phoneme = {
  symbol: 'i',
  displaySymbol: '/i/',
  category: 'monophthong',
  subcategory: 'front-vowel',
  openness: '狭（閉）',
  exampleWord: 'feet',
  elsaNotation: '/fit/',
  japaneseApprox: '「イー」（長め）',
  description: 'テスト用の母音説明です。',
}

describe('PhonemeCard', () => {
  afterEach(cleanup)

  const defaultProps = {
    phoneme: mockConsonant,
    isExpanded: false,
    onToggle: vi.fn(),
  }

  it('displays the displaySymbol in closed state', () => {
    render(<PhonemeCard {...defaultProps} />)

    expect(screen.getByText('/p/')).toBeInTheDocument()
  })

  it('displays the subcategory label in closed state', () => {
    render(<PhonemeCard {...defaultProps} />)

    expect(screen.getByText('破裂音')).toBeInTheDocument()
  })

  it('is implemented as a button element', () => {
    render(<PhonemeCard {...defaultProps} />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('has aria-expanded="false" when isExpanded is false', () => {
    render(<PhonemeCard {...defaultProps} isExpanded={false} />)

    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false')
  })

  it('has aria-expanded="true" when isExpanded is true', () => {
    render(<PhonemeCard {...defaultProps} isExpanded={true} />)

    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true')
  })

  it('calls onToggle when clicked', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()

    render(<PhonemeCard {...defaultProps} onToggle={onToggle} />)

    await user.click(screen.getByRole('button'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('shows PhonemeDetail content when expanded', () => {
    render(<PhonemeCard {...defaultProps} isExpanded={true} />)

    expect(screen.getByText('両唇')).toBeInTheDocument()
    expect(screen.getByText('pat /pæt/')).toBeInTheDocument()
    expect(screen.getByText('パ行')).toBeInTheDocument()
    expect(screen.getByText('テスト用の発音説明です。')).toBeInTheDocument()
  })

  it('shows vowel-specific details when expanded with vowel phoneme', () => {
    render(<PhonemeCard phoneme={mockVowel} isExpanded={true} onToggle={vi.fn()} />)

    expect(screen.getByText('狭（閉）')).toBeInTheDocument()
    expect(screen.getByText('feet /fit/')).toBeInTheDocument()
  })
})
