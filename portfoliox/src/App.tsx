import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { DarkModeProvider } from "./context/DarkModeContext";
import { Footer } from "./components/Footer";
import { LinksProvider } from "./context/LinksContext";

function App() {
  return (
    <div className="min-w-[340px]">
      <DarkModeProvider>
        <LinksProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
          <Footer />
        </LinksProvider>
      </DarkModeProvider>
    </div>
  );
}

export default App;
