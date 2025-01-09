import Link from "next/link"

export function Services({ data }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-red-50 rounded-full text-red-600 text-sm font-medium mb-4">
            ABOUT KHATA DEKHO
          </span>
          <h2 className="text-4xl font-bold mb-4">Dedicated & Professional Tax Compliance Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experienced professionals is committed to providing you with the expertise and support you need to
            stay on top of your tax obligations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((service) => {
            // const Icon = iconMap[service.icon]
            const Icon = service.icon

            return (
              <Link
                key={service.title}
                href={service.link}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-16 h-16 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">{service.title}</h3>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

