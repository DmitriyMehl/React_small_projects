import { Routes, Route } from "react-router-dom"
import { Context } from "../../context"
import FruitsPage from "../../pages/FruitsPage";
import VegetablesPage from "../../pages/VegetablesPage";
import NavMenu from "../NavMenu";

function App() {
  return (
    <div>
      <Context.Provider>
        <NavMenu />
          <Routes>
            <Route path="/fruits_page" element={<FruitsPage />} />
            <Route path="/vegetables_page" element={<VegetablesPage />} />
          </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
