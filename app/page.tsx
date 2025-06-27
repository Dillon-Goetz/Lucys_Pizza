import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeartDivider from "@/components/heart-divider"
import { UtensilsCrossed, Clock, MapPin } from "lucide-react"
import "./globals.css"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Delicious pizza from Lucy's Pizza"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Lucy&apos;s Pizza</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Authentic Italian pizza made with love in Ossining, New York
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-italian-red hover:bg-italian-red/90">
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
            </Button>
          </div>
        </div>
      </section>

      {/* Italian Flag Stripe */}
      <div className="flex h-4">
        <div className="flex-1 bg-italian-green"></div>
        <div className="flex-1 bg-italian-white"></div>
        <div className="flex-1 bg-italian-red"></div>
      </div>

      {/* Featured Section */}
      <section className="py-16 bg-muted/30 heart-pattern">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialties</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handcrafted with the finest ingredients and baked to perfection in our wood-fired oven
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Margherita",
                description: "Fresh mozzarella, tomatoes, basil, and our signature sauce",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Lucy's Special",
                description: "Pepperoni, sausage, mushrooms, bell peppers, and onions",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Quattro Formaggi",
                description: "Four cheese blend with mozzarella, gorgonzola, fontina, and parmesan",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <HeartDivider />

      {/* About Preview Section */}
      <section className="py-16 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Lucy's Pizza has been serving the Ossining community since 1995. Our family-owned restaurant brings
              authentic Italian flavors with a touch of love in every dish.
            </p>
            <p className="text-muted-foreground mb-6">
              Named after the beloved TV character Lucy Ricardo and our founder's grandmother Lucia, we combine classic
              recipes with a warm, welcoming atmosphere that makes everyone feel at home.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">Read More About Us</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Lucy's Pizza restaurant interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <HeartDivider />

      {/* Info Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-italian-green/10 flex items-center justify-center mb-4">
                    <UtensilsCrossed className="h-6 w-6 text-italian-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quality Ingredients</h3>
                  <p className="text-muted-foreground">
                    We use only the freshest, highest-quality ingredients in all our dishes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-italian-red/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-italian-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                  <p className="text-muted-foreground">
                    Hot and fresh pizza delivered to your door in 30 minutes or less.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-italian-green/10 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-italian-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Convenient Location</h3>
                  <p className="text-muted-foreground">
                    Located in the heart of Ossining, easy to find with ample parking.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-italian-red text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter to receive special offers and updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md flex-1 text-foreground"
              required
            />
            <Button className="bg-white text-italian-red hover:bg-white/90">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  )
}
