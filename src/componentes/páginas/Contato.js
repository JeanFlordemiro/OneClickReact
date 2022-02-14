import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import style from './Contato.module.css'

function Contato() {
    return (
        <div>
            <h1>Contato</h1>

            <div className={style.contatos}>
                <div>
                    <p>Tel: (21)99876-54321</p>
                </div>
                <div>
                    <p>E-Mail: contato@oneclick.com.br</p>
                </div>
                <div id={style['redes']}>
                    <p>
                        <a href="#">
                            <FaFacebook /> OneClick
                        </a> / 
                        <a href="#">
                            <FaInstagram /> @OneClick
                        </a> / 
                        <a href="#">
                            <FaTwitter /> #OneClick
                        </a>
                    </p>
                </div>
            </div>
            
        </div>

    )

}

export default Contato
