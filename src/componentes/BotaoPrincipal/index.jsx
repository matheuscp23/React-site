import React from 'react'
import styles from './BotaoPrincipal.module.css'
function BotaoPrincipal({ texto, tamanho }) {
  return (
    <button className={`
    ${styles.botaoLer}
    ${styles[tamanho]}
    `}>{texto}</button>
  )
}

export default BotaoPrincipal