import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock } from "lucide-react"

export default function ContactCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {/* Phone Card */}
      <Card className="border-none shadow-lg">
        <CardContent className="pt-6 text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-italian-red/10 flex items-center justify-center mb-4">
            <Phone className="h-6 w-6 text-italian-red" />
          </div>
          <h3 className="text-xl font-bold mb-2 font-playfair">Phone</h3>
          <p className="text-sm text-muted-foreground mb-3">Call us for orders</p>
          <p className="text-lg font-medium">(914) 762-0001</p>
        </CardContent>
      </Card>

      {/* Address Card */}
      <Card className="border-none shadow-lg">
        <CardContent className="pt-6 text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-italian-green/10 flex items-center justify-center mb-4">
            <MapPin className="h-6 w-6 text-italian-green" />
          </div>
          <h3 className="text-xl font-bold mb-2 font-playfair">Address</h3>
          <p className="text-sm text-muted-foreground mb-3">Visit us in Ossining</p>
          <p className="text-md">26 S Highland Ave</p>
          <p className="text-md">Ossining, NY 10562</p>
        </CardContent>
      </Card>

      {/* Hours Card */}
      <Card className="border-none shadow-lg">
        <CardContent className="pt-6 text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-italian-red/10 flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-italian-red" />
          </div>
          <h3 className="text-xl font-bold mb-2 font-playfair">Hours</h3>
          <div className="space-y-1 text-sm">
            <p>Mon - Thu: 11am - 10pm</p>
            <p>Fri - Sat: 11am - 11pm</p>
            <p>Sun: 12pm - 10pm</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}