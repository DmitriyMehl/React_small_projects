import React, { useContext } from 'react'
import { Context } from '../../../context';
import s from "./index.module.css"

export default function AddProductVegetables() {

    const { add_veg_cards } = useContext(Context);

    const submit = event => {
        event.preventDefault();
        const { title, price, country } = event.target;

        add_veg_cards(
            title.value, 
            price.value, 
            country.value);

        title.value = "";
        price.value = "";
        country.value = "";
    }

  return (
    <form onSubmit={submit} className={s.form} >
        <input type="text" name='title' placeholder='Title' />
        <input type="text" name='price' placeholder='Price' />
        <input type="text" name='country' placeholder='Country' />
        <button>Add product</button>
    </form>
  )
}
