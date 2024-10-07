import Contact from './pages/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="pt-24"></div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
