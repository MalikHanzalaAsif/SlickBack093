import './App.css';
import Content from './Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Layout from './Layout';
import ScrollOnTop from './utils/ScrollOnTop';
import AboutUs from './pages/AboutUs';
import Shop from './pages/shop';

function App() {
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
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
