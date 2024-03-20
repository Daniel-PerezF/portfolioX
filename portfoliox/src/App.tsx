import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { DarkModeProvider } from "./context/DarkModeContext";
import { Nav } from "./components";
import LinksPage from "./pages/LinksPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LinksPage" element={<LinksPage />} />
        </Routes>
        <Footer />
      </DarkModeProvider>
    </>
  );
}

export default App;
