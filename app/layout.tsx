import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "TelegramBot Monitor - Никогда не пропустите выгодную сделку",
  description:
    "Telegram бот для мониторинга каналов и мгновенных уведомлений о новых постах. Дешевые авиабилеты, ограниченные кроссовки, новые квартиры - будьте первыми!",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable} ${dmSans.variable}`}
      >
<Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
