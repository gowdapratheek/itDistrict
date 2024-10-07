import Have from "./components/Have.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
function App() {
  return (
    <>
      <div className="flex flex-col justify-between">
        <Header />
        <Home />
        <Have />
      </div>
    </>
  );
}

export default App;
