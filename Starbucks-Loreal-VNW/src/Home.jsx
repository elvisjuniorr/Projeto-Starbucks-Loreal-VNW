import { useState } from 'react'
import './Home.css'

function Home() {

  const [imagemCopo,setImagemCopo] = useState ("laranja");

  function definirImagemCopo(cor) {
    switch (cor) {
      case 'laranja':
        setImagemCopo ('laranja');
        return;
      case 'vermelho':
        setImagemCopo ('vermelho');
        return;
      case 'amarelo':
        setImagemCopo ('amarelo');
        return;
    }
  }

  return (
    <home>
      <section className='ladoEsquerdo'>
        <section className='informacoes'>
          <p>Mais que Café</p>
          <p>Isso é <span>Starbucks</span></p>
          <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
          <button className='botaoVerde'>SAIBA MAIS</button>
        </section>
        <section className='exemploBebidaPequena'>
          <button onClick={ () => definirImagemCopo("laranja")}><img src="/laranjaMenor.svg"/></button>
          <button onClick={ () => definirImagemCopo("vermelho")}><img src="/vermelhoMenor.svg"/></button>
          <button onClick={ () => definirImagemCopo("amarelo")}><img src="/amareloMenor.svg"/></button>
        </section>
      </section>
      {imagemCopo == "laranja" && (
        <section className='ladoDireito' >
          <img className="exemploBebidaGrande" src="/laranjaMaior.svg" />
          <img className="esfera" src="/eclipseVerde.svg" />
        </section>
      )}
      {imagemCopo == "vermelho" && (
        <section className='ladoDireito' >
          <img className="exemploBebidaGrande" src="/vermelhoMaior.svg" />
          <img className="esfera" src="/eclipseVermelho.svg" />
        </section>
      )}
      {imagemCopo == "amarelo" && (
        <section className='ladoDireito' >
          <img className="exemploBebidaGrande" src="/amareloMaior.svg" />
          <img className="esfera" src="/eclipseAmarelo.svg" />
        </section>
      )}
    </home>
  )
}

export default Home
