import React, { useContext } from 'react'
import s from "./index.module.css"
import { Context } from '../../context';

export default function Form() {

  const { add_card } = useContext(Context);

  const submit = e => {
      e.preventDefault();
      const {rus, de} = e.target;
      add_card(de.value, rus.value);
      rus.value = "";
      de.value = "";
  }

  return (
    <form className={s.form} onSubmit={submit}>
        <input type="text" placeholder="Russisch" name="rus" />
        <input type="text" placeholder="Deutsche" name="de" />
        <button>Add</button>
    </form>
  )
}
