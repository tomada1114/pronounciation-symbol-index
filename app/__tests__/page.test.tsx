import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'

import Page from '@/app/page'

afterEach(cleanup)

describe('Page integration', () => {
  it('displays the header "発音記号インデックス"', () => {
    render(<Page />)

    expect(screen.getByRole('heading', { name: '発音記号インデックス' })).toBeInTheDocument()
  })

  it('displays 4 tabs', () => {
    render(<Page />)

    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(4)
    expect(tabs[0]).toHaveTextContent('子音')
    expect(tabs[1]).toHaveTextContent('単母音')
    expect(tabs[2]).toHaveTextContent('二重母音')
    expect(tabs[3]).toHaveTextContent('R母音')
  })

  it('shows consonant tab content by default', () => {
    render(<Page />)

    const consonantTab = screen.getByRole('tab', { name: '子音' })
    expect(consonantTab).toHaveAttribute('aria-selected', 'true')
  })

  it('displays Plosives section in default consonant tab', () => {
    render(<Page />)

    expect(screen.getByRole('heading', { name: /破裂音（Plosives）/ })).toBeInTheDocument()
  })

  it('displays 24 phoneme cards in consonant tab', () => {
    render(<Page />)

    const buttons = screen.getAllByRole('button', { expanded: false })
    expect(buttons).toHaveLength(24)
  })

  it('shows Front Vowels section when clicking monophthong tab', async () => {
    const user = userEvent.setup()
    render(<Page />)

    await user.click(screen.getByRole('tab', { name: '単母音' }))

    expect(screen.getByRole('heading', { name: /前舌母音（Front Vowels）/ })).toBeInTheDocument()
  })

  it('expands a card when clicked (aria-expanded becomes true)', async () => {
    const user = userEvent.setup()
    render(<Page />)

    const firstCard = screen.getAllByRole('button', { expanded: false })[0]
    await user.click(firstCard)

    expect(firstCard).toHaveAttribute('aria-expanded', 'true')
  })

  it('shows example word and ELSA notation when card is expanded', async () => {
    const user = userEvent.setup()
    render(<Page />)

    const firstCard = screen.getAllByRole('button', { expanded: false })[0]
    await user.click(firstCard)

    expect(screen.getByText(/pat/)).toBeInTheDocument()
    expect(screen.getByText(/\/pæt\//)).toBeInTheDocument()
  })

  it('collapses an expanded card when clicked again', async () => {
    const user = userEvent.setup()
    render(<Page />)

    const firstCard = screen.getAllByRole('button', { expanded: false })[0]
    await user.click(firstCard)
    expect(firstCard).toHaveAttribute('aria-expanded', 'true')

    await user.click(firstCard)
    expect(firstCard).toHaveAttribute('aria-expanded', 'false')
  })
})
