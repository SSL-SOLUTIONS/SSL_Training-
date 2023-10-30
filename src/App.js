import {Navigate} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import './Components/css/navbar.css';
import Swift_Hiring from './Bottom_Section/Swift_Hiring';
import './Bottom_Section/css/swift_hiring.css';
import Footer from './Components/Footer';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Pricing from './Pages/Pricing.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Privacy from './Pages/Privacy';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <div className='main'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/' element={<Swift_Hiring />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
