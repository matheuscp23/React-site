import React from 'react'
import styles from './AboutMe.module.css'
import PostModelo from '../../componentes/PostModelo'
import fotoCapa from '../../assets/sobre_mim_capa.png'
function AboutMe() {
  return (
    <PostModelo
    fotoCapa={fotoCapa}
    titulo={'Sobre mim'}
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Matheus!
      </h3>
      <img 
        src="https://github.com/matheuscp23.png" 
        alt="foto github matheus"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Olá, meu nome é Matheus, tenho 23 anos e sou estudante de Análise e Desenvolvimento de Sistemas na renomada instituição Presbiteriana Mackenzie, localizada em São Paulo. Minha trajetória até aqui foi marcada por uma busca determinada por encontrar meu verdadeiro caminho profissional. Desde cedo, senti-me atraído pelo campo da tecnologia, mas inicialmente explorei outras áreas através de cursos diversos, buscando descobrir onde minha paixão se encontrava. No entanto, nenhum desses caminhos ressoou comigo como a programação.
      </p>
      <p className={styles.paragrafo}>
        O momento decisivo veio quando me deparei com a crescente demanda por profissionais capacitados em tecnologia. Foi então que percebi não apenas a relevância, mas também o potencial transformador da programação. A alta procura no mercado e as oportunidades de crescimento foram fatores determinantes que me motivaram a mergulhar de cabeça neste campo promissor.
      </p>
      <p className={styles.paragrafo}>
        Atualmente, estou dando meus primeiros passos como estagiário, onde tenho a oportunidade não apenas de aplicar os conhecimentos teóricos adquiridos na Mackenzie, mas também de adquirir experiência prática crucial para o meu desenvolvimento profissional. Meu foco está voltado especialmente para o estudo aprofundado de JavaScript e o desenvolvimento de aplicações utilizando a biblioteca React.
      </p>
      <p className={styles.paragrafo}>
        A decisão de estudar na Mackenzie foi natural, dada sua reputação excepcional e seu compromisso com a excelência acadêmica. Aqui, tenho tido acesso não apenas ao conhecimento teórico, mas também a uma abordagem prática e atualizada das tendências e tecnologias emergentes. Além disso, complemento minha formação com cursos especializados na plataforma Alura, buscando sempre aprimorar minhas habilidades e me manter competitivo no mercado.
      </p>
      <p className={styles.paragrafo}>
        Cada dia de estudo e prática me desafia a expandir meus horizontes, não apenas em termos de habilidades técnicas, mas também em capacidade de análise crítica e resolução de problemas complexos. A programação não é apenas uma profissão para mim, é uma verdadeira vocação, onde encontro um equilíbrio perfeito entre criatividade e lógica, inovação e solução de problemas.
      </p>
      <p className={styles.paragrafo}>
        Meu objetivo é não apenas ser um profissional competente, mas também fazer contribuições significativas para o avanço da tecnologia e para a criação de soluções que impactem positivamente a sociedade. Estou entusiasmado com as possibilidades infinitas que a programação oferece e comprometido em alcançar todo o meu potencial nesta área dinâmica e desafiadora.
      </p>
      <p className={styles.paragrafo}>
      Assim, cada linha de código que escrevo representa não apenas um passo na construção de aplicações, mas também um marco na minha jornada pessoal e profissional. Estou ansioso pelo que o futuro reserva e determinado a fazer a diferença no mundo da tecnologia.
      </p>
    </PostModelo>
  )
}

export default AboutMe