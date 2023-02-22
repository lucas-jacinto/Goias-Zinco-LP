import './sobre.css'

import Header from '../../components/Header'
import HeaderImage from '../../assets/produ2.jpeg'
import video from '../../assets/produvideo.mp4'
import produ6 from '../../assets/produ6.jpeg'

const Sobre = () => {
  return (
   <>
    <Header title='Sobre Nós' image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sapiente doloremque, minima voluptatibus nisi officiis similique vitae quisquam magni, iste quaerat, voluptates deleniti amet assumenda ex ea. Odit, suscipit dolore.
    </Header>
    <section className='sobre_story'>
      <div className='container sobre_story-container'>
        
        <div className='sobre_section-image'>
         <img src={produ6} alt="imagem da producao" />
        </div>

        <div className='sobre_section-conteudo'>
          <h1>Nossa Historia</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sequi repudiandae enim ipsam aperiam voluptates. Voluptatum non recusandae assumenda porro, sapiente illum eius numquam nam pariatur enim quia quod minus.
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