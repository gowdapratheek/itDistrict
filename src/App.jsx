import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./Pages/Home.jsx";

import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";

function App() {
  return (
      <div className="flex flex-col justify-between">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;