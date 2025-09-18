"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky bg-white top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
            <Image
            src="/favicon.ico" // Path to your favicon.ico in the public directory
            alt="Lucy's Pizza Icon" // Accessible description of the icon
            width={25} // Set desired width (e.g., 24px to match h-6 w-6)
            height={25} // Set desired height
            className="rounded-full" // Optional: Add rounded-full if your favicon is not square or you want a circular look
          />
          <span className="text-2xl font-bold font-playfair">Lucy&apos;s Pizza</span>
        </Link>

        {/* Mobile menu button */}
        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-italian-red hover:bg-italian-red/90">Order Online (Coming Soon)</Button>
        </nav>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary py-2",
                    pathname === item.href ? "text-foreground" : "text-muted-foreground",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-red-500 hover:bg-red-400 text-white w-full"><span>Order Now (Coming Soon)</span></Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
