'use client'

import type { Phoneme } from '@/app/domain/types'

interface PhonemeDetailProps {
  readonly phoneme: Phoneme
}

function DetailRow({ label, value }: { readonly label: string; readonly value: string }) {
  return (
    <div className="flex gap-2">
      <span
        className="shrink-0 text-sm font-semibold"
        style={{ color: 'var(--text-muted, #71717A)' }}
      >
        {label}:
      </span>
      <span className="text-sm" style={{ color: 'var(--text-secondary, #A1A1AA)' }}>
        {value}
      </span>
    </div>
  )
}

export function PhonemeDetail({ phoneme }: PhonemeDetailProps) {
  return (
    <div className="mt-3 flex flex-col gap-2">
      {phoneme.articulationPoint && <DetailRow label="調音点" value={phoneme.articulationPoint} />}
      {phoneme.voicing && <DetailRow label="有声/無声" value={phoneme.voicing} />}
      {phoneme.openness && <DetailRow label="開口度" value={phoneme.openness} />}
      {phoneme.movement && <DetailRow label="動き" value={phoneme.movement} />}
      <DetailRow label="例語" value={`${phoneme.exampleWord} ${phoneme.elsaNotation}`} />
      <DetailRow label="近似音" value={phoneme.japaneseApprox} />

      <div className="mt-3">
        <p className="text-sm font-semibold" style={{ color: 'var(--text-secondary, #A1A1AA)' }}>
          発音の仕方
        </p>
        <div className="mt-1 flex flex-col gap-2">
          {phoneme.description.split('\n\n').map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary, #A1A1AA)' }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
