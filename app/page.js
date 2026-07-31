import Alojamiento from "./components/Alojamiento";
import Footer from "./components/Footer";
import Galeria from "./components/Galeria";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Nosotros />
      <Servicios />
      <Alojamiento /> 
      <Galeria />
      <Footer />
    </>
  );
}