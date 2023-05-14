import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Stars,
  Skills,
  Footer,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Stars />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Works />
        <div className='relative z-0'>
          <Skills />
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;