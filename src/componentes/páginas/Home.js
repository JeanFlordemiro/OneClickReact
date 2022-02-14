import styles from './Home.module.css'
import bannerHome from '../img/mundoeditado.png'
import card from '../img/card.png'
import segurança from '../img/slide1.jpg'
import pacotes from '../img/slide3.jpg'
import disney from '../img/disney.jpg'
import Pacotes from './Pacotes'
import {Link} from 'react-router-dom'
import Container from '../layout/Container'



function Home() {
    return(
        <section className={styles.home_container}>

            <main className={styles.boasVindas}>
                <picture>
                    <img src={bannerHome} alt='Banner boas vindas'/>
                    
                    <div>
                        <p>Seu site de viagens Nº1</p>
                    
                    </div>

                </picture>

                <h1>Férias inesqueciveis!</h1>

                <div className={styles.card}>
                    <div id={styles['corpoCard']}>
                        <h2>Caribe</h2>
                        <img src={card}/>
                        <p id={styles['frase']}>Viaje para o Cáribe com até 50% de deconto</p>
                        <div className={styles.botão}>
                            <Container>
                                <Link to='/Pacotes'>
                                    <button>Saiba Mais</button>
                                </Link>
                            </Container>
                        </div>
                    </div>
                    <div id={styles['corpoCard']}>
                        <h2>Havaí</h2>
                        <img src={card}/>
                        <p id={styles['frase']}>Viaje para o Havaí com até 35% de deconto</p>
                        <div className={styles.botão}>
                            <Container>
                                <Link to='/Pacotes'>
                                    <button>Saiba Mais</button>
                                </Link>
                            </Container>
                        </div>
                        
                    </div>
                    <div id={styles['corpoCard']}>
                        <h2>Maldivas</h2>
                        <img src={card}/>
                        <p id={styles['frase']}>Viaje para as Maldivas com até 60% de deconto</p>
                        <div className={styles.botão}>
                            <Container>
                                <Link to='/Pacotes'>
                                    <button>Saiba Mais</button>
                                </Link>
                            </Container>
                        </div>
                    </div>

                </div>

                <div className={styles.novidades}>

                    <h1>Novidades</h1>

                    <div>
                        <h2>Segurança</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                            <img src={segurança}/>

                        </p>

                        <h2>Tour Champions League</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

                            <img src={pacotes}/>

                        </p>

                        <h2>Pacotes Promocionaiss</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                            <img src={disney}/>

                        </p>
                    </div>
 
                </div>

            </main>

        </section>

    )

}

export default Home
