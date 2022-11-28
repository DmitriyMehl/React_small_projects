import React, { useContext } from 'react'
import { Context } from '../../context'
import s from "./index.module.css"

export default function Product({ id, title, price, country }) {

  const { delete_frut } = useContext(Context);

  return (
    <div className={s.product_card} onDoubleClick={() => delete_frut(id)} >
        <p>Title : {title}</p>
        <p>Price : {price}</p>
        <p>Country : {country}</p>
    </div>
  )
}
