import BlueShadow from "./components/BlueShadow";
import BrownShadow from "./components/BrownShadow";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Subscribe from "./pages/Subscribe";
import Testimonials from "./pages/Testimonials";

const App = () => {
  return (
    <main>
      <Home />
      <BrownShadow />
      <About />
      <Services />
      <BlueShadow />
      <Testimonials />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default App;
