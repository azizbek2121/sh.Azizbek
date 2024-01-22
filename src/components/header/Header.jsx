import React from 'react'
import './Header.scss'
import {Link } from 'react-router-dom';
import {enter} from '../../assets'
const Header = ({azizbek}) => {
  console.log(azizbek);
  return (
    
    <div className="nav">
    <nav className="head"> 
    <ul>
    <h2 className='headtwo'>Product</h2>
    <Link className='parag' to='/'>Main / Product</Link>
    </ul> 
    
    

  <Link className='product'  to='firstLogin'>
  <div className="link">
  <h2>{azizbek?`username${azizbek}`:null}</h2>
    <img src={enter} alt="" />
  <h2 className='enterh2'>Enter</h2>
  </div>
  </Link>
  </nav>
    

</div>
  )
}

export default Header