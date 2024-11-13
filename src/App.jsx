import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./Pages/Home.jsx";
import Services from "./Pages/Services.jsx";

import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Testimonials from "./Pages/Testimonials.jsx";
import WhyChooseUs from "./Pages/WhyChooseUs.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Have from "./Pages/Have.jsx";

function App() {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<ContactForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Have" element={<Have />} />
        <Route path="/Footer" element={<Footer />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;