import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
function App() {
  return (
    <>
      <div className="flex flex-col justify-between">
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
