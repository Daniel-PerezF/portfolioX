import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { DarkModeProvider } from "./context/DarkModeContext";
import LinksPage from "./pages/LinksPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </DarkModeProvider>
    </>
  );
}

export default App;
