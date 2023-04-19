import './calhas.css'
import Header from '../../components/Header'
import HeaderImage from '../../assets/produ3.jpeg'
import produ6 from '../../assets/produ6.jpeg'
import {IoLogoWhatsapp} from 'react-icons/io'
import cliente7 from '../../assets/cliente7.jpeg'


const Calhas = () => {
  return (
    <>
      <Header title='Calhas e Ruffos' image={HeaderImage}>
        Nossas calhas são feitas de zinco da melhor qualidade!
      </Header>
      <section className='calhas'>
        <div className='line-deco_top'></div>
        <div className='line-deco_top'></div>
        <div className='container calhas_container'>
          <div className='calhas_conteudo'>
            <h1>Calhas e Ruffos </h1>
            <p>Cansado daqueles respingos na sua garagem? Ou mesmo as quedas de água vindas do telhado? Garanta já suas Calhas conosco.
            </p>
          </div>

          <div className='calhas_images'>
            <img src={produ6} alt="imagem das calhas" />
          </div>

          <div className='calhas_images'>
              <img src={cliente7} alt="imagem de calhas" />
          </div>
          <div className='calhas_conteudo'>
              <h1>Pingadeiras</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sequi repudiandae enim ipsam aperiam voluptates. Voluptatum non recusandae assumenda porro, Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ducimus, aspernatur optio fugit animi sapiente saepe delectus, rerum quos exercitationem molestiae magni. Necessitatibus ad a autem corrupti dolores earum itaque.
              </p>
              <div className='btn contato_whats'>
              <a href="https://api.whatsapp.com/message/ANMP2TVVZYY6K1?autoload=1&app_absent=0" target='_blank' rel='noreferrer noopener'>
              Faça seu Orçamento!  <IoLogoWhatsapp className='icon_whats'/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Calhas