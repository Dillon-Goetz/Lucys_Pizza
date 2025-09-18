import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Lucy's Pizza contact"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container relative z-10 text-center text-green-800">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-red-500">
            Get in touch with us for orders, reservations, or just to say hello!
          </p>
        </div>
      </section>

      {/* Italian Flag Stripe */}
      <div className="flex h-4">
        <div className="flex-1 bg-italian-green"></div>
        <div className="flex-1 bg-italian-white"></div>
        <div className="flex-1 bg-italian-red"></div>
      </div>

      {/* Contact Information */}
      <section className="py-16 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input id="phone" type="tel" placeholder="(914) 555-0123" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="What's this about?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us how we can help you..." className="min-h-[120px]" />
              </div>
              <Button className="w-full bg-italian-red hover:bg-italian-red/90">Send Message</Button>
            </CardContent>
          </Card>

          {/* Contact Information Cards */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-italian-red/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-italian-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-playfair">Phone</h3>
                    <p className="text-muted-foreground mb-2">Call us for orders or catering questions</p>
                    <p className="text-lg font-medium">(914) 762-0001</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-italian-green/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-italian-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-playfair">Address</h3>
                    <p className="text-muted-foreground mb-2">Visit us in the heart of Ossining</p>
                    <p className="text-lg">26 S Highland Ave</p>
                    <p className="text-lg">Ossining, NY 10562</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-italian-red/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-italian-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-playfair">Hours</h3>
                    <p className="text-muted-foreground mb-2">We're open 7 days a week</p>
                    <div className="space-y-1">
                      <p className="text-sm">Monday - Thursday: 11am - 10pm</p>
                      <p className="text-sm">Sunday: 12pm - 10pm</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Find Us</h2>
            <p className="text-muted-foreground">Located in the heart of downtown Ossining with plenty of parking</p>
          </div>
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <p className="text-muted-foreground">Interactive map would be embedded here</p>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 bg-italian-red text-black">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Skip the wait and order online for pickup or delivery</p>
          <Button className="bg-white text-italian-red hover:bg-white/90 text-lg px-8 py-3">Order Online Now</Button>
        </div>
      </section>
    </div>
  )
}
