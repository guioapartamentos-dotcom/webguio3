export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <img
          src="/images/logo/LogoGuio.jpg"
          alt="GUIO Inversiones Turísticas y Agropecuarias"
          className="h-16 w-16 object-contain"
        />

        <div className="flex items-center gap-8">

          <nav className="hidden md:flex gap-8 font-semibold text-gray-700">

            <a href="#inicio" className="hover:text-green-700">
              Inicio
            </a>

            <a href="#nosotros" className="hover:text-green-700">
              Nosotros
            </a>

            <a href="#servicios" className="hover:text-green-700">
              Servicios
            </a>

            <a href="#galeria" className="hover:text-green-700">
              Galería
            </a>

            <a href="#contacto" className="hover:text-green-700">
              Contacto
            </a>

          </nav>

          <a
            href="https://www.airbnb.mx/rooms/797821080227684492"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-800 transition"
          >
            Reservar
          </a>

        </div>

      </div>
    </header>
  );
}