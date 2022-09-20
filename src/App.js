import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Layout from './component/Layout/index.js';
import About from './component/About/index.js';
import AllAnimationJs from './cssAnimations/AllCss';
import Contact from './component/Contact/Contact';
import { ContactUs } from './component/Contact/contactcopy';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='animation' element={<AllAnimationJs />} />
      <Route path='contact' element={<Contact />} />
      <Route path='contact1' element={<ContactUs />} />

    </Routes>
    </> 
  ) 
};

export default App;