import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import HeartDivider from "@/components/heart-divider"
import { Heart } from "lucide-react"

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
}

export default function MenuPage() {
  const menuCategories = [
    { id: "pizza", label: "Pizza" },
    { id: "appetizers", label: "Appetizers" },
    { id: "salads", label: "Salads" },
    { id: "pasta", label: "Pasta" },
    { id: "desserts", label: "Desserts" },
    { id: "drinks", label: "Drinks" },
  ]

const menuItems: { [key: string]: MenuItem[] } = {
    pizza: [
      {
        name: "Margherita",
        description: "Fresh mozzarella, tomatoes, basil, and our signature sauce",
        price: "$14.99",
        image: "/placeholder.svg?height=300&width=300",
        featured: true,
      },
      {
        name: "Lucy's Special",
        description: "Pepperoni, sausage, mushrooms, bell peppers, and onions",
        price: "$18.99",
        image: "/placeholder.svg?height=300&width=300",
        featured: true,
      },
      {
        name: "Quattro Formaggi",
        description: "Four cheese blend with mozzarella, gorgonzola, fontina, and parmesan",
        price: "$16.99",
        image: "/placeholder.svg?height=300&width=300",
        featured: true,
      },
      {
        name: "Pepperoni",
        description: "Classic pepperoni with mozzarella and our signature sauce",
        price: "$15.99",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Vegetarian",
        description: "Mushrooms, bell peppers, onions, olives, and tomatoes",
        price: "$16.99",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Hawaiian",
        description: "Ham, pineapple, and mozzarella cheese",
        price: "$16.99",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    appetizers: [
      {
        name: "Garlic Knots",
        description: "Freshly baked knots with garlic, butter, and parmesan",
        price: "$6.99",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Mozzarella Sticks",
        description: "Breaded mozzarella sticks with marinara sauce",
        price: "$8.99",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Bruschetta",
        description: "Toasted bread topped with tomatoes, basil, and olive oil",
        price: "$7.99",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Calamari",
        description: "Lightly fried calamari served with marinara sauce",
        price: "$12.99",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    salads: [
      {
        name: "Caesar Salad",
        description: "Romaine lettuce, croutons, parmesan cheese, and Caesar dressing",
        price: "$9.99",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Caprese Salad",
        description: "Fresh mozzarella, tomatoes, basil, and balsamic glaze",
        price: "$10.99",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Greek Salad",
        description: "Mixed greens, feta cheese, olives, tomatoes, and Greek dressing",
        price: "$10.99",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    pasta: [
      {
        name: "Spaghetti & Meatballs",
        description: "Spaghetti with homemade meatballs and marinara sauce",
        price: "$14.99",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Fettuccine Alfredo",
        description: "Fettuccine pasta in a creamy Alfredo sauce",
        price: "$13.99",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Lasagna",
        description: "Layers of pasta, ricotta, mozzarella, and meat sauce",
        price: "$15.99",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    desserts: [
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
        price: "$7.99",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Cannoli",
        description: "Crispy shells filled with sweet ricotta cream and chocolate chips",
        price: "$6.99",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
        price: "$8.99",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    drinks: [
      {
        name: "Soft Drinks",
        description: "Coke, Diet Coke, Sprite, Fanta, Iced Tea",
        price: "$2.99",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Italian Soda",
        description: "Flavored soda with whipped cream",
        price: "$3.99",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "San Pellegrino",
        description: "Sparkling mineral water",
        price: "$3.99",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Wine",
        description: "Red, white, or rosé by the glass",
        price: "$7.99",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Lucy's Pizza Menu"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our delicious offerings made with authentic Italian recipes
          </p>
        </div>
      </section>

      {/* Italian Flag Stripe */}
      <div className="flex h-4">
        <div className="flex-1 bg-italian-green"></div>
        <div className="flex-1 bg-italian-white"></div>
        <div className="flex-1 bg-italian-red"></div>
      </div>

      {/* Menu Section */}
      <section className="py-16 container">
        <Tabs defaultValue="pizza" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto">
            {menuCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-6 py-2 data-[state=active]:bg-italian-red data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(menuItems).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <Card key={index} className={`overflow-hidden ${item.featured ? "border-italian-red" : ""}`}>
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      {item.featured && (
                        <div className="absolute top-2 right-2 bg-italian-red text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
                          <Heart className="h-3 w-3 mr-1" fill="currentColor" />
                          Featured
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <span className="font-bold text-italian-red">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <HeartDivider />

      {/* Special Dietary Options */}
      <section className="py-12 bg-muted/30 heart-pattern">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Special Dietary Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We cater to various dietary needs to ensure everyone can enjoy our delicious food
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Gluten-Free",
                description: "Gluten-free pizza crust and pasta options available upon request",
              },
              {
                title: "Vegetarian",
                description: "Wide selection of vegetarian pizzas, pastas, and appetizers",
              },
              {
                title: "Vegan",
                description: "Dairy-free cheese alternatives and plant-based toppings available",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-white border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Info */}
      <section className="py-16 bg-italian-green text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Catering Services</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Let Lucy's Pizza cater your next event! We offer special catering menus for parties, corporate events, and
            special occasions.
          </p>
          <p className="mb-8">Contact us at (914) 762-0001 or email catering@lucyspizza.com for more information.</p>
        </div>
      </section>
    </div>
  )
}
