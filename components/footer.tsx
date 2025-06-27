import Link from "next/link"
import { Heart, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-italian-red" fill="currentColor" />
              <span className="text-xl font-bold font-playfair">Lucy&apos;s Pizza</span>
            </div>
            <p className="text-muted-foreground text-sm">Authentic Italian pizza in Ossining, New York since 1995.</p>
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
              <li>Monday - Thursday: 11am - 10pm</li>
              <li>Friday - Saturday: 11am - 11pm</li>
              <li>Sunday: 12pm - 9pm</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>123 Main Street</p>
              <p>Ossining, NY 10562</p>
              <p>Phone: (914) 555-1234</p>
              <p>Email: info@lucyspizza.com</p>
            </address>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
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
