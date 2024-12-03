import { useState } from 'react'
import './Home.css'

function Home() {
  return (
    <home>
      <section className='ladoEsquerdo'>
        <section className='informacoes'>
          <h1>Mais que Café</h1>
          <h1>Isso é <span>Starbucks</span></h1>
          <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
          <button>SAIBA MAIS</button>
        </section>
        <section className='exemploBebidaPequena'>
          <button><img src="src/assets/laranjaMenor.svg"/></button>
          <button><img src="src/assets/vermelhoMenor.svg"/></button>
          <button><img src="src/assets/amareloMenor.svg"/></button>
        </section>
      </section>
      <section className='ladoDireito' >
        <img className='exemploBebidaGrande' src="src/assets/laranjaMaior.svg"/>
        <div className='esfera'></div>
      </section>

    </home>
  )
}

export default Home
