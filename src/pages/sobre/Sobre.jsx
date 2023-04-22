import './sobre.css'

import Header from '../../components/Header'
import HeaderImage from '../../assets/produ2.jpeg'
import video from '../../assets/produvideo.mp4'
import produ6 from '../../assets/produ6.jpeg'

const Sobre = () => {
  return (
   <>
    <Header title='Sobre Nós' image={HeaderImage}>
      Somos uma empresa focada no melhor atendimento ao cliente. Especializados em Calhas, Ruffos, Telhas Isotérmicas, produtos para Vedação e muito mais.
    </Header>
    <section className='sobre_story'>
      <div className='container sobre_story-container'>

        <div className='sobre_section-image'>
         <img src={produ6} alt="imagem da producao" />
        </div>

        <div className='sobre_section-conteudo'>
          <h1>Nossa Historia</h1>
          <p>Rodrigo trabalhava na área desde muito novo, pois seu pai era sócio de uma empresa de Calhas, assim conseguiu comprar um parte e ficou sócio também, porém devido a divergencias gerenciais, Rodrigo decidiu vender a parte dele e criar sua própria empresa, Goiás Zinco. Assim estamos há mais de 7 anos no mercado.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores necessitatibus eos similique, modi soluta omnis minima vitae reiciendis unde. Officiis facilis quam veritatis?.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
         </div>
      </div>
    </section>

    <section className='sobre_visao'>
      <div className='container sobre_visao-container'>
         <div className='sobre_section-conteudo'>
          <h1>Nossa Producao</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sequi repudiandae enim ipsam aperiam voluptates. Voluptatum non recusandae assumenda porro, 
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores necessitatibus eos similique, modi soluta omnis minima vitae reiciendis unde. Officiis facilis quam veritatis?.
          </p>
         </div>
         <div className='sobre_section-video'>
         <video src= {video} width="320" height='640'   muted autoPlay loop/>
         </div>
      </div>
    </section>
   </>
  )
}

export default Sobre