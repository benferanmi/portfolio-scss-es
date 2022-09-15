import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Layout from './component/Layout/index.js';
import About from './component/About/index.js';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
    </Routes>
    </> 
  ) 
};

export default App;