import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeartDivider from "@/components/heart-divider"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Lucy's Pizza Contact"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with any questions or to make a reservation
          </p>
        </div>
      </section>

      {/* Italian Flag Stripe */}
      <div className="flex h-4">
        <div className="flex-1 bg-italian-green"></div>
        <div className="flex-1 bg-italian-white"></div>
        <div className="flex-1 bg-italian-red"></div>
      </div>

      {/* Contact Info & Form Section */}
      <section className="py-16 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-italian-red/10 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-italian-red" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Our Location</h3>
                      <address className="not-italic text-muted-foreground">
                        123 Main Street
                        <br />
                        Ossining, NY 10562
                        <br />
                        United States
                      </address>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-italian-green/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-italian-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Phone</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+19145551234" className="hover:text-italian-red">
                          (914) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-italian-red/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-italian-red" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@lucyspizza.com" className="hover:text-italian-red">
                          info@lucyspizza.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-italian-green/10 flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-italian-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Hours</h3>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Monday - Thursday: 11am - 10pm</li>
                        <li>Friday - Saturday: 11am - 11pm</li>
                        <li>Sunday: 12pm - 9pm</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 border rounded-md"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full p-2 border rounded-md"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full p-2 border rounded-md min-h-[150px]"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <Button className="w-full bg-italian-red hover:bg-italian-red/90">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <HeartDivider />

      {/* Map Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Find Us</h2>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Map location of Lucy's Pizza"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-italian-red text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="font-bold">Lucy's Pizza</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-16 bg-muted/30 heart-pattern">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Make a Reservation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Reserve a table for your next visit to ensure the best experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-italian-red hover:bg-italian-red/90">
              <a href="tel:+19145551234">Call to Reserve</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#online-reservation">Online Reservation</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Online Ordering */}
      <section id="online-reservation" className="py-16 bg-italian-green text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Order Online</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Enjoy Lucy's Pizza from the comfort of your home. Order online for pickup or delivery!
          </p>
          <Button asChild size="lg" className="bg-white text-italian-green hover:bg-white/90">
            <a href="#">Order Now</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
