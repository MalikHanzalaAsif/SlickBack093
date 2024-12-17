import './App.css';
import Content from './Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Layout from './Layout';
import ScrollOnTop from './utils/ScrollOnTop';
import AboutUs from './pages/AboutUs';
import Shop from './pages/shop';
import Tshirts from './pages/Tshirts';
import Trousers from './pages/Trousers';
import Hoodies from './pages/Hoodies';
import Accessories from './pages/Accessories';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true, // The animation will only occur once
      });
    }, []);

  return (
    <>
      <Router>
        <ScrollOnTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Content />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />}/>
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/tshirts" element={<Tshirts />}/>
            <Route path="/shop/trousers" element={<Trousers />}/>
            <Route path="/shop/hoodies" element={<Hoodies />}/>
            <Route path="/shop/accessories" element={<Accessories />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
