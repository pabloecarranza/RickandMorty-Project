import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import CharacterDetail from "./components/CharacterDetail";
import CreateCharacter from "./components/CreateCharacter";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
      <Route path="/newcharacter" element={<CreateCharacter />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

/* 



*/
