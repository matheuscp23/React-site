import React from 'react'
import styles from "./menuLink.module.css"
import { Link, useLocation } from 'react-router-dom';

function MenuLink({to, text}) {
    const localizacao = useLocation();
  return (
    <Link className={`${styles.link} ${localizacao.pathname === to ? styles.linkActive : " "}`}to={to} >
        {text}
    </Link>
  
  )
}

export default MenuLink