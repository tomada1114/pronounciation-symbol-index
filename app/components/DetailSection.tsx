'use client'

interface DetailSectionProps {
  readonly title: string
  readonly children: React.ReactNode
}

export function DetailSection({ title, children }: DetailSectionProps) {
  return (
    <div
      className="rounded-lg border p-3"
      style={{
        backgroundColor: 'var(--bg-tertiary, #1C1C1F)',
        borderColor: 'var(--border-default, #242428)',
      }}
    >
      <h3
        className="mb-2 text-xs font-semibold uppercase tracking-wide"
        style={{ color: 'var(--text-muted, #71717A)' }}
      >
        {title}
      </h3>
      {children}
    </div>
  )
}
