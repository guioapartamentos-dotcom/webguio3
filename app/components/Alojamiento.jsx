export default function Alojamiento() {
  return (
    <section
      id="alojamiento"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-black text-green-700 text-center mb-12">
          Nuestro Alojamiento
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Imagen temporal */}

          <div className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center">

            <span className="text-gray-500 text-xl">
              Aquí irá la fotografía principal
            </span>

          </div>

          {/* Información */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Apartamento en San Antero
            </h3>

            <p className="text-gray-600 leading-8 mb-8">
              Disfruta de una estancia cómoda y tranquila cerca de las
              playas de San Antero y Coveñas. Nuestro apartamento está pensado
              para familias, parejas y viajeros que buscan descansar
              en un ambiente agradable. Tus mascotas también son bienvenidas.
            </p>

            <div className="space-y-3 text-lg">

              <p>✅ Cerca de la playa</p>

              <p>✅ Aire acondicionado</p>

              <p>✅ Cocina equipada</p>

              <p>✅ WiFi</p>

              <p>✅ Parqueadero</p>

              <p>✅ Ambiente familiar</p>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://www.airbnb.mx/rooms/797821080227684492"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-800 transition"
              >
                Reservar en Airbnb
              </a>

              <a
                href="https://wa.me/573242183939"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-green-700 hover:text-white transition"
              >
                Consultar por WhatsApp
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}