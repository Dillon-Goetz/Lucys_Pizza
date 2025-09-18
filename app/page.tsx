import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Pizza, Users, Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ItalianFlagDivider from "@/components/ItalianFlagDivider"; 
import InstagramGrid from "@/components/InstagramGrid";
import { curatedPosts } from "@/src/data/instagram-posts";



export default function HomePage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
<section className="relative bg-[url('/images/bg_1.jpg')] bg-cover bg-center py-20">
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 text-white">
        <div className="flex items-center space-x-2 text-red-400">
          <Heart className="h-5 w-5 fill-current" />
          <span className="text-sm font-medium">Serving Ossining Since 1976</span>
        </div>

        <h2 className="text-5xl font-bold leading-tight">
          A Slice of Community
          <br />
          <span className="text-green-300">in the Heart of Ossining</span>
        </h2>

        <p className="text-xl text-gray-200 leading-relaxed">
          Welcome to Lucy's Pizza, where quality pizza brings the Ossining community together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
            <Link href="/menu">View Our Menu</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-red-400 text-red-400 hover:bg-red-50/10 bg-transparent"
          >
            <Link href="/contact">Cater Your Next Event!</Link>
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -top-4 -left-4 w-full h-full bg-green-300 rounded-lg transform rotate-3"></div>
        <div className="absolute -top-2 -right-2 w-full h-full bg-red-100 rounded-lg transform -rotate-2"></div>

        <Image
          src="/images/LucysNiceFrontDoor.jpg"
          alt="Lucy's signature pizza with fresh ingredients"
          width={700}
          height={400}
          className="relative rounded-lg shadow-xl object-cover"
        />

        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
          <Heart className="h-6 w-6 text-red-500 fill-current" />
        </div>
      </div>
    </div>
  </div>
</section>

      <ItalianFlagDivider />

      {/* Features Section */}
      <section className="relative bg-gradient-to-l from-rose-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Westchester Loves Lucy's</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quality ingredients, authentic recipes, and a commitment to our community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Pizza className="h-8 w-8 text-red-500" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Fresh Daily</h4>
                <p className="text-gray-600">Our dough is made fresh every morning, and we use only the finest San Marzano tomatoes and premium mozzarella.</p>
              </CardContent>
            </Card>
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Community Focused</h4>
                <p className="text-gray-600">Proudly serving the Ossining community for nearly 40 years. We're not just a restaurant, we're neighbors.</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-rose-100 fill-current" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Made with Care</h4>
                <p className="text-gray-600">Every pie and dish is prepared with attention to quality and taste.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

 {/* Instagram Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Follow Us on Instagram</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Check out our latest creations and community moments.
          </p>
          
          {/* --- 2. THE COMPONENT USAGE STAYS EXACTLY THE SAME --- */}
          <InstagramGrid posts={curatedPosts} />

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-pink-600 hover:bg-pink-700 text-white"
            >
              <a
                href="https://www.instagram.com/lucys_pizza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow Us on Instagram
              </a>
            </Button>
          </div>  
        </div>
      </section>


      {/* Quick Info Section */}
      <section className="py-16 bg-green-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <Clock className="h-8 w-8 text-green-700" />
              </div>
              <h4 className="text-xl text-stone-50 font-semibold">Hours</h4>
              <div className="text-stone-50">
                <p>Mon-Sat: 11am-10pm</p>
                <p>Sun: 12pm-9pm</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-xl text-stone-50 font-semibold">Location</h4>
              <div className="text-stone-50">
                <p>26 S Highland Ave</p>
                <p>Ossining, NY 10562</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <Phone className="h-8 w-8 text-green-700" />
              </div>
              <h4 className="text-xl text-stone-50 font-semibold">Call Us</h4>
              <div className="text-stone-50">
                <p>(914) 762-0001</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}