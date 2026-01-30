'use client'

interface BookmarkButtonProps {
  readonly isBookmarked: boolean
  readonly onToggle: () => void
}

export function BookmarkButton({ isBookmarked, onToggle }: BookmarkButtonProps) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={isBookmarked}
      aria-label={isBookmarked ? '苦手を解除' : '苦手に追加'}
      className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-md transition-colors duration-150"
      style={{
        color: isBookmarked
          ? 'var(--bookmark-active, #f59e0b)'
          : 'var(--text-muted, #71717A)',
        backgroundColor: 'transparent',
      }}
    >
      <span className="text-lg" aria-hidden="true">
        {isBookmarked ? '\u2605' : '\u2606'}
      </span>
    </button>
  )
}
