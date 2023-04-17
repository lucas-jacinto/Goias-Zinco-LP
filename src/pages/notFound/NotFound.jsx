import './notFound.css'
import {Link} from 'react-router-dom'
import {BiError} from 'react-icons/bi'
const NotFound = () => {
  return (
    <section>
      <div className='container notfound_container'>
        <h2>
          Página não encontrada em Goiás Zinco  <BiError className='alert_icon'/>
        </h2>
        <Link to='/' className='btn'>Voltar Página Inicial</Link>
      </div>
    </section>
  )
}

export default NotFound