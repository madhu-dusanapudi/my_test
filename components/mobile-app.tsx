import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MobileApp() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Professionals in the Palm of Your Hand!</h2>
            <p className="text-gray-600 mb-8">
              Now, get all your legal, tax, & compliance work done on the go through the Khata Dekho app. With our app, you
              can:
            </p>
            <ul className="space-y-4 mb-8">
              <li>Get services</li>
              <li>Use your dashboard</li>
              <li>Save your documents in a secure vault</li>
              <li>Talk to our support team</li>
            </ul>
            <div>
              <h3 className="font-bold mb-4">Get Started</h3>
              <Button asChild>
                <Link href="#">Download from Store</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg"
              alt="Mobile App"
              className="w-full max-w-[300px] mx-auto"
              width={300}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

