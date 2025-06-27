import Image from "next/image"
import HeartDivider from "@/components/heart-divider"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Users, Calendar } from "lucide-react"

export default function AboutPage() {
  const timelineEvents = [
    {
      year: "1995",
      title: "Grand Opening",
      description: "Lucy's Pizza opens its doors in Ossining, New York",
    },
    {
      year: "2000",
      title: "Expansion",
      description: "Added outdoor seating area and expanded the menu",
    },
    {
      year: "2008",
      title: "Award Winning",
      description: "Voted 'Best Pizza in Westchester County'",
    },
    {
      year: "2015",
      title: "20th Anniversary",
      description: "Celebrated 20 years of serving the community",
    },
    {
      year: "2020",
      title: "Renovation",
      description: "Complete restaurant renovation with new wood-fired oven",
    },
    {
      year: "2023",
      title: "Community Focus",
      description: "Launched monthly pizza-making classes for local schools",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Lucy's Pizza About Us"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            The story behind Lucy's Pizza and our passion for authentic Italian cuisine
          </p>
        </div>
      </section>

      {/* Italian Flag Stripe */}
      <div className="flex h-4">
        <div className="flex-1 bg-italian-green"></div>
        <div className="flex-1 bg-italian-white"></div>
        <div className="flex-1 bg-italian-red"></div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="Lucy's Pizza founders"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Lucy's Pizza was founded in 1995 by Maria and Antonio Rossi, who immigrated to the United States from
                Naples, Italy. Named after both the beloved TV character Lucy Ricardo and Antonio's grandmother Lucia,
                the restaurant combines classic Italian recipes with a warm, welcoming atmosphere.
              </p>
              <p>
                What started as a small family-owned pizzeria has grown into a beloved institution in Ossining. Our
                commitment to authentic flavors, quality ingredients, and exceptional service has remained unchanged for
                over 25 years.
              </p>
              <p>
                The heart motif throughout our restaurant is inspired by Lucia's belief that food made with love tastes
                better. We continue this tradition by putting our hearts into every dish we serve.
              </p>
              <p>
                Today, the second generation of the Rossi family continues to operate Lucy's Pizza, maintaining the
                traditions while introducing new ideas to keep our menu fresh and exciting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HeartDivider />

      {/* Our Values */}
      <section className="py-16 bg-muted/30 heart-pattern">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Lucy's Pizza
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8 text-italian-red" />,
                title: "Made with Love",
                description:
                  "Every dish is prepared with care and attention to detail, just like Grandma Lucia taught us.",
              },
              {
                icon: <Award className="h-8 w-8 text-italian-green" />,
                title: "Quality Ingredients",
                description: "We source the finest ingredients, including imported Italian products and local produce.",
              },
              {
                icon: <Users className="h-8 w-8 text-italian-red" />,
                title: "Community First",
                description:
                  "We're committed to giving back to the Ossining community that has supported us for decades.",
              },
            ].map((value, index) => (
              <Card key={index} className="bg-white border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <HeartDivider />

      {/* Timeline */}
      <section className="py-16 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The milestones that have shaped Lucy's Pizza over the years
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="h-10 w-10 rounded-full bg-italian-red flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}>
                  <div className="w-1/2"></div>
                  <div className="w-1/2 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <span className="text-italian-red font-bold text-xl">{event.year}</span>
                      <h3 className="text-xl font-bold mt-2 mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HeartDivider />

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The passionate people behind Lucy's Pizza</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sofia Rossi",
                title: "Owner & Head Chef",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Marco Rossi",
                title: "Co-Owner & Manager",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Gabriella Conti",
                title: "Pizza Chef",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Antonio Bianchi",
                title: "Pastry Chef",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-italian-red text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Lucy's Pizza has been our family's go-to for over a decade. The food is consistently amazing and the atmosphere is so welcoming.",
                author: "Sarah Johnson",
              },
              {
                quote:
                  "As an Italian, I'm very picky about my pizza. Lucy's is the real deal - authentic flavors that remind me of home.",
                author: "Marco Vitali",
              },
              {
                quote:
                  "The heart-shaped pizza they made for our anniversary was not only beautiful but absolutely delicious. They go above and beyond!",
                author: "Emily & David Thompson",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg">
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="font-bold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
