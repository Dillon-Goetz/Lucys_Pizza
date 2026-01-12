import Image from "next/image"
import HeartDivider from "@/components/heart-divider"

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Kept for branding */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/Lucys-Catering.png" // Using your catering image as a background blur
            alt="Lucy's Pizza"
            fill
            className="object-cover brightness-[0.3] blur-sm"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Menus</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Fresh, authentic, and ready for you.
          </p>
        </div>
      </section>

      {/* Italian Flag Stripe */}
      <div className="flex h-4">
        <div className="flex-1 bg-italian-green"></div>
        <div className="flex-1 bg-italian-white"></div>
        <div className="flex-1 bg-italian-red"></div>
      </div>

      {/* Main Menu Section (PDF) */}
      <section className="py-16 container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Restaurant Menu</h2>
        
        {/* PDF Viewer / Download Button */}
        <div className="bg-muted p-8 rounded-lg border-2 border-dashed border-gray-300 mb-8">
           <p className="mb-6 text-lg">Click below to view our full menu.</p>
           <a 
            href="/assets/Lucys-Pizza-Menu.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 transition-colors shadow-lg"
           >
             Open Full Menu (PDF)
           </a>
        </div>
        
        {/* Optional: Embed the PDF for desktop users */}
        <div className="hidden md:block w-full h-[800px] border rounded-lg overflow-hidden shadow-xl">
          <iframe 
            src="/assets/Lucys-Pizza-Menu.pdf" 
            className="w-full h-full"
            title="Lucy's Pizza Menu"
          />
        </div>
      </section>

      <HeartDivider />

      {/* Catering Section (Image) */}
      <section id="catering" className="py-16 container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Catering Menu</h2>
        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white">
          <img 
            src="/assets/Lucys-Catering.png" 
            alt="Lucy's Catering Menu" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="mt-12 bg-italian-green text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Planning an Event?</h3>
          <p className="text-lg">Contact us at (914) 762-0001 or email catering@lucyspizza.com</p>
        </div>
      </section>
    </div>
  )
}