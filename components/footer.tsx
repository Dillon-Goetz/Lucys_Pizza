import Link from "next/link"
import { Heart, Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">

            <Image
            src="/favicon.ico" // Path to your favicon.ico in the public directory
            alt="Lucy's Pizza Icon" // Accessible description of the icon
            width={25} // Set desired width (e.g., 24px to match h-6 w-6)
            height={25} // Set desired height
            className="rounded-full" // Optional: Add rounded-full if your favicon is not square or you want a circular look
          />
          <span className="text-2xl font-bold font-playfair">Lucy&apos;s Pizza</span>
            </div>
            <p className="text-muted-foreground text-sm">Authentic and casual pizzeria serving NY-style pizza, sandwiches, and salads.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-muted-foreground hover:text-foreground text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-foreground text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Monday - Saturday: 11am - 10pm</li>
              <li>Sunday: 12pm - 10pm</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>26 S Highland Ave</p>
              <p>Ossining, NY 10562</p>
              <p>Phone: (914) 762-0001</p>
            </address>
            <div className="flex gap-4 mt-4">
              <Link href="https://www.facebook.com/pages/Lucys-Pizza/114059728624369" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/lucys_pizza/" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lucy&apos;s Pizza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
