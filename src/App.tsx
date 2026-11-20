import { useState } from "react";
import LandingPage from "./components/LandingPage";
import ProductSelection from "./components/ProductSelection";

function App() {
  const [started, setStarted] = useState<boolean>(false);

  return started ? (
    <ProductSelection />
  ) : (
    <LandingPage onGetStarted={() => setStarted(true)} />
  );
}

export default App;