import { Button } from "./ui/button"
export function Hero({ data }) {
  return (
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-600/40">
        <img
          src="/placeholder.svg"
          alt="Hero background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4">
            WE HAVE TOP EXPERTS
          </span>
          <h1 className="text-5xl font-bold mb-6">{data.tagline}</h1>
          <p className="text-lg mb-8">{data.description}</p>
          <div className="flex gap-4">
            <Button size="lg" variant="default" className="bg-red-600 hover:bg-red-700">
              ABOUT US
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:text-red-600 hover:bg-white">
              READ MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

