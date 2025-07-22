import React from 'react';
import axon from '../assets/axon.png';
import jetstar from '../assets/jetstar.png';
import expedia from '../assets/expedia.png';
import qantas from '../assets/qantas.png';
import alitalia from '../assets/alitalia.png';

const AirlineLogos = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-20 py-30">
      <img src={axon} alt="Axon" className="h-35 object-contain" />
      <img src={jetstar} alt="Jetstar" className="h-35 object-contain" />
      <img src={expedia} alt="Expedia" className="h-35 object-contain drop-shadow-md" />
      <img src={qantas} alt="Qantas" className="h-8 object-contain" />
      <img src={alitalia} alt="Alitalia" className="h-8 object-contain" />
    </div>
  );
};

export default AirlineLogos;
