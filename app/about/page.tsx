import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import HeartDivider from "@/components/heart-divider"
import { Users, Award, Clock, Heart } from "lucide-react"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/LucysNiceFrontDoor.jpg?height=800&width=1920"
            alt=" Lucy's Pizza in Ossining, a welcoming sight with a family-run feel"
            fill
            className="object-cover brightness-40"
          />
        </div>
        <div className="container relative z-10 text-center text-red-600">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">Our Story: A Taste of Home</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-green-500">
            From our family to yours, we've been serving authentic Italian cuisine in the heart of Ossining since 1976
          </p>
        </div>
      </section>

      {/* Italian Flag Stripe */}
      <div className="flex h-4">
        <div className="flex-1 bg-italian-green"></div>
        <div className="flex-1 bg-italian-white"></div>
        <div className="flex-1 bg-italian-red"></div>
      </div>

      {/* Main Story */}
      <section className="py-16 container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">The Beginning: Made in Ossining</h2>
              <p className="text-muted-foreground mb-4">
                Lucy's Pizza was born from a dream and a family recipe brought over from Italy. In 1976,
                the Tony's opened the doors to what would become Ossining's most beloved pizzeria.
              </p>
              <p className="text-muted-foreground mb-4">
                Named after Lucy from the hit 1950's show, I Love Lucy, our restaurant embodies the spirit of family, laughter, and authentic Italian hospitality.
              </p>
              <p className="text-muted-foreground">
                What started as a small family business has grown into a cornerstone of the Ossining community, serving
                thousands of families over nearly three decades.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="The Two Tony's, proud owners of Lucy's Pizza"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <HeartDivider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Traditional pizza making"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 font-playfair">Our Tradition</h2>
              <p className="text-muted-foreground mb-4">
                Every pizza at Lucy's is made using traditional methods passed down from the old country. Our dough is
                hand-stretched daily, our sauce is made from San Marzano tomatoes, and our mozzarella is sourced from
                the finest Italian producers.
              </p>
              <p className="text-muted-foreground mb-4">
                We believe that great pizza isn't just about ingredients—it's about passion, patience, and the love that
                goes into every pie. Our ingredients and pizza making process add character and flavor that
                keeps our customers coming back.
              </p>
              <p className="text-muted-foreground">
                Today, we carry the same standards of excellence, ensuring that every meal
                served carries the same love and authenticity that Tony & Tony brought to Ossining all those
                years ago.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Lucy's Pizza
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-italian-red/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-italian-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-playfair">Family</h3>
                  <p className="text-muted-foreground text-sm">
                    We treat every customer like family and every meal like it's for our own loved ones.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-italian-green/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-italian-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-playfair">Quality</h3>
                  <p className="text-muted-foreground text-sm">
                    Only the finest ingredients make it into our kitchen, sourced from trusted suppliers.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-italian-red/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-italian-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-playfair">Tradition</h3>
                  <p className="text-muted-foreground text-sm">
                    Time-honored recipes and methods that have been perfected over generations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-italian-green/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-italian-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-playfair">Community</h3>
                  <p className="text-muted-foreground text-sm">
                    Proud to be part of Ossining and committed to giving back to our neighbors.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Meet the Family</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The passionate people behind Lucy's Pizza</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Tony ",
              role: "Co-Founder",
              image: "/placeholder.svg?height=400&width=400",
              description: "Giuseppe brings over 40 years of culinary experience from his native Sicily.",
            },
            {
              name: "Tony",
              role: "Co-Founder & Manager",
              image: "/placeholder.svg?height=400&width=400",
              description: "Maria ensures every guest feels welcome and every detail is perfect.",
            },
            {
              name: "Pizzaiolo",
              role: "Head Pizzaiolo",
              image: "/placeholder.svg?height=400&width=400",
              description: "Tony continues the family tradition while adding his own creative touches.",
            },
          ].map((member, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 font-playfair">{member.name}</h3>
                <p className="text-italian-red font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
