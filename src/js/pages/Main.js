import React from 'preact-compat';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import About from '../components/About';
import DevStack from '../components/DevStack';
import ProjectCards from '../components/ProjectCards';
import WorkHistory from '../components/WorkHistory';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MovieFinder from '../components/MovieFinder';
import WeatherApp from '../components/WeatherApp';
import PitchPortal from '../components/PitchPortal';

const Main = () => (
  <div>
    <Navigation />
    <Header />
    <main>
      <About />
      <DevStack />
      <ProjectCards />
      <WorkHistory />
      <Contact />
    </main>
    <Footer />
    {/**** Project Popups ****/}
    <MovieFinder />
    <WeatherApp />
    <PitchPortal />
  </div>
);

export default Main;
