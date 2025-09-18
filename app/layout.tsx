import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./global.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Lucy's Pizza - Authentic Italian Pizza in Ossining, NY",
  description:
    "Community-focused Italian restaurant serving authentic pizza since 1976. Located in the heart of Ossining, New York. Made with traditional recipes and the finest ingredients.",
  keywords:
    "pizza, Italian restaurant, Ossining NY, community restaurant, authentic Italian, pizza delivery, pizza takeout, Lucy's Pizza, Westchester, NY pizza",
  openGraph: {
    title: "Lucy's Pizza - Authentic Italian Pizza in Ossining, NY",
    description: "Community-focused Italian restaurant serving authentic pizza since 1976.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("font-inter bg-background text-foreground antialiased", inter.variable, playfair.variable)}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
