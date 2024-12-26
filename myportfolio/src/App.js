import React from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Services from './components/services/services';
import Projects from './components/projects/projects';
import Testimonials from './components/testimonials/testimonials';

const App = () =>{
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
