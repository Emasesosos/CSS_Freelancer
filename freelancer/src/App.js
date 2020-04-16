import React, { Fragment } from 'react';
import Hero from './components/Hero/Hero';
import Servicios from './components/Servicios/Servicios';
import Portafolios from './components/Section/Portafolios';
import Footer from './components/Footer/Footer';
import './css/fontawesome-all.min.css';
import './css/app.css';

function App() {

  return (
    <Fragment>
      <Hero/>
      <Servicios/>
      <Portafolios/>
      <Footer/>
    </Fragment>
  );
}

export default App;
