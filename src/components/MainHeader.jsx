import {Link} from 'react-router-dom'
import publi1 from '../assets/publi1.jpeg'

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
            <h4>#MelhoresPreçosDaRegião</h4>
            <h1>Venha Conferir!</h1>
            <div className='main_header-img-small' >
                <img src={publi1} alt="imagem de telha" />
            </div>
            <p>Telhas, calhas, ruffos, pingadeiras e muito mais você encontra na Goiás Zinco.
              <br/>
              Estamos localizados em Goiânia - Goiás com os melhores preços da região.
            </p>
            <Link to='/Contato' className='btn lg'>Fazer Cotação</Link>
        </div>
        <div className='main_header-right'>
            <div className='main_header-img' >
                <img src={publi1} alt="imagem de telha" />
            </div>
        </div>

      </div>
    </header>
  )
}

export default MainHeader