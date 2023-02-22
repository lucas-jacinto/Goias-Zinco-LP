import {useState} from 'react'
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"

import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import {fedbacks} from '../data'

const Fedbacks = () => {
  const [index, setIndex] = useState(0)
  const {name, quote, avatar} = fedbacks[index];

const prevFedbackHandler = () =>{
  setIndex(prev => prev - 1)
  
  if(index <= 0){
    setIndex(fedbacks.length - 1);
  }
}

const nextFedbackHandler = () => {
  setIndex(prev => prev + 1);

  if(index >= fedbacks.length - 1){
    setIndex(0);
  }
}

  return (
    <section className="fedbacks">
      <div className="container fedbacks_container">
        <SectionHead icon={<ImQuotesLeft/>} title='Nossos Clientes' className='fedbacks_head' />
        <Card className='fedback'>
          <div className="fedback_avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className='fedback_quote'>{`"${quote}"`}</p>
          <h5>{name}</h5>
        </Card>
        <div className='fedbacks_btn-container'>
          <button className='fedbacks_btn' onClick={prevFedbackHandler}>
              <IoIosArrowDropleftCircle/>
            </button>
            <button className='fedbacks_btn' onClick={nextFedbackHandler}>
              <IoIosArrowDroprightCircle/>
            </button>
        </div>
      </div>
      
    </section>
  )
}

export default Fedbacks