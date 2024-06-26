import React from 'react'
import styles from './Rodape.module.css'
import {ReactComponent as MarcaRegistrada} from '../../assets/marca_registrada.svg'
function Rodape() {
  return (
    <footer className={styles.rodape}>
        <MarcaRegistrada/>
        Desenvolvido por <a href="https://github.com/matheuscp23?tab=repositories">Matheus.</a>
    </footer>
  )
}

export default Rodape