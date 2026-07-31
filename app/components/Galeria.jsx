export default function Galeria() {
  return (
    <section id="galeria" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-black text-center text-green-700 mb-4">
          Galería
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Conoce nuestro apartamento y disfruta de un lugar tranquilo cerca del mar.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-300 flex items-center justify-center">
              Foto 1
            </div>

            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">
                Sala
              </h3>

              <p className="text-gray-600">
                Espacio cómodo y moderno.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-300 flex items-center justify-center">
              Foto 2
            </div>

            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">
                Habitación
              </h3>

              <p className="text-gray-600">
                Descansa con total comodidad.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-300 flex items-center justify-center">
              Foto 3
            </div>

            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">
                Cocina
              </h3>

              <p className="text-gray-600">
                Totalmente equipada.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}