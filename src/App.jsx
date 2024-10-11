import Have from "./Pages/Have.jsx";
import Header from "./components/Header.jsx";
import Home from "./Pages/Home.jsx";
import WhyChooseUs from "./Pages/WhyChooseUs.jsx";
import Services from "./Pages/Services.jsx";
import Testimonials from "./Pages/Testimonials.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <>
      <div className="flex flex-col justify-between">
        <Header />
        <Home />
        <Have />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
