import './App.css';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Overview from './components/Pages/Overview/Overview';
import Docs from './components/Pages/Docs/Docs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path='/' element={<Overview/>}/> 
        <Route path='/Docs' element={<Docs/>}/> 
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
