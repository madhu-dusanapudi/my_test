export function Process({ data }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">FEATURES</h2>
          <h3 className="text-4xl font-bold">We Follow Great Process</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {data.map((step) => (
            <div key={step.id} className="text-center group">
              <div className="relative">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </span>
                </div>
              </div>
              <h4 className="font-bold mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

