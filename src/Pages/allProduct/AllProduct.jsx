import React from 'react'
import center from '../../assets/image/center.svg'
import {Link } from 'react-router-dom';
import './AllProduct.scss'
const AllProduct = () => {
  return (
    <div className='centerImg container'>
      <h1 className='text'>You have not created any products yet</h1>
      <img className='bigImg' src={center} alt="center" />
     <div>
     <button className='buttn'><Link className='limk' to='createProduct'>Create your first product</Link></button>
     </div>
    </div>
  )
}

export default AllProduct