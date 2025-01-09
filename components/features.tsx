
export function Features({ data }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((feature) => {
            // const Icon = iconMap[feature.icon]
            const Icon = feature.icon

            return (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-600 mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

