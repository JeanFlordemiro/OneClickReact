import style from './Pacotes.module.css'
import caribe from '../img/PacotesSlides/caribe.png'
import africa from '../img/PacotesSlides/africa.png'
import champions from '../img/PacotesSlides/champions.png'

function Pacotes() {
    return (

        <main>

            <section>

                <h1>Escolha seu pacote aproveite</h1>

                <div className={style.background}>
                    <div className={style.container}>
                    
                        <div className={style.card}>
                            <p>Tour Caribe</p>
                            <img src={caribe}/>
                            <p>Pacote Básico</p>
                        </div>
                        <div className={style.card}>
                            <p>Tour Caribe</p>
                            <img src={caribe}/>
                            <p>Pacote Intermediário</p>
                        </div>
                        <div className={style.card}>
                            <p>Tour Caribe</p>
                            <img src={caribe}/>
                            <p>Pacote Premíum</p>
                        </div>
                        <div className={style.card}>
                            <p>Tour Caribe</p>
                            <img src={caribe}/>
                            <p>Pacote Executivo</p>
                        </div>
                    </div>
                </div>

                <div className={style.background2}>
                    <div className={style.container}>
                    
                        <div className={style.card2}>
                            <p>Tour Havaí</p>
                            <img src={caribe}/>
                            <p>Pacote Básico</p>
                        </div>
                        <div className={style.card2}>
                            <p>Tour Havaí</p>
                            <img src={caribe}/>
                            <p>Pacote Intermediário</p>
                        </div>
                        <div className={style.card2}>
                            <p>Tour Havaí</p>
                            <img src={caribe}/>
                            <p>Pacote Premíum</p>
                        </div>
                        <div className={style.card2}>
                            <p>Tour Havaí</p>
                            <img src={caribe}/>
                            <p>Pacote Executivo</p>
                        </div>
                    
                    </div>
                </div>

                <div className={style.background3}>
                    <div className={style.container}>
                    
                        <div className={style.card3}>
                            <p>Tour Maldivas</p>
                            <img src={caribe}/>
                            <p>Pacote Básico</p>
                        </div>
                        <div className={style.card3}>
                            <p>Tour Maldivas</p>
                            <img src={caribe}/>
                            <p>Pacote Intermediário</p>
                        </div>
                        <div className={style.card3}>
                            <p>Tour Maldivas</p>
                            <img src={caribe}/>
                            <p>Pacote Premíum</p>
                        </div>
                        <div className={style.card3}>
                            <p>Tour Maldivas</p>
                            <img src={caribe}/>
                            <p>Pacote Executivo</p>
                        </div>
                    
                    </div>
                </div>

            </section>

        </main>
    )
}

export default Pacotes
