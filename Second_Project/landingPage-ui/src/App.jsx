// import { useState } from 'react'
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import DestinationsSection from "./components/DestinationsSection";
import StepsAndTestimonials from "./components/StepsAndTestimonials";
import AirlineLogos from './components/AirlineLogos';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/Footer';
import HeroWithNavbar from './components/HeroWithNavbar';
import './App.css'

function App() {
 return (
  <>
    {/* <Navbar />
    <Hero /> */}
    <HeroWithNavbar/>
    <ServicesSection />
    <DestinationsSection />
    <StepsAndTestimonials />
    <AirlineLogos />
    <SubscribeSection />
    <Footer />
  </>
 );
}

export default App;
