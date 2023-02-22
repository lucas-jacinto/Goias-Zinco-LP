import produ1 from '../assets/produ1.jpeg'
import SectionHead from './SectionHead'
import {valores} from '../data'
import Card from '../UI/Card'
import {GiCutDiamond} from 'react-icons/gi'

const Valores = () => {
  return (
    <section className='valores'>
      <div className='container valores_container'>
        <div className='valores_left'>
          <div className='valores_imagem'>
            <img src={produ1} alt="calhas imagem" className='valores_imagem'/>
          </div>
        </div>
        <div className='valores_right'>
            <SectionHead icon={<GiCutDiamond/>} title='Nossos Valores' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa iste, itaque animi ea quaerat ab vero eius. Voluptates voluptatem 
            </p>
            <div className='valores_wrapper'>
              {
                valores.map(({id, icon, title, desc})=>{
                  return <Card key={id} className='valores_valor'>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <small>{desc}</small>
                  </Card>
                })
              }
            </div>
        </div>
      </div>
    </section>
  )
}

export default Valores