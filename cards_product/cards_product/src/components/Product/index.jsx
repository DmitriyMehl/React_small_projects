import React, { useContext } from 'react'
import s from "./index.module.css"
import { Context } from '../../context'

export default function Product({ title, price, country }) {
  return (
    <div className={s.product_card} >
        <p>Title : {title}</p>
        <p>Price : {price}</p>
        <p>Country : {country}</p>
    </div>
  )
}
