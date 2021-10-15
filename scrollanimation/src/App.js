import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './App.css';

function App() {
  useEffect(() => {
    Aos.init({})
  })
  return (
    <div className="wrapper">
      <div className="area">FIRST</div>
      
      <div className="area">SECOND</div>
      
      <div className="area" data-aos="fade-in">THIRD</div>
      
      <div className="area" data-aos="fade-left">FOURTH</div>
    </div>
  );
}

export default App;
