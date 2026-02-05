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
  lipPosition: '上下の唇をしっかり閉じて密閉する',
  tonguePosition: '特定の位置を取らず後続の母音に備えてリラックス',
  exampleWord: 'pat',
  elsaNotation: '/pæt/',
  japaneseApprox: 'パ行',
  description: 'テスト用の発音説明です。',
}

describe('PhonemeCard', () => {
  afterEach(cleanup)

  const defaultProps = {
    phoneme: mockConsonant,
    onSelect: vi.fn(),
  }

  it('displays the displaySymbol', () => {
    render(<PhonemeCard {...defaultProps} />)

    expect(screen.getByText('/p/')).toBeInTheDocument()
  })

  it('displays the subcategory label', () => {
    render(<PhonemeCard {...defaultProps} />)

    expect(screen.getByText('破裂音')).toBeInTheDocument()
  })

  it('is implemented as a button element', () => {
    render(<PhonemeCard {...defaultProps} />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('has aria-haspopup="dialog"', () => {
    render(<PhonemeCard {...defaultProps} />)

    expect(screen.getByRole('button')).toHaveAttribute('aria-haspopup', 'dialog')
  })

  it('calls onSelect when clicked', async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()

    render(<PhonemeCard {...defaultProps} onSelect={onSelect} />)

    await user.click(screen.getByRole('button'))
    expect(onSelect).toHaveBeenCalledTimes(1)
  })
})
