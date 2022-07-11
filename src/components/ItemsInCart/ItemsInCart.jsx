import React from 'react';
import s from './ItemsInCart.module.css'

function ItemsInCart({quantity = 0}) {
  return quantity > 0 ? 
      (<div className={s.inCart}>
      {quantity }
    </div>) : null
}

export default ItemsInCart