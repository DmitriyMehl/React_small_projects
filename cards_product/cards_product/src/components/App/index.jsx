import { Routes, Route } from "react-router-dom"
import { Context } from "../../context"
import FruitsPage from "../../pages/FruitsPage";
import VegetablesPage from "../../pages/VegetablesPage";
import NavMenu from "../NavMenu";
import { fruits } from "../../data/fruits"
import { vegetables } from "../../data/vegetables";
import { useState, useEffect } from "react";

function App() {

  const [ vegCards, setVegCards ] = useState(vegetables);
  const [ frutCards, setFrutCards ] = useState(fruits);

  useEffect(() => {
    const veg = JSON.parse(localStorage.getItem("vegCards"));
    const frut = JSON.parse(localStorage.getItem("frutCards"));
    setVegCards(veg);
    setFrutCards(frut);
  }, []);

  useEffect(() => {
    localStorage.setItem("vegCards", JSON.stringify(vegCards));
    localStorage.setItem("frutCards", JSON.stringify(frutCards));
  }, [vegCards, frutCards]);

  const add_veg_cards = (title, price, country) => setVegCards ([
    ...vegCards,
    {
      id: Date.now(),
      title,
      price,
      country
    }
  ]);

  const add_frut_cards = (title, price, country) => setFrutCards ([
    ...frutCards,
    {
      id: Date.now(),
      title,
      price,
      country
    }
  ]);

  const delete_veg = (id) => setVegCards(vegCards.filter(el => el.id !== id));
  const delete_frut = (id) => setFrutCards(frutCards.filter(el => el.id !== id));

  return (
    <div>
      <Context.Provider value={{ vegCards, frutCards, add_veg_cards, add_frut_cards, delete_veg, delete_frut }}>
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
