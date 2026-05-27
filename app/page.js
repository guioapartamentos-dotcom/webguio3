export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
{/* MENU */}
<header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur border-b border-gray-200 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <h1 className="text-2xl font-black text-green-800">
      GUIO
    </h1>

    <nav className="hidden md:flex gap-8 font-semibold text-gray-700">
      <a href="#" className="hover:text-green-700">
        Inicio
      </a>

      <a href="#" className="hover:text-green-700">
        Nosotros
      </a>

      <a href="#" className="hover:text-green-700">
        Servicios
      </a>

      <a href="#" className="hover:text-green-700">
        Contacto
      </a>
    </nav>

  </div>
</header>
      {/* HERO */}
      <section
  className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
  style={{
  backgroundImage:
  "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop')",
}}
>
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            GUIO
          </h1>

          <p className="text-2xl md:text-3xl mb-8">
            Inversiones Turísticas y Agropecuarias
          </p>

          <p className="max-w-2xl mx-auto text-lg text-green-100 mb-10">
            Del campo a tu mesa y de la inversión al crecimiento sostenible.
          </p>

          <a
            href="https://wa.me/573242183939"
            target="_blank"
            className="bg-white text-green-900 px-8 py-4 rounded-2xl font-bold hover:bg-green-100 transition"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-green-800 mb-8">
          Sobre Nosotros
        </h2>

        <p className="text-lg leading-relaxed text-gray-600">
          GUIO Inversiones Turísticas y Agropecuarias S.A.S desarrolla
          proyectos sostenibles enfocados en el crecimiento del campo,
          el turismo y la inversión responsable.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="bg-gray-100 py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-black text-green-800 mb-12">
            Nuestros Servicios
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Producción Agropecuaria
              </h3>

              <p className="text-gray-600">
                Venta de huevos frescos y productos del campo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Turismo
              </h3>

              <p className="text-gray-600">
                Experiencias rurales y proyectos turísticos sostenibles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Inversión
              </h3>

              <p className="text-gray-600">
                Desarrollo de apartamentos y oportunidades inmobiliarias.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-4xl font-black text-green-800 mb-8">
          Contáctanos
        </h2>

        <p className="text-lg text-gray-600 mb-10">
          Escríbenos para más información sobre nuestros servicios.
        </p>

        <a
          href="https://wa.me/573242183939"
          target="_blank"
          className="bg-green-700 text-white px-10 py-5 rounded-2xl font-bold hover:bg-green-800 transition"
        >
          Hablar por WhatsApp
        </a>

      </section>
{/* WHATSAPP FLOAT */}
<a
  href="https://wa.me/573242183939"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl z-50 transition"
>
  💬
</a>
    </main>
  );
}
