import React, {useContext} from 'react'
import { Context } from '../../context'
import s from "./index.module.css"

export default function Product({ id, title, price, country }) {

  const { delete_veg } = useContext(Context);

  return (
    <div className={s.product_card} onDoubleClick={() => delete_veg(id)} >
        <p>Title : {title}</p>
        <p>Price : {price}</p>
        <p>Country : {country}</p>
    </div>
  )
}
