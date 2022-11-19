import { Routes, Route } from "react-router-dom"
import { Context } from "../../context"
import FruitsPage from "../../pages/FruitsPage";
import VegetablesPage from "../../pages/VegetablesPage";
import NavMenu from "../NavMenu";
import { vegetables, fruits } from "../../data/products"
import { useState } from "react";

function App() {

  const [ v_cards, setCardsV ] = useState(vegetables);
  const [ f_cards, setCardsF ] = useState(fruits);

  const add_cards_v = (title, price, country) => setCardsV ([
    ...v_cards,
    {
      id: Date.now(),
      title,
      price,
      country
    }
  ]);

  const add_cards_f = (title, price, country) => setCardsF ([
    ...f_cards,
    {
      id: Date.now(),
      title,
      price,
      country
    }
  ]);

  return (
    <div>
      <Context.Provider value={{ f_cards, v_cards, add_cards_v, add_cards_f }}>
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
