import React, { useContext } from 'react'
import { Context } from '../../context'
import Product from '../Product';
import s from "./index.module.css"

export default function VegetablesContainer() {

    const { v_cards } = useContext(Context);

  return (
    <div className={s.v_container}>
        {
            v_cards.map(el => <Product key={el.id} {...el} />)
        }
    </div>
  )
}