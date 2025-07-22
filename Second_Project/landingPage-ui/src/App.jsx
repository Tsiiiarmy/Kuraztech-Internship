// import { useState } from 'react'
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import DestinationsSection from "./components/DestinationsSection";
import './App.css'

function App() {
 return (
  <>
    <Navbar />
    <Hero />
    <ServicesSection />
    <DestinationsSection />
  </>
 );
}

export default App;
