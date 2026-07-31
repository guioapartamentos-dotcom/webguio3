export default function Hero() {
  return (
    <section className="bg-green-700 text-white py-32 text-center">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-6xl font-black mb-6">
          GUIO
        </h1>

        <h2 className="text-3xl font-semibold mb-6">
          Inversiones Turísticas y Agropecuarias S.A.S.
        </h2>

        <p className="text-xl max-w-3xl mx-auto mb-10">
          Del campo a tu mesa y de la inversión al crecimiento sostenible.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="https://www.airbnb.mx/rooms/797821080227684492"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition"
          >
            Reservar alojamiento
          </a>

          <a
            href="https://wa.me/573242183939"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-700 transition"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}