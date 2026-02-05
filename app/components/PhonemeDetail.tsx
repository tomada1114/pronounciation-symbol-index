'use client'

import { getLipShapeLabel, getTongueRegionLabel, getTongueTargetLabel } from '@/app/domain/helpers'
import type { Phoneme } from '@/app/domain/types'

import { ArticulationTag } from './ArticulationTag'
import { DetailSection } from './DetailSection'

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
  const { articulation, pronunciationGuide } = phoneme
  const lipLabel = getLipShapeLabel(articulation.lips.shape)
  const tongueLabel = getTongueRegionLabel(articulation.tongue.region)
  const tongueTargetLabel = articulation.tongue.target
    ? getTongueTargetLabel(articulation.tongue.target)
    : null

  return (
    <div className="flex flex-col gap-3">
      {/* Tags row */}
      <div className="flex flex-wrap gap-2">
        <ArticulationTag label={`唇: ${lipLabel.ja}`} variant="lip" />
        <ArticulationTag label={`舌: ${tongueLabel.ja}`} variant="tongue" />
        {tongueTargetLabel && tongueTargetLabel.ja !== 'なし' && (
          <ArticulationTag label={`→ ${tongueTargetLabel.ja}`} variant="tongue" />
        )}
        {articulation.voicing && (
          <ArticulationTag label={articulation.voicing} variant="voicing" />
        )}
      </div>

      {/* Articulation details */}
      <DetailSection title="口の構え">
        <div className="flex flex-col gap-1.5">
          {articulation.articulationPoint && (
            <DetailRow label="調音点" value={articulation.articulationPoint} />
          )}
          {articulation.openness && <DetailRow label="開口度" value={articulation.openness} />}
          {articulation.movement && <DetailRow label="動き" value={articulation.movement} />}
          <DetailRow label="唇" value={articulation.lips.description} />
          <DetailRow label="舌" value={articulation.tongue.description} />
        </div>
      </DetailSection>

      {/* Pronunciation mechanism */}
      <DetailSection title="発音のメカニズム">
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary, #A1A1AA)' }}>
          {pronunciationGuide.mechanism}
        </p>
      </DetailSection>

      {/* Japanese comparison */}
      <DetailSection title="日本語との比較">
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary, #A1A1AA)' }}>
          {pronunciationGuide.comparison}
        </p>
      </DetailSection>

      {/* Reference */}
      <DetailSection title="参考">
        <div className="flex flex-col gap-1.5">
          <DetailRow label="例語" value={`${phoneme.exampleWord} ${phoneme.elsaNotation}`} />
          <DetailRow label="近似音" value={phoneme.japaneseApprox} />
        </div>
      </DetailSection>
    </div>
  )
}
