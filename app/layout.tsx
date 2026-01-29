import type { Metadata } from 'next'
import { Noto_Sans, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '発音記号インデックス',
  description: 'ELSAが採用するアメリカ英語の全音素47個を一覧表示する発音記号リファレンスアプリ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} ${notoSansJP.variable} antialiased`}>{children}</body>
    </html>
  )
}
