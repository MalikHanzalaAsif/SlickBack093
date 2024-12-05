import './App.css';
import Content from './Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Layout from './Layout';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App;
