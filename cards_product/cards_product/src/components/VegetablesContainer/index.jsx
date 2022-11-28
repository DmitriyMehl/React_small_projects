import React, { useContext } from 'react'
import { Context } from '../../context'
import Vegetable from '../Vegetable';
import s from "./index.module.css"

export default function VegetablesContainer() {

    const { vegCards } = useContext(Context);

  return (
    <div className={s.v_container}>
        {
            vegCards
              .sort((a ,b) => a.price - b.price)
              .map(el => <Vegetable key={el.id} {...el} />)
        }
    </div>
  )
}