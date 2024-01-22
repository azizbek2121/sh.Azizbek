import React, { useEffect, useState } from 'react'
import './KartAll.scss';
import axios from 'axios';
import { search } from '../../assets';
import { edit } from '../../assets' ;
import { dele } from '../../assets';
import {Link } from 'react-router-dom';

const KartAll = () => {

  const [kartal , setKartal] = useState([])
  
  const fetchkarta = async () => {
    const res = await axios.get('http://localhost:3000/products')
    const data = await res.data
    console.log(data);
    setKartal(data)
  }

  useEffect(() => {
    fetchkarta()
  },[])


  return (
    <div className='kartall'>
      <div className="kartone">
        <div className="kart">
          <div className="karta1">
                <h1 className='headerone'>All Product(10)</h1>
            <div className="karta2">
                
              <div className="search">
               <div className="mainSearch">
               <input type="search" name="search" id="search" placeholder="search..." className='inSearch' />
               </div>
                <div className="searchImg">
                <img src={search} alt="" />
                </div>
              </div>
              </div>
              </div>
          {
            kartal.map((kartal) =>(
              <ul className='firstUl' key={kartal.id}>
                <li className='firstLi'>
                  <div className="allIn">
                  <div className='firstDiv'>
                  <input className='chekbox' type="checkbox"  name='checkbox' id='checkbox' />
                  <h4 className='headfour'>Product{kartal.id}</h4>
                  </div>
                    <p className='firstSecond brand'>{kartal.brend}</p>
                    <p className='firstSecond'>{kartal.title}</p>
                    <p className='firstSecond'>{kartal.discountPercentage}</p>
                    <p className='firstSecond' >{kartal.discountPercentage}</p>
                     <p className='firstSecond' >{kartal.price}</p>
                    <p className='firstSecond' >{kartal.stock}</p>
               
                   
                  <div className="box">
                  <Link><img className='edit' src={edit} alt="edit" /></Link>
                  <Link><img src={dele} alt="dele" /></Link>
                  </div>
                  
                  </div>
                </li>
              </ul>
            ))
          }
            
        <Link to='firstLogin'> <button className='productn'>New Product</button></Link>
        </div>
      </div>
      
    </div>
  )
}

export default KartAll