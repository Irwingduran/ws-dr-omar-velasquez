import React from "react";
import Navbar from "./components/Navbar";
import Trajectory from "./components/Trajectory";
import Service from "./components/Service";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import DoctorProfile from "./components/DoctorProfile";
import AboutSection from "./components/AboutSection";
import KeyDifferentiators from "./components/KeyDifferentiators";
import AppointmentBanner from "./components/AppointmentBanner";
import Reviews from "./components/Reviews";
import MedicalStats from "./components/MedicalStats";
import Associations from "./components/Associations";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <DoctorProfile />
        </div>

        <div id="about">
          <AboutSection/>
          
        </div>
        <div id="services">
        <Service />
        <MedicalStats />
        <AppointmentBanner/>
        <KeyDifferentiators/>
        </div>

        <div>
          
          <Trajectory />
        </div>

        
        <div id="blog">
   
          <Blog />
        </div>
     
        <div>
        <Reviews/>
       </div>
       <div>
          <Associations/>
        </div>
       {/*  */}

      </main>

      <Footer />
    </div>
  );
};

export default App;
