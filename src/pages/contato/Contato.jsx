import './contato.css'
import Header from '../../components/Header'
import Image2 from '../../assets/lojagoiaszinco.jpeg'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp,IoIosCall} from 'react-icons/io'
import {MdLocationOn} from 'react-icons/md'

const Contato = () => {
  return (
    <>
      <Header title='Entre em Contato' image={Image2}>
        Funcionamos de Segunda a sexta das 7h as 18h<br/>
        E nos Sabados de ate 12h
      </Header>
      <section className='contato'>
        <div className='container contato_container'>

          <div className='contato_location'>
            <a href="https://www.google.com/maps/place/G%C3%B3ias+zinco+calhas,+rufos+e+telhas+t%C3%A9rmicas/@-16.7680234,-49.352477,20z/data=!4m13!1m7!3m6!1s0x0:0xdaef96a9c8e6147c!2zMTbCsDQ2JzA0LjgiUyA0OcKwMjEnMDguOCJX!3b1!8m2!3d-16.767992!4d-49.3524475!3m4!1s0x0:0x690bd459235cefdd!8m2!3d-16.7680501!4d-49.3524281?hl=en" target='_blank' rel='noreferrer noopener'> Estamos localizados em Goiania-GO <MdLocationOn className='icon_loca'/></a>
            <p>Rua Espigão esq. c/ São Roque, Qd. 01 , Lt. 11 - St. dos Dourados, Goiânia - GO, 74355-037</p>
          </div>
          <div className='contato_wrapper'>
            <a href="tel:+556295442697" target='_blank' rel='noreferrer noopener'>
              <IoIosCall/>
            </a>

            <a href="mailto:goiaszinco@gmail.com" target='_blank' rel='noreferrer noopener'>
              <MdEmail/>
            </a>

            <a href="https://api.whatsapp.com/message/ANMP2TVVZYY6K1?autoload=1&app_absent=0" target='_blank' rel='noreferrer noopener'>
              <IoLogoWhatsapp/>
            </a>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contato