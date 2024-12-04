import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header>
            <img src="/logo.svg" />
            <section className='links'>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/novidades">Novidades</Link>
                <Link className='link' to="/sobre">Sobre</Link>
            </section>
        </header>
    )
}

export default Header
