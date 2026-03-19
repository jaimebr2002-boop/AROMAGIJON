/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import VisitUs from './components/VisitUs';
import Reserve from './components/Reserve';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-blanco-roto selection:bg-dorado/30 selection:text-verde-profundo">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <VisitUs />
        <Reserve />
      </main>
      <Footer />
    </div>
  );
}
