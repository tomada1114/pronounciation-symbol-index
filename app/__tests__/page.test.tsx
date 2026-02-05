import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import Page from '@/app/page'

const STORAGE_KEY = 'difficult-phonemes'

beforeEach(() => {
  localStorage.clear()
})

afterEach(() => {
  cleanup()
  localStorage.clear()
})

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

  it('shows consonant tab as active by default', () => {
    render(<Page />)

    const consonantTab = screen.getByRole('tab', { name: '子音' })
    expect(consonantTab).toHaveAttribute('aria-selected', 'true')
  })

  it('renders all 4 tabpanels', () => {
    render(<Page />)

    const panels = screen.getAllByRole('tabpanel')
    expect(panels).toHaveLength(4)
    expect(panels[0]).toHaveAttribute('id', 'panel-consonant')
    expect(panels[1]).toHaveAttribute('id', 'panel-monophthong')
    expect(panels[2]).toHaveAttribute('id', 'panel-diphthong')
    expect(panels[3]).toHaveAttribute('id', 'panel-r-colored')
  })

  it('renders correct number of phoneme cards per panel', () => {
    render(<Page />)

    const panels = screen.getAllByRole('tabpanel')
    const consonantCards = within(panels[0]).getAllByRole('button', { name: /^\// })
    const monophthongCards = within(panels[1]).getAllByRole('button', { name: /^\// })
    const diphthongCards = within(panels[2]).getAllByRole('button', { name: /^\// })
    const rColoredCards = within(panels[3]).getAllByRole('button', { name: /^\// })

    expect(consonantCards).toHaveLength(24)
    expect(monophthongCards).toHaveLength(11)
    expect(diphthongCards).toHaveLength(5)
    expect(rColoredCards).toHaveLength(7)
  })

  it('displays all 47 phoneme cards across all panels', () => {
    render(<Page />)

    const allCards = screen.getAllByRole('button', { name: /^\// })
    expect(allCards).toHaveLength(47)
  })

  it('displays Plosives section in consonant panel', () => {
    render(<Page />)

    expect(screen.getByRole('heading', { name: /破裂音（Plosives）/ })).toBeInTheDocument()
  })

  it('displays Front Vowels section in monophthong panel', () => {
    render(<Page />)

    expect(screen.getByRole('heading', { name: /前舌母音（Front Vowels）/ })).toBeInTheDocument()
  })

  it('links tabpanels to tabs via aria-labelledby', () => {
    render(<Page />)

    const panels = screen.getAllByRole('tabpanel')
    expect(panels[0]).toHaveAttribute('aria-labelledby', 'tab-consonant')
    expect(panels[1]).toHaveAttribute('aria-labelledby', 'tab-monophthong')
    expect(panels[2]).toHaveAttribute('aria-labelledby', 'tab-diphthong')
    expect(panels[3]).toHaveAttribute('aria-labelledby', 'tab-r-colored')
  })

  it('opens a modal when a card is clicked', async () => {
    const user = userEvent.setup()
    render(<Page />)

    const firstCard = screen.getAllByRole('button', { name: /^\// })[0]
    await user.click(firstCard)

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('shows phoneme details inside the modal', async () => {
    const user = userEvent.setup()
    render(<Page />)

    const firstCard = screen.getAllByRole('button', { name: /^\// })[0]
    await user.click(firstCard)

    expect(screen.getByText(/^pat \/pæt\/$/)).toBeInTheDocument()
  })

  it('closes the modal when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Page />)

    const firstCard = screen.getAllByRole('button', { name: /^\// })[0]
    await user.click(firstCard)
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: '閉じる' }))
    fireEvent.animationEnd(screen.getByRole('dialog'))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the modal when Escape is pressed', async () => {
    const user = userEvent.setup()
    render(<Page />)

    const firstCard = screen.getAllByRole('button', { name: /^\// })[0]
    await user.click(firstCard)
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    fireEvent.animationEnd(screen.getByRole('dialog'))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})

describe('Page bookmark integration', () => {
  it('displays a link to /difficult page', () => {
    render(<Page />)

    const link = screen.getByRole('link', { name: /苦手一覧/ })
    expect(link).toHaveAttribute('href', '/difficult')
  })

  it('does not show count badge when no bookmarks exist', () => {
    render(<Page />)

    const link = screen.getByRole('link', { name: /苦手一覧/ })
    expect(link.textContent).not.toMatch(/\d/)
  })

  it('shows count badge when bookmarks exist', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(['p', 'b']))
    render(<Page />)

    const link = screen.getByRole('link', { name: /苦手一覧/ })
    expect(link.textContent).toContain('2')
  })

  it('shows bookmark button inside modal', async () => {
    const user = userEvent.setup()
    render(<Page />)

    const firstCard = screen.getAllByRole('button', { name: /^\// })[0]
    await user.click(firstCard)

    expect(screen.getByRole('button', { name: '苦手に追加' })).toBeInTheDocument()
  })

  it('toggles bookmark from modal and updates badge count', async () => {
    const user = userEvent.setup()
    render(<Page />)

    const firstCard = screen.getAllByRole('button', { name: /^\// })[0]
    await user.click(firstCard)

    await user.click(screen.getByRole('button', { name: '苦手に追加' }))

    expect(screen.getByRole('button', { name: '苦手を解除' })).toBeInTheDocument()

    const link = screen.getByRole('link', { name: /苦手一覧/ })
    expect(link.textContent).toContain('1')
  })
})
