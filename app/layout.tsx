import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Inter } from "next/font/google"
import SizeScreenHelper from "@/components/ui/ScreenSizeHelper"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const interSans = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "kiosko Nextjs con App Router y Prisma",
  description: "kiosko Nextjs con App Router y Prisma",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${interSans.variable} ${interSans.variable} antialiased ultra-minimal-scrollbars`}>
        {children}
        <SizeScreenHelper />
      </body>
    </html>
  )
}
