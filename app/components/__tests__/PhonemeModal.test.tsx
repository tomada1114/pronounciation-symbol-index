import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { PhonemeModal } from '../PhonemeModal'

import type { Phoneme } from '@/app/domain/types'

const mockPhoneme: Phoneme = {
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

describe('PhonemeModal', () => {
  afterEach(cleanup)

  const defaultProps = {
    phoneme: mockPhoneme,
    onClose: vi.fn(),
    isBookmarked: false,
    onToggleBookmark: vi.fn(),
  }

  it('renders the phoneme displaySymbol', () => {
    render(<PhonemeModal {...defaultProps} />)

    expect(screen.getByText('/p/')).toBeInTheDocument()
  })

  it('renders the subcategory label in bilingual format', () => {
    render(<PhonemeModal {...defaultProps} />)

    expect(screen.getByText('破裂音（Plosives）')).toBeInTheDocument()
  })

  it('renders the phoneme detail content', () => {
    render(<PhonemeModal {...defaultProps} />)

    expect(screen.getByText('両唇')).toBeInTheDocument()
    expect(screen.getByText('pat /pæt/')).toBeInTheDocument()
    expect(screen.getByText('パ行')).toBeInTheDocument()
    expect(screen.getByText('テスト用の発音説明です。')).toBeInTheDocument()
  })

  it('has role="dialog" and aria-modal="true"', () => {
    render(<PhonemeModal {...defaultProps} />)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
  })

  it('has an accessible label with the phoneme symbol', () => {
    render(<PhonemeModal {...defaultProps} />)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-label', '/p/ の詳細')
  })

  it('has a close button with aria-label', () => {
    render(<PhonemeModal {...defaultProps} />)

    expect(screen.getByRole('button', { name: '閉じる' })).toBeInTheDocument()
  })

  it('calls onClose after close button click and animation end', () => {
    const onClose = vi.fn()
    render(<PhonemeModal {...defaultProps} onClose={onClose} />)

    fireEvent.click(screen.getByRole('button', { name: '閉じる' }))
    expect(onClose).not.toHaveBeenCalled()

    fireEvent.animationEnd(screen.getByRole('dialog'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose after backdrop click and animation end', () => {
    const onClose = vi.fn()
    render(<PhonemeModal {...defaultProps} onClose={onClose} />)

    fireEvent.click(screen.getByRole('dialog'))
    expect(onClose).not.toHaveBeenCalled()

    fireEvent.animationEnd(screen.getByRole('dialog'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose after Escape key press and animation end', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<PhonemeModal {...defaultProps} onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).not.toHaveBeenCalled()

    fireEvent.animationEnd(screen.getByRole('dialog'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('sets body overflow to hidden on mount', () => {
    render(<PhonemeModal {...defaultProps} />)

    expect(document.body.style.overflow).toBe('hidden')
  })

  it('restores body overflow on unmount', () => {
    const { unmount } = render(<PhonemeModal {...defaultProps} />)

    unmount()
    expect(document.body.style.overflow).toBe('')
  })

  it('focuses the close button on mount', () => {
    render(<PhonemeModal {...defaultProps} />)

    expect(document.activeElement).toBe(screen.getByRole('button', { name: '閉じる' }))
  })

  it('renders bookmark button with aria-pressed="false" when not bookmarked', () => {
    render(<PhonemeModal {...defaultProps} isBookmarked={false} />)

    const bookmarkBtn = screen.getByRole('button', { name: '苦手に追加' })
    expect(bookmarkBtn).toHaveAttribute('aria-pressed', 'false')
  })

  it('renders bookmark button with aria-pressed="true" when bookmarked', () => {
    render(<PhonemeModal {...defaultProps} isBookmarked={true} />)

    const bookmarkBtn = screen.getByRole('button', { name: '苦手を解除' })
    expect(bookmarkBtn).toHaveAttribute('aria-pressed', 'true')
  })

  it('calls onToggleBookmark when bookmark button is clicked', async () => {
    const user = userEvent.setup()
    const onToggleBookmark = vi.fn()
    render(<PhonemeModal {...defaultProps} onToggleBookmark={onToggleBookmark} />)

    await user.click(screen.getByRole('button', { name: '苦手に追加' }))

    expect(onToggleBookmark).toHaveBeenCalledTimes(1)
  })
})
