import React from 'react';
import s from './CartBlock.module.css'
import { BsCart4 } from 'react-icons/bs'


function CartBlock() {
  return (
    <div className={s.cart}>
      <BsCart4 size={25} className={s.icon}/>
    <span className={s.totalPrice}> 1600 ₴</span>
    </div>
  )
}

export default CartBlock