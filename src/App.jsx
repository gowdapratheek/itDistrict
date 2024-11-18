import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./Pages/Home.jsx";

import Footer from "./components/Footer.jsx";

function App() {
  return (
      <div className="flex flex-col justify-between">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;