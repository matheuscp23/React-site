import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'

function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá, Mundo!
            </h1>
            <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Matheus Campos Penteado tenho 23 anos e sou estudante de Análise e Desenvolvimento de Sistemas na instituição Presbiteriana Mackenzie de São Paulo.
            </p>
        </div>
        <div className={styles.imagens}>
            <img className={styles.circuloColorido} src={circuloColorido} alt="algum circulo colorido" aria-hidden={true}/>
            <img className={styles.minhaFoto} src='https://github.com/matheuscp23.png' alt="foto do matheus" />
        </div>
    </div>
  )
}

export default Banner