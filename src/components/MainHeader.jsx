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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi et labore reprehenderit qui distinctio?
            </p>
            <Link to='/produtos' className='btn lg'>Nossos Produtos</Link>
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