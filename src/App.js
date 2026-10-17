import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Signal from './components/Signal';
import Changelog from './components/Changelog';
import Services from './components/Services';
import Stack from './components/Stack';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollState from './hooks/useScrollState';
import { sections } from './content';

const sectionIds = sections.map((s) => s.id);

export default function App() {
  const { progress, active } = useScrollState(sectionIds);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav active={active} progress={progress} />
      <main id="main">
        <Hero />
        <Signal />
        <Changelog />
        <Services />
        <Stack />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
