import React, { useContext } from 'react'
import { Context } from '../../context'
import Product from '../Product';
import s from "./index.module.css"

export default function VegetablesContainer() {

    const { sort_vegetables } = useContext(Context);

  return (
    <div className={s.v_container}>
        {
            sort_vegetables.map(el => <Product key={el.id} {...el} />)
        }
    </div>
  )
}