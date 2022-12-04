import { words } from "../data/index";
import { useState, useEffect } from "react";
import CardsContainer from "../CardsContainer";
import Form from "../Form";
import { Context } from "../../context"
import Triggers from "../Triggers";

function App() {

  const [card, setCards] = useState(words);

  useEffect(() => {
    const raw = JSON.parse(localStorage.getItem("card"));
    setCards(raw)
  }, []);

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(card));
  }, [card]);

  const change_to_rus = () => {
    setCards(
      card.map(el => {
        el.lang = "rus";
        return el;
      })
    )
  }

  const change_to_de = () => {
    setCards(
      card.map(el => {
        el.lang = "de";
        return el;
      })
    )
  }

  const add_card = (de, rus) => setCards ([
    ...card,
    {
      id: Date.now(),
      de,
      rus,
      lang: "de"
    }
  ]);

  const change_lang = (id) => {
    setCards(card.map(el => {
      if(el.id === id){
        el.lang = el.lang === "rus" ? "de" : "rus"
      }
      return el;
    }))
  }

  const delete_card = id => setCards(card.filter(el => el.id !== id));

  return (
    <div>
      <Context.Provider value={{ card, add_card, change_lang, change_to_rus, change_to_de, delete_card }}>
        <Form />
        <CardsContainer />
        <Triggers />
      </Context.Provider>

    </div>
  );
}

export default App;
