import {Link} from 'react-router-dom'
import Logo from '../assets/logoGoias.jpeg'
import LogoIso from '../assets/logoIso.jpeg'

import {AiFillInstagram, AiOutlineWhatsApp} from 'react-icons/ai'


const Footer = () => {
  return (
  <footer>
    <div className='container footer_container'>
      <article>
        <Link to='/' className='logo logos'>
          <img src={Logo} alt="footer logo" />
        </Link>
        <p>
          Goiás Zinco e IsoGoiás melhores produtos para melhorar o conforto da sua casa. Nossas redes sociais:
        </p>
        <div className='footer_socials'>
          <a href="https://instagram.com/" target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
          <a href="https://instagram.com/" target='_blank' rel='noreferrer noopener'><AiOutlineWhatsApp/></a>
        </div>
        <Link to='/' className='logo logos'>
          <img src={LogoIso} alt="footer logo iso_telhas" />
        </Link>
      </article>
      <article>
        <h4>Links Relevantes</h4>
        <Link to='/telhas'>Telhas Isotermicas</Link>
        <Link to='/calhas'>Calhas e Ruffos</Link>
        <Link to='/contato'>Contato</Link>
      </article>

      <article>
        <h4>Entre em Contato</h4>
        <Link to='/sobre'>Sobre Nos</Link>
        <Link to='/contato'>Nosso Contato</Link>
  
      </article>
      <article>
        <h4>Entre em Contato</h4>
        <Link to='/sobre'>Sobre Nos</Link>
        <Link to='/contato'>Nosso Contato</Link>
  
      </article>
    </div>
    <div className='footer_copyright'>
      <small>2022 GOIÁS ZINCO &copy; Todos os Diretos Reservados.</small>
    </div>
  </footer>
  )
}

export default Footer