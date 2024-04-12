import "./App.css";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
    </div>
  );
}

export default App;
