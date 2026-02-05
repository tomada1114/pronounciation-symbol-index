import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { CategoryIndicator } from '../CategoryIndicator'

describe('CategoryIndicator', () => {
  afterEach(cleanup)

  const defaultProps = {
    activeIndex: 0,
    onSelect: vi.fn(),
  }

  it('renders 4 tabs', () => {
    render(<CategoryIndicator {...defaultProps} />)

    expect(screen.getByText('子音')).toBeInTheDocument()
    expect(screen.getByText('単母音')).toBeInTheDocument()
    expect(screen.getByText('二重母音')).toBeInTheDocument()
    expect(screen.getByText('R母音')).toBeInTheDocument()
  })

  it('has role="tablist" on the container', () => {
    render(<CategoryIndicator {...defaultProps} />)

    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })

  it('has role="tab" on each tab', () => {
    render(<CategoryIndicator {...defaultProps} />)

    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(4)
  })

  it('sets aria-selected="true" on the active tab', () => {
    render(<CategoryIndicator {...defaultProps} activeIndex={2} />)

    expect(screen.getByText('二重母音')).toHaveAttribute('aria-selected', 'true')
  })

  it('sets aria-selected="false" on non-active tabs', () => {
    render(<CategoryIndicator {...defaultProps} activeIndex={0} />)

    expect(screen.getByText('単母音')).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByText('二重母音')).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByText('R母音')).toHaveAttribute('aria-selected', 'false')
  })

  it('calls onSelect with the correct index when clicked', async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()

    render(<CategoryIndicator {...defaultProps} onSelect={onSelect} />)

    await user.click(screen.getByText('二重母音'))
    expect(onSelect).toHaveBeenCalledWith(2)

    await user.click(screen.getByText('R母音'))
    expect(onSelect).toHaveBeenCalledWith(3)
  })

  it('has correct aria-controls linking to panels', () => {
    render(<CategoryIndicator {...defaultProps} />)

    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('aria-controls', 'panel-consonant')
    expect(tabs[1]).toHaveAttribute('aria-controls', 'panel-monophthong')
    expect(tabs[2]).toHaveAttribute('aria-controls', 'panel-diphthong')
    expect(tabs[3]).toHaveAttribute('aria-controls', 'panel-r-colored')
  })

  it('has correct id attributes on tabs', () => {
    render(<CategoryIndicator {...defaultProps} />)

    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('id', 'tab-consonant')
    expect(tabs[1]).toHaveAttribute('id', 'tab-monophthong')
    expect(tabs[2]).toHaveAttribute('id', 'tab-diphthong')
    expect(tabs[3]).toHaveAttribute('id', 'tab-r-colored')
  })
})
