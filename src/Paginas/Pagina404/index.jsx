import React from 'react'
import styles from "./Pagina404.module.css"
import erro404 from '../../assets/erro_404.png'
import BotaoPrincipal from '../../componentes/BotaoPrincipal'
import { useNavigate } from 'react-router-dom'
function PagErro() {
  const navigate = useNavigate()
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>
          Ops ! Página não encontrada.
        </h1>
        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde um instante e recarregue a página, ou volte para a página inicial.
        </p>
        <div onClick={()=>navigate(-1)} className={styles.botaoContainer}>
          <BotaoPrincipal texto={"Voltar"} tamanho='lg'/>
        </div>
        <img 
          className={styles.imagemCachorro} 
          src={erro404} 
          alt="imagem de um cachorro"
        />
      </div>
      <div className={styles.espacoEmBranco}>
      </div>
    </>
    

  )
}

export default PagErro