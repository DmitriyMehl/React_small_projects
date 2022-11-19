import React from 'react'
import { Link } from 'react-router-dom'
import s from "./index.module.css"

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
        <Link className={s.link} to="/fruits_page">Fruits</Link>
        <Link to="/vegetables_page">Vegetables</Link>
    </div>
  )
}
