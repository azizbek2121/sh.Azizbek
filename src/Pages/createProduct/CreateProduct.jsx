import React from 'react'
import './CreateProduct.scss'
import {Link } from 'react-router-dom';


const CreateProduct = () => {
  return (
    <div className='newProduct'>
        <div className="newProduct__container">

            <button className='newProduct__btn'>Main</button>

           <div className='newProduct'>
                <form className='form__container'>
                  <label className='newProduct__label'>Product Name *</label>
                  <input className='newProduct__input_1' type="text"/>

                  <div className='newProduct__input_block'>
                    <div className='newProduct__left'>
                          <label className='newProduct__label'>Brend *</label>
                         <input className='newProduct__input_2' type="text" />
                    </div>
                    <div className='newProduct__right'>
                        <label className='newProduct__label'>Manufacturer code *</label>
                         <input className='newProduct__input_2' type="text" />
                    </div>
                  </div>

                  <label className='newProduct__label'>Explanation *</label>
                  <textarea className='newProduct__area'></textarea>
                  
                  <div className='newProduct__input_block'>
                        <div>
                          <label className='newProduct__label'>Price</label>
                          <input className='newProduct__input_3' type="text" />
                        </div>
                        <div>
                          <label className='newProduct__label'>Discount price</label>
                          <input className='newProduct__input_3' type="text" />
                        </div>
                  

                  </div>
                </form>
           </div>
        </div>

        <div className='footer'>
          <div className='footer__block'>
          <Link to='kartAll'>  <button className='footer__btn'>Save</button></Link>
            <button className='footer__btnn'>Cancellation</button>
           </div>
        </div>
    </div>
  
  )
}


export default CreateProduct