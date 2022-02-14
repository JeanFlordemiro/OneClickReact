import { Link } from "react-router-dom";
import Container from "./Container";
import styles from './Navbar.module.css'
import logoSite from '../img/logoSite.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={logoSite} alt='OneClick'/>
                </Link>
                
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/'> 🏠 Home</Link></li>

                    <li className={styles.item}><Link to='/Pacotes'> ✈️ Pacotes</Link></li>

                    <li className={styles.item}> <Link to='/Contato'>📧 Contato</Link></li>

                    <li className={styles.item}><Link to='/Sobre'>🏢 Sobre</Link></li>
                </ul>

            </Container>
        </nav>
    )
}

export default Navbar
