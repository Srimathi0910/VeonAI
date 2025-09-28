import { useEffect } from 'react'; // <-- add useEffect
import './App.css';
import Header from './Header.jsx';
import About from './About.jsx';
import Solutions from './Solutions.jsx';
import Features from './Features.jsx';
import Price from './Price.jsx';
import Testimonial from './Testimonial.jsx';
import Getstarted from './Getstarted.jsx';
import Footer from './Footer.jsx';

function App() {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <Header/>
      <About/>
      <Solutions/>
      <Features/>
      <Price/>
      <Testimonial/>
      <Getstarted/>
      <Footer/>
    </>
  );
}

export default App;
