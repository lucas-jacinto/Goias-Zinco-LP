import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import Calhas from './pages/calhas/Calhas'
import Telhas from './pages/telhas/Telhas'
import Contato from './pages/contato/Contato'
import NavBar from './components/Navbar'
import NotFound from './pages/notFound/NotFound'
import Producao from './pages/producaoGaleria/Producao'
import Footer from './components/Footer'


const App = () => {
  return ( 
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route index element={<Home />} />
      <Route path='sobre' element={<Sobre />} />
      <Route path='calhas' element={<Calhas />} />
      <Route path='telhas' element={<Telhas />} />
      <Route path='producao' element={<Producao />} />
      <Route path='contato' element={<Contato />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  ) 
}

export default App