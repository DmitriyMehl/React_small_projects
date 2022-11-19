import React, { useContext } from 'react'
import { Context } from '../../../context';

export default function AddProductVegetables() {

    const { add_cards_v } = useContext(Context);

    const submit = event => {
        event.preventDefault();
        const { title, price, country } = event.target;

        add_cards_v(
            title.value, 
            price.value, 
            country.value);

        title.value = "";
        price.value = "";
        country.value = "";
    }

  return (
    <form onSubmit={submit} >
        <input type="text" name='title' placeholder='Title' />
        <input type="text" name='price' placeholder='Price' />
        <input type="text" name='country' placeholder='Country' />
        <button>Add product</button>
    </form>
  )
}
