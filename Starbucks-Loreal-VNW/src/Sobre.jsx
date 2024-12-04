import { useState } from 'react'
import './Sobre.css'

function Sobre() {
  return (
    <sobre>
      <img src="src/assets/imagemLoja.svg"/>
      <section className='textosDireita'>
        <p>PREPARAÇÃO</p>
        <p>Níveis de torra</p>
        <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
        <button className='botaoVerde'>SAIBA MAIS</button>
      </section>
    </sobre>
  )
}

export default Sobre