// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nduvho Ramashia | Electrical & Information Engineer',
  description: 'Final-year Electrical & Information Engineering student specializing in IoT solutions, embedded systems, and measurement technologies. Building the future through Selah Engineering Solutions.',
  keywords: 'Electrical Engineer, IoT Developer, Embedded Systems, PCB Design, Firmware, C/C++, STM32, Nduvho Ramashia, Selah Engineering Solutions',
  authors: [{ name: 'Nduvho Edward Ramashia' }],
  creator: 'Nduvho Edward Ramashia',
  openGraph: {
    title: 'Nduvho Ramashia | Electrical & Information Engineer',
    description: 'Innovating connectivity and empowering communities through engineering excellence.',
    url: 'https://nduvho-portfolio.vercel.app',
    siteName: 'Nduvho Ramashia Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nduvho Ramashia | Electrical & Information Engineer',
    description: 'Innovating connectivity and empowering communities through engineering excellence.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
