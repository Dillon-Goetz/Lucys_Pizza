import Image from "next/image"
import { Button } from "@/components/ui/button"
import ContactCards from "@/components/contact-cards" // Ensure this path matches your file structure

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/PizzaBoxesLucys.jpg"
            alt="Lucy's Pizza contact"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Get in touch with us for orders, catering, or reservations!
          </p>
        </div>
      </section>

      {/* Italian Flag Stripe */}
      <div className="flex h-4">
        <div className="flex-1 bg-italian-green"></div>
        <div className="flex-1 bg-italian-white"></div>
        <div className="flex-1 bg-italian-red"></div>
      </div>

      {/* Contact Information Section - Now using the Component */}
      <section className="py-16 container">
        <ContactCards />
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Find Us</h2>
            <p className="text-muted-foreground">Located in the heart of downtown Ossining</p>
          </div>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.123456789!2d-73.864!3d41.161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjYgUyBIaWdobGFuZCBBdmUsIE9zc2luaW5nLCBOWSAxMDU2Mg!5e0!3m2!1sen!2sus!4v123456789"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lucy's Pizza Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 bg-italian-red text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Ready to Eat?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Call us now to place your order for pickup or delivery</p>
          <Button 
            asChild
            className="bg-white text-italian-red hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-bold shadow-md"
          >
            <a href="tel:9147620001">(914) 762-0001</a>
          </Button>
        </div>
      </section>
    </div>
  )
}