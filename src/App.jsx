import { BrowserRouter } from "react-router-dom";
import { 
  Navbar, 
  Hero, 
  About, 
  Skills,  
  Experience, 
  Contact, 
  Footer,
  ParticleBackground 
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
        <ParticleBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;