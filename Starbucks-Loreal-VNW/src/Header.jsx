import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header>
            <img src="src/assets/logo.svg" />
            <section>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/novidades">Novidades</Link>
                <Link className='link' to="/sobre">Sobre</Link>
            </section>
        </header>
    )
}

export default Header
