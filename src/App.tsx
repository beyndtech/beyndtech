import Header from "./sections/Header";
import Benefits from "./sections/Benifits";
import Collaboration from "./sections/Collaboration";
import Services from "./sections/Services";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Roadmap from "./sections/Roadmap";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Contact />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
