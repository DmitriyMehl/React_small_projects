import React, { useContext } from 'react'
import s from "./index.module.css"
import { Context } from '../../context';

export default function CardItem({id, de, rus, lang }) {

    const { change_lang, delete_card } = useContext(Context);

    const text = lang === "rus" ? rus : de;

    const card_style = {
        color: lang === "de" ? "#99e6ed" : "white",
        background: lang === "de" ? "-webkit-linear-gradient(90deg, #41a8bf,#a044c1,#6f1fbf)" : "-webkit-linear-gradient(90deg, #6f1684,#5b0b98,#53afba)"
    }

  return (
    <div 
        className={s.card} 
        style={card_style} 
        onClick={() => change_lang(id)} 
        onDoubleClick={() => delete_card(id)} >
        {text}
    </div>
  )
}
