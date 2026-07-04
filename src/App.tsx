// import Home from "./components/Home";
import { useEffect } from "react";
import "./App.css";
import Homev from "./components/Homev";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  return (
    <>
      <Homev />
    </>
  );
}

export default App;
