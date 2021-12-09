import './App.css';
import { Routes, Route} from 'react-router';
import Header from "./components/sections/Header";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Portfoliopage from './Portfoliopage';


function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route element= {<div> 
        <Header />
        <Home />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact /> </div>} path = "/"/>
        <Route element = {<Portfoliopage/>} path = "/Portfoliopage"/>
      </Routes>
    </div>
  );
}

export default App;
