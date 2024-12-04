import { useState } from 'react'
import './Novidades.css'

function Novidades() {
  return (
    <novidades>
      <section className='textosEsquerda'>
        <p>PREPARAÇÃO</p>
        <p>Níveis de torra</p>
        <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
        <button className='botaoVerde'>SAIBA MAIS</button>
      </section>
      <img src="public/imagemCafe.svg"/>
    </novidades>
  )
}

export default Novidades