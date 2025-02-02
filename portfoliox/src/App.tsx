import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import Home from "./pages";
import { DarkModeProvider, LinksProvider } from "./context";

function App() {
  return (
    <div className="min-w-[340px]">
      <DarkModeProvider>
        <LinksProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </LinksProvider>
      </DarkModeProvider>
    </div>
  );
}

export default App;
