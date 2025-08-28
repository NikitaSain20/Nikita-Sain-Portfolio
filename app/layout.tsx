import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { SectionThemeProvider } from "@/components/section-theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nikita Sain - Portfolio",
  description: "Software Developer Intern & BCA Student",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SectionThemeProvider>
          <Navigation />
          {children}
        </SectionThemeProvider>
      </body>
    </html>
  )
}
