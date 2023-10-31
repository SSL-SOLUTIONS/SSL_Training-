import { Navigate } from 'react-router-dom';
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

import InformationCollection from './Pages/PrivacyPolicyPages/InformationCollection'
import InformationUsage from './Pages/PrivacyPolicyPages/InformationUsage'

import Category1 from './Pages/BlogCategory/Category1'
import Category2 from './Pages/BlogCategory/Category2'
import Category3 from './Pages/BlogCategory/Category3'
import Uncategorized from './Pages/BlogCategory/Uncategorized'
import SignUp from './SignUp/SignUp';


function App() {
  return (
    <>
      <div className='main'>

        <Router>
          <Routes>
          <Route path='navbar' element={<Navbar />} />
            <Route path='/' element={<Swift_Hiring />} />
            <Route path='/about' element={<About />} />
            
            <Route path='/blog' element={<Blog />} />
            
            <Route path='/pricing' element={<Pricing />} />

            <Route path='/privacy' element={<Privacy />} />
            
            <Route path='/contact' element={<Contact />} />
            <Route path='/InformationCollection' element={<InformationCollection />} />
            <Route path='/InformationUsage' element={<InformationUsage />} />
            <Route path='/Category1' element={<Category1 />} />
            <Route path='/Category2' element={<Category2 />} />
            <Route path='/Category3' element={<Category3 />} />
            <Route path='/Uncategorized' element={<Uncategorized />} />
            <Route path='/Footer' element={<Footer />} />
            <Route path='/Signup' element={<SignUp />} />
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
