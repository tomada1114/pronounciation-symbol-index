'use client'

interface ArticulationTagProps {
  readonly label: string
  readonly variant: 'lip' | 'tongue' | 'voicing'
}

const VARIANT_COLORS = {
  lip: {
    bg: 'rgba(59, 130, 246, 0.15)',
    text: 'var(--accent-primary, #3B82F6)',
  },
  tongue: {
    bg: 'rgba(34, 197, 94, 0.15)',
    text: 'var(--success, #22C55E)',
  },
  voicing: {
    bg: 'rgba(245, 158, 11, 0.15)',
    text: 'var(--warning, #F59E0B)',
  },
} as const

export function ArticulationTag({ label, variant }: ArticulationTagProps) {
  const colors = VARIANT_COLORS[variant]

  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
      }}
    >
      {label}
    </span>
  )
}
