import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ListItems from "./components/ListItems";
import About from "./components/About";
import Services from "./components/Services";
import ServiceCards from "./components/ServiceCards";
import BookAnAppointment from "./components/BookAnAppointment";
import LocationMap from "./components/LocationMap"
import DoctorReviews from "./components/DoctorReviews";
import Footer from "./components/Footer";
import DoctorArticles from "./components/DoctorArticles";


function App() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F2F7FF]">
        <Hero />
        <ListItems />
      </div>

      <About />

      <div className="bg-[#F2F7FF]">
        <Services />
        <ServiceCards />
      </div>
      <LocationMap/>
      <BookAnAppointment />
      <DoctorArticles/>
      <DoctorReviews/>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
