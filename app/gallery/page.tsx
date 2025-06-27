import Image from "next/image"
import HeartDivider from "@/components/heart-divider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  const categories = [
    { id: "all", label: "All Photos" },
    { id: "food", label: "Our Food" },
    { id: "restaurant", label: "Restaurant" },
    { id: "community", label: "Community" },
  ]

  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Margherita pizza fresh from the oven",
      category: "food",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Lucy's Pizza restaurant interior",
      category: "restaurant",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Chef preparing pizza dough",
      category: "food",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Community pizza making class",
      category: "community",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Wood-fired oven with flames",
      category: "restaurant",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Assorted desserts display",
      category: "food",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Local charity event hosted by Lucy's Pizza",
      category: "community",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Outdoor seating area",
      category: "restaurant",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Pasta dish with garlic bread",
      category: "food",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Customer birthday celebration",
      category: "community",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Bar area with Italian wines",
      category: "restaurant",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Specialty pizza with fresh ingredients",
      category: "food",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Lucy's Pizza Gallery"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A visual journey through our restaurant, food, and community events
          </p>
        </div>
      </section>

      {/* Italian Flag Stripe */}
      <div className="flex h-4">
        <div className="flex-1 bg-italian-green"></div>
        <div className="flex-1 bg-italian-white"></div>
        <div className="flex-1 bg-italian-red"></div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 container">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-6 py-2 data-[state=active]:bg-italian-red data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages
                  .filter((image) => image.category === category.id)
                  .map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <HeartDivider />

      {/* Share Your Moments */}
      <section className="py-12 bg-muted/30 heart-pattern">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Moments</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Tag us on social media with #LucysPizza to be featured in our gallery
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-italian-red hover:bg-italian-red/90 text-white px-6 py-3 rounded-md font-medium">
              Instagram
            </a>
            <a
              href="#"
              className="bg-italian-green hover:bg-italian-green/90 text-white px-6 py-3 rounded-md font-medium"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
