import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { DarkModeProvider } from "./context/DarkModeContext";
import { Footer } from "./components/Footer";
import { LinksProvider } from "./context/LinksContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <LinksProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
          <Footer />
        </LinksProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
