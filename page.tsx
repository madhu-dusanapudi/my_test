import { siteData } from "@/data/site-data"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { MobileApp } from "@/components/mobile-app"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header data={{ ...siteData.company, navigation: siteData.navigation }} />
      <main>
        <Hero data={siteData.company} />
        <Features data={siteData.features} />
        <Services data={siteData.services} />
        <Process data={siteData.process} />
        <MobileApp />
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Reviews & Ratings</h2>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              <img src="/placeholder.svg" alt="Google" className="h-12" />
              <img src="/placeholder.svg" alt="Trustpilot" className="h-12" />
              <img src="/placeholder.svg" alt="Software Suggest" className="h-12" />
              <img src="/placeholder.svg" alt="GoodFirms" className="h-12" />
            </div>
          </div>
        </section>
      </main>
      <Footer data={siteData.footer} />
    </div>
  )
}

