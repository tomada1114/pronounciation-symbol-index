import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { BookmarkButton } from '../BookmarkButton'

describe('BookmarkButton', () => {
  afterEach(cleanup)

  it('renders filled star when bookmarked', () => {
    render(<BookmarkButton isBookmarked={true} onToggle={vi.fn()} />)

    expect(screen.getByText('\u2605')).toBeInTheDocument()
  })

  it('renders outline star when not bookmarked', () => {
    render(<BookmarkButton isBookmarked={false} onToggle={vi.fn()} />)

    expect(screen.getByText('\u2606')).toBeInTheDocument()
  })

  it('has aria-pressed="true" when bookmarked', () => {
    render(<BookmarkButton isBookmarked={true} onToggle={vi.fn()} />)

    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
  })

  it('has aria-pressed="false" when not bookmarked', () => {
    render(<BookmarkButton isBookmarked={false} onToggle={vi.fn()} />)

    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false')
  })

  it('has aria-label "苦手を解除" when bookmarked', () => {
    render(<BookmarkButton isBookmarked={true} onToggle={vi.fn()} />)

    expect(screen.getByRole('button', { name: '苦手を解除' })).toBeInTheDocument()
  })

  it('has aria-label "苦手に追加" when not bookmarked', () => {
    render(<BookmarkButton isBookmarked={false} onToggle={vi.fn()} />)

    expect(screen.getByRole('button', { name: '苦手に追加' })).toBeInTheDocument()
  })

  it('calls onToggle when clicked', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<BookmarkButton isBookmarked={false} onToggle={onToggle} />)

    await user.click(screen.getByRole('button'))

    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
