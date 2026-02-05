'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface UseScrollSnapReturn {
  readonly containerRef: React.RefObject<HTMLDivElement | null>
  readonly activeIndex: number
  readonly scrollToIndex: (index: number) => void
}

export function useScrollSnap(panelCount: number): UseScrollSnapReturn {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = useCallback(
    (index: number) => {
      const container = containerRef.current
      if (container === null || index < 0 || index >= panelCount) {
        return
      }
      container.scrollTo({
        left: index * container.offsetWidth,
        behavior: 'smooth',
      })
    },
    [panelCount],
  )

  useEffect(() => {
    const container = containerRef.current
    if (container === null) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const children = Array.from(container.children)
            const index = children.indexOf(entry.target)
            if (index !== -1) {
              setActiveIndex(index)
            }
          }
        }
      },
      { root: container, threshold: 0.5 },
    )

    const children = Array.from(container.children)
    for (const child of children) {
      observer.observe(child)
    }

    return () => {
      observer.disconnect()
    }
  }, [panelCount])

  return { containerRef, activeIndex, scrollToIndex }
}
