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
        <main className="grow px-2">
          <div className="mx-auto max-w-screen-xl md:grid md:grid-cols-8 md:gap-4">
            <div className="mb-16 border md:col-span-5 md:mb-0">{children}</div>
            <div className="border md:col-span-3">sidebar</div>
          </div>
        </main>
      </body>
    </html>
  )
}
