import About from '../About/About';
import Contact from '../Contact/Contact';
import { useEffect, useState } from 'react';
import Hero from '../../shared/components/hero/Hero';
import Speakers from '../../shared/components/speakers/Speakers';
import { useNavigate } from 'react-router';
import Registercta from '../../shared/Register_cta/registercta';

export default function Home() {
  const [count, setCount] = useState(0);
  const finalCount = 1000; // You can modify this as needed

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < finalCount) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return finalCount;
        }
      });
    }, 1);

    return () => clearInterval(interval); 
  }, [finalCount]);

  const navigate = useNavigate();
  
    const handleRegisterClick = () => {
      window.scrollTo(0, 0);
      // Redirect to Submit Paper page
      navigate('/author/new_paper_submission'); // Adjust this path based on your routing
    };

  return (
    <div className="flex flex-col">
     <Hero props={count} handleRegisterClick = {handleRegisterClick}/>
      <About />
      <Speakers />
      <Registercta handleRegisterClick = {handleRegisterClick}/>
      <Contact />
    </div>
  );
}
