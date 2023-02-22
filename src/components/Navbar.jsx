import {useState} from 'react'

import {Link, NavLink} from 'react-router-dom'
import {links} from '../data'
import './navbar.css'
import logoGo from '../assets/logoGoias.jpeg'

import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {
  const [isNavOn, setIsNavOn] = useState(false);

  return (
    <nav>
      <div className='container nav_container'>
        <Link to='/' className='logo'>
          <img src={logoGo} alt="logo"  onClick={()=> setIsNavOn(false)}/>
        </Link>
        <ul className={`nav_links ${isNavOn ? 'on_nav' : 'off_nav'}`}>
          {
            links.map(({name, path}, index)=>{
              return (
                <li key={index}>
                  <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : '' }  onClick={()=> setIsNavOn(prev => !prev)}> {name} </NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className='nav_toggle-btn' onClick={()=> setIsNavOn(prev => !prev)}>
         {
          isNavOn ? <MdOutlineClose/>  : <GoThreeBars/>
         }
        </button>
      </div>
      <div class="whats-fixado">
        <div class="whats-aba">
          <div class="whats-aba-icone">
          <a href="https://api.whatsapp.com/message/ANMP2TVVZYY6K1?autoload=1&app_absent=0" target='_blank' rel='noreferrer noopener'> Agora basta clicar e <br/><strong>Fazer seu Pedido!</strong></a>          
         </div>
        </div>          
      </div>
    </nav>
 
  )
}

export default Navbar