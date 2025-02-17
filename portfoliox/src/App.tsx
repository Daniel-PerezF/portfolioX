import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import Home from "./pages";
import { DarkModeProvider, LinksProvider } from "./context";
import TsParticles from "./components/Particles";

function App() {
  return (
    <div className="min-w-[340px]">
      <DarkModeProvider>
        <LinksProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <TsParticles />
          <Footer />
        </LinksProvider>
      </DarkModeProvider>
    </div>
  );
}

export default App;
