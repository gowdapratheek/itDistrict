import Have from "./components/Have.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
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
      </div>
    </>
  );
}

export default App;
