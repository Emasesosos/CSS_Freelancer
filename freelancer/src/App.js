import React, { Fragment } from 'react';
import Hero from './components/Hero/Hero';
import Servicios from './components/Servicios/Servicios';
import Portafolio from './components/Section/Portafolio';
import './css/fontawesome-all.min.css';
import './css/app.css';

function App() {
  return (
    <Fragment>
      <Hero/>
      <Servicios/>
      <Portafolio/>
    </Fragment>
  );
}

export default App;
