export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              GUIO
            </h3>

            <p className="text-green-100">
              Inversiones Turísticas y Agropecuarias S.A.S.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Servicios
            </h3>

            <ul className="space-y-2">
              <li>Producción Agropecuaria</li>
              <li>Turismo</li>
              <li>Alojamiento</li>
              <li>Inversión</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Contacto
            </h3>

            <p>📍 San Antero - Córdoba</p>
            <p>📱 +57 324 218 3939</p>
            <p>✉️ contacto@guioinversiones.com</p>
          </div>

        </div>

        <hr className="my-8 border-green-700" />

        <p className="text-center text-green-200">
          © 2026 GUIO Inversiones Turísticas y Agropecuarias S.A.S.
          Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}