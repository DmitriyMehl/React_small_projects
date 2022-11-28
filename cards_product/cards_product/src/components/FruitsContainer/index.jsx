import React, { useContext } from 'react'
import { Context } from '../../context'
import Fruit from '../Fruit';
import s from "./index.module.css"

export default function FruitsContainer() {

    const { frutCards } = useContext(Context);

  return (
    <div className={s.f_container}>
        {
            frutCards
              .sort((a ,b) => a.price - b.price)
              .map(el => <Fruit key={el.id} {...el} />)
        }
    </div>
  )
}