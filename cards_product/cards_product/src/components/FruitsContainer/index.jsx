import React, { useContext } from 'react'
import { Context } from '../../context'
import Product from '../Product';
import s from "./index.module.css"

export default function FruitsContainer() {

    const { sort_fruits } = useContext(Context);

  return (
    <div className={s.f_container}>
        {
            sort_fruits.map(el => <Product key={el.id} {...el} />)
        }
    </div>
  )
}