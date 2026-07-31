export default function Servicios() {
  return (
    <section id="servicios" className="bg-gray-100 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-black text-green-700 text-center mb-14">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Producción Agropecuaria */}
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition">

            <div className="text-5xl mb-5">🥚</div>

            <h3 className="text-2xl font-bold mb-4">
              Producción Agropecuaria
            </h3>

            <p className="text-gray-600 mb-6">
              Producción de huevos frescos y productos del campo.
            </p>

            <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800">
              Conocer más
            </button>

          </div>

          {/* Turismo */}
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition">

            <div className="text-5xl mb-5">🌴</div>

            <h3 className="text-2xl font-bold mb-4">
              Turismo
            </h3>

            <p className="text-gray-600 mb-6">
              Experiencias rurales y turismo en San Antero.
            </p>

            <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800">
              Conocer más
            </button>

          </div>

          {/* Alojamiento */}
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition">

            <div className="text-5xl mb-5">🏠</div>

            <h3 className="text-2xl font-bold mb-4">
              Alojamiento
            </h3>

            <p className="text-gray-600 mb-6">
              Apartamento cómodo cerca de las playas de San Antero.
            </p>

            <a
              href="#alojamiento"
              className="inline-block bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800"
            >
              Ver alojamiento
            </a>

          </div>

          {/* Inversión */}
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition">

            <div className="text-5xl mb-5">🏢</div>

            <h3 className="text-2xl font-bold mb-4">
              Inversión
            </h3>

            <p className="text-gray-600 mb-6">
              Desarrollo de proyectos inmobiliarios y oportunidades de inversión.
            </p>

            <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800">
              Próximamente
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}