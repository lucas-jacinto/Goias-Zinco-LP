import './telhas.css'
import Header from '../../components/Header'
import HeaderImage from '../../assets/produ3.jpeg'
import produ4 from '../../assets/produ4.jpeg'
import {IoLogoWhatsapp} from 'react-icons/io'
import cliente7 from '../../assets/cliente7.jpeg'

const Telhas = () => {
  return (
   <>
    <Header title='Telhas Isotérmicas' image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur 
      Lorem ipsum dolor sit amet consectetur
    </Header>
    <section className='telhas_section'>
      <div className='line-deco_top'></div>
      <div className='line-deco_top'></div>
      <div className='container telhas_container'>
        <div className='telhas_conteudo'>
            <h1>Telhas </h1>
            <p> Mas o que é a telha isotérmica?  Também  conhecida como telha sanduíche, pois sua estrutura é formada por duas chapas de metal, normalmente feitas de aço galvanizado. Entre essas duas chapas é colocado um material isolante, feito de isopor geralmente.
            </p>
        </div>

         <div className='telhas_images'>
          <img src={produ4} alt="imagem das telhas" />
        </div>
        <div className='telhas_images'>
             <img src={cliente7} alt="imagem de pingadeiras" />
        </div>

        <div className='telhas_conteudo'>
            <h1>Vedação</h1>
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

export default Telhas