import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ListItems from "./components/ListItems";
import About from "./components/About";
import Services from "./components/Services";
import ServiceCards from "./components/ServiceCards";
import BookAnAppointment from "./components/BookAnAppointment";
import LocationMap from "./components/LocationMap";
import DoctorReviews from "./components/DoctorReviews";
import Footer from "./components/Footer";
import DoctorArticles from "./components/DoctorArticles";
import AdditionalServices from "./components/AdditionalServices";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Contenedor principal con margen */}
        <div className="container mx-auto px-4 py-6">
          {/* Secciones con fondo claro */}
          <Hero />
          <ListItems />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Sección de información */}
        <About />
      </div>

      <div className="bg-white min-h-screen">
        {/* Secciones de servicios con fondo */}
        <div className="container mx-auto px-4 py-6">
          <Services />
          <ServiceCards />
          <AdditionalServices/>
        </div>
      </div>

      <div className="bg-white container mx-auto px-4 py-6">
        {/* Mapas, citas y más contenido */}
        <BookAnAppointment />
        <DoctorArticles />
        <LocationMap />
        <DoctorReviews />
        
      </div>

      <Footer />
    </>
  );
}

export default App;
