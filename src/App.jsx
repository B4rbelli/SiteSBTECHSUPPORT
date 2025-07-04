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
import CookieConsent from "./components/CookieConsent";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
        <ParticleBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>

      {/* Gerenciamento de Cookies (LGPD/GPDR) */}
      <CookieConsent />
    </BrowserRouter>
  );
};

export default App;
