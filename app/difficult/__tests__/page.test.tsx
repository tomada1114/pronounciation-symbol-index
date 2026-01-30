import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import DifficultPage from '@/app/difficult/page'

const STORAGE_KEY = 'difficult-phonemes'

beforeEach(() => {
  localStorage.clear()
})

afterEach(() => {
  cleanup()
  localStorage.clear()
})

describe('DifficultPage', () => {
  it('displays the header "苦手な発音"', () => {
    render(<DifficultPage />)

    expect(screen.getByRole('heading', { name: '苦手な発音' })).toBeInTheDocument()
  })

  it('displays a back link to home', () => {
    render(<DifficultPage />)

    const link = screen.getByRole('link', { name: 'トップに戻る' })
    expect(link).toHaveAttribute('href', '/')
  })

  it('shows empty state message when no bookmarks', () => {
    render(<DifficultPage />)

    expect(screen.getByText('苦手な発音はまだ登録されていません')).toBeInTheDocument()
  })

  it('does not show empty state when bookmarks exist', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(['p']))
    render(<DifficultPage />)

    expect(screen.queryByText('苦手な発音はまだ登録されていません')).not.toBeInTheDocument()
  })

  it('renders bookmarked phoneme cards', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(['p', 'b']))
    render(<DifficultPage />)

    const cards = screen.getAllByRole('button', { name: /^\// })
    expect(cards).toHaveLength(2)
    expect(screen.getByText('/p/')).toBeInTheDocument()
    expect(screen.getByText('/b/')).toBeInTheDocument()
  })

  it('opens a modal when a card is clicked', async () => {
    const user = userEvent.setup()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(['p']))
    render(<DifficultPage />)

    await user.click(screen.getByRole('button', { name: /^\/p\// }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('shows bookmark button as active in modal', async () => {
    const user = userEvent.setup()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(['p']))
    render(<DifficultPage />)

    await user.click(screen.getByRole('button', { name: /^\/p\// }))

    expect(screen.getByRole('button', { name: '苦手を解除' })).toBeInTheDocument()
  })

  it('removes card when bookmark is toggled off', async () => {
    const user = userEvent.setup()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(['p']))
    render(<DifficultPage />)

    await user.click(screen.getByRole('button', { name: /^\/p\// }))
    await user.click(screen.getByRole('button', { name: '苦手を解除' }))

    fireEvent.click(screen.getByRole('button', { name: '閉じる' }))
    fireEvent.animationEnd(screen.getByRole('dialog'))

    expect(screen.getByText('苦手な発音はまだ登録されていません')).toBeInTheDocument()
  })
})
