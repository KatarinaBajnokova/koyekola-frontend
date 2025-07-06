import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import MiniJeux from "@/pages/MiniJeux";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jeux" element={<MiniJeux />} />
    </Routes>
  );
}

export default App;
