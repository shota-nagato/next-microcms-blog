import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layouts/Header'

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextブログ',
  description: 'NextjsとmicroCMSで作成したブログです。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className} flex min-h-screen flex-col`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
