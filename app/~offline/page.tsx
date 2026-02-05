import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'オフライン | 発音記号インデックス',
}

export default function OfflinePage() {
  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-4)',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div
        style={{
          fontSize: '4rem',
          marginBottom: 'var(--space-4)',
          color: 'var(--text-muted)',
        }}
        aria-hidden="true"
      >
        📴
      </div>
      <h1
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: 'var(--space-2)',
          color: 'var(--text-primary)',
        }}
      >
        オフラインです
      </h1>
      <p
        style={{
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
        }}
      >
        インターネット接続を確認してください
      </p>
    </div>
  )
}
