import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useScrollSnap } from '../useScrollSnap'

type IntersectionCallback = (entries: Partial<IntersectionObserverEntry>[]) => void

let observerCallback: IntersectionCallback
let observedElements: Element[]
let disconnectSpy: ReturnType<typeof vi.fn>

beforeEach(() => {
  observedElements = []
  disconnectSpy = vi.fn()

  const MockIntersectionObserver = vi.fn((callback: IntersectionCallback) => {
    observerCallback = callback
    return {
      observe: vi.fn((el: Element) => {
        observedElements.push(el)
      }),
      unobserve: vi.fn(),
      disconnect: disconnectSpy,
    }
  })

  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
})

afterEach(() => {
  vi.restoreAllMocks()
})

function createContainerWithPanels(panelCount: number): HTMLDivElement {
  const container = document.createElement('div')
  Object.defineProperty(container, 'offsetWidth', { value: 375, configurable: true })
  for (let i = 0; i < panelCount; i++) {
    container.appendChild(document.createElement('section'))
  }
  document.body.appendChild(container)
  return container
}

describe('useScrollSnap', () => {
  it('returns activeIndex 0 initially', () => {
    const { result } = renderHook(() => useScrollSnap(4))

    expect(result.current.activeIndex).toBe(0)
  })

  it('updates activeIndex when a panel intersects', () => {
    const container = createContainerWithPanels(4)
    const { result } = renderHook(() => useScrollSnap(4))

    act(() => {
      ;(result.current.containerRef as React.MutableRefObject<HTMLDivElement | null>).current =
        container
    })

    const { rerender } = renderHook(() => useScrollSnap(4))
    rerender()

    act(() => {
      ;(result.current.containerRef as React.MutableRefObject<HTMLDivElement | null>).current =
        container
    })

    if (observerCallback) {
      act(() => {
        observerCallback([
          { isIntersecting: true, target: container.children[2] } as Partial<IntersectionObserverEntry>,
        ])
      })
      expect(result.current.activeIndex).toBe(2)
    }

    document.body.removeChild(container)
  })

  it('scrollToIndex calls scrollTo with correct left value', () => {
    const container = createContainerWithPanels(4)
    container.scrollTo = vi.fn()

    const { result } = renderHook(() => useScrollSnap(4))

    act(() => {
      ;(result.current.containerRef as React.MutableRefObject<HTMLDivElement | null>).current =
        container
    })

    act(() => {
      result.current.scrollToIndex(2)
    })

    expect(container.scrollTo).toHaveBeenCalledWith({
      left: 750,
      behavior: 'smooth',
    })

    document.body.removeChild(container)
  })

  it('scrollToIndex ignores out-of-range indices', () => {
    const container = createContainerWithPanels(4)
    container.scrollTo = vi.fn()

    const { result } = renderHook(() => useScrollSnap(4))

    act(() => {
      ;(result.current.containerRef as React.MutableRefObject<HTMLDivElement | null>).current =
        container
    })

    act(() => {
      result.current.scrollToIndex(-1)
    })
    act(() => {
      result.current.scrollToIndex(4)
    })

    expect(container.scrollTo).not.toHaveBeenCalled()

    document.body.removeChild(container)
  })

  it('ignores non-intersecting entries', () => {
    const container = createContainerWithPanels(4)
    const { result } = renderHook(() => useScrollSnap(4))

    act(() => {
      ;(result.current.containerRef as React.MutableRefObject<HTMLDivElement | null>).current =
        container
    })

    if (observerCallback) {
      act(() => {
        observerCallback([
          { isIntersecting: false, target: container.children[2] } as Partial<IntersectionObserverEntry>,
        ])
      })
      expect(result.current.activeIndex).toBe(0)
    }

    document.body.removeChild(container)
  })
})
