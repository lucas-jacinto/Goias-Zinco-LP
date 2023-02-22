import MainHeader from '../../components/MainHeader'
import Info from '../../components/Info'
import Valores from '../../components/Valores'
import Fedbacks from '../../components/Fedbacks'
import './home.css'
import FAQs from '../../components/FAQs'

const Home = () => {
  return (
    <>
      <MainHeader/>
      <Info/>
      <Valores />
      <FAQs/>
      <Fedbacks />
    </>

  )
}

export default Home