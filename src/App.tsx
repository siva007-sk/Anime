import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AnimeDetails from "./components/AnimeDetails";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="animeDetails/:animeId" element={<AnimeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
