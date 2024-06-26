import React from 'react'
import styles from './menu.module.css'
import MenuLink from '../MenuLink'
function Menu() {
  
  return (
    <header>
        <nav className={styles.navegacao}>
           <MenuLink to={'/'} text={'Home'}/>
           <MenuLink to={'/sobremim'} text={'Sobre mim'}/>
        </nav>
    </header>
  )
}

export default Menu