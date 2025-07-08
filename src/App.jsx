import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home/Home";
import MiniJeux from "@/pages/minijeux/MiniJeux";
import Categories from "@/pages/categories/Categories";
import GameIntroPage from "@/pages/game/GameIntroPage";
import GameLauncher from "@/pages/game/GameLauncher";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jeux" element={<MiniJeux />} />
      <Route path="/categories/:game" element={<Categories />} />
      <Route path="/:game/:category/intro" element={<GameIntroPage />} />
      <Route path="/:game/:category" element={<GameLauncher />} />
    </Routes>
  );
}

export default App;
