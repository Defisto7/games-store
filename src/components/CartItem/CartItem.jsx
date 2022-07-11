import React from 'react'
import s from './CartItem.module.css'

function CartItem({title, price, id}) {
  return (
    <div className={s.item}>
      <span>{title}</span>
      <div className={s.price}>
        <span>{price}  ₴</span>
      </div>
    </div>
  )
}

export default CartItem