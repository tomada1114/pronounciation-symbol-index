'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { getSubcategoryLabel } from '@/app/domain/helpers'
import type { Phoneme } from '@/app/domain/types'

import { PhonemeDetail } from './PhonemeDetail'

interface PhonemeModalProps {
  readonly phoneme: Phoneme
  readonly onClose: () => void
}

export function PhonemeModal({ phoneme, onClose }: PhonemeModalProps) {
  const [isClosing, setIsClosing] = useState(false)
  const previousFocusRef = useRef<Element | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const subcategoryLabel = getSubcategoryLabel(phoneme.subcategory)

  useEffect(() => {
    previousFocusRef.current = document.activeElement
    closeButtonRef.current?.focus()

    const savedOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = savedOverflow
      if (previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus()
      }
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isClosing) {
        setIsClosing(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isClosing])

  const handleBackdropClick = () => {
    if (!isClosing) {
      setIsClosing(true)
    }
  }

  const handleCloseClick = () => {
    if (!isClosing) {
      setIsClosing(true)
    }
  }

  const handleAnimationEnd = () => {
    if (isClosing) {
      onClose()
    }
  }

  const backdropAnimation = isClosing
    ? 'modal-backdrop-out var(--duration-modal, 200ms) var(--ease-out, ease-out) forwards'
    : 'modal-backdrop-in var(--duration-modal, 200ms) var(--ease-out, ease-out) forwards'

  const panelAnimation = isClosing
    ? 'modal-panel-out var(--duration-modal, 200ms) var(--ease-out, ease-out) forwards'
    : 'modal-panel-in var(--duration-modal, 200ms) var(--ease-out, ease-out) forwards'

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${phoneme.displaySymbol} の詳細`}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        animation: backdropAnimation,
        backgroundColor: 'var(--overlay-bg, rgba(0, 0, 0, 0.6))',
        backdropFilter: 'blur(4px)',
      }}
      onClick={handleBackdropClick}
      onAnimationEnd={handleAnimationEnd}
    >
      <div
        className="relative w-[calc(100%-32px)] max-w-[480px] overflow-y-auto rounded-[10px] border"
        style={{
          maxHeight: 'calc(100dvh - 64px)',
          backgroundColor: 'var(--bg-secondary, #141416)',
          borderColor: 'var(--border-active, #1E3A5F)',
          animation: panelAnimation,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between p-4">
          <div>
            <span
              className="text-3xl font-bold"
              style={{ color: 'var(--accent-primary, #3B82F6)' }}
            >
              {phoneme.displaySymbol}
            </span>
            <p className="mt-1 text-sm" style={{ color: 'var(--text-muted, #71717A)' }}>
              {subcategoryLabel.ja}（{subcategoryLabel.en}）
            </p>
          </div>
          <button
            ref={closeButtonRef}
            onClick={handleCloseClick}
            aria-label="閉じる"
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-md transition-colors duration-150"
            style={{
              color: 'var(--text-muted, #71717A)',
              backgroundColor: 'transparent',
            }}
          >
            <span className="text-lg" aria-hidden="true">
              &#x2715;
            </span>
          </button>
        </div>

        <div className="px-4 pb-4">
          <PhonemeDetail phoneme={phoneme} />
        </div>
      </div>
    </div>,
    document.body,
  )
}
