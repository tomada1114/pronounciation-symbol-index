import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { TabBar } from '../TabBar'

import type { Category } from '@/app/domain/types'

describe('TabBar', () => {
  afterEach(cleanup)

  const defaultProps = {
    activeTab: 'consonant' as Category,
    onTabChange: vi.fn(),
  }

  it('renders 4 tabs', () => {
    render(<TabBar {...defaultProps} />)

    expect(screen.getByText('子音')).toBeInTheDocument()
    expect(screen.getByText('単母音')).toBeInTheDocument()
    expect(screen.getByText('二重母音')).toBeInTheDocument()
    expect(screen.getByText('R母音')).toBeInTheDocument()
  })

  it('has role="tablist" on the container', () => {
    render(<TabBar {...defaultProps} />)

    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })

  it('has role="tab" on each tab', () => {
    render(<TabBar {...defaultProps} />)

    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(4)
  })

  it('sets aria-selected="true" on the active tab', () => {
    render(<TabBar {...defaultProps} activeTab="diphthong" />)

    expect(screen.getByText('二重母音')).toHaveAttribute('aria-selected', 'true')
  })

  it('sets aria-selected="false" on non-active tabs', () => {
    render(<TabBar {...defaultProps} activeTab="consonant" />)

    expect(screen.getByText('単母音')).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByText('二重母音')).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByText('R母音')).toHaveAttribute('aria-selected', 'false')
  })

  it('calls onTabChange with the correct Category when clicked', async () => {
    const onTabChange = vi.fn()
    const user = userEvent.setup()

    render(<TabBar {...defaultProps} onTabChange={onTabChange} />)

    await user.click(screen.getByText('二重母音'))
    expect(onTabChange).toHaveBeenCalledWith('diphthong')

    await user.click(screen.getByText('R母音'))
    expect(onTabChange).toHaveBeenCalledWith('r-colored')
  })
})
