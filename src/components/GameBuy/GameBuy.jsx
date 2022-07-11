import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItemInCart, deleteItemFromCart } from '../../redux/cart/reducer';
import Button from '../Button/Button'
import s from './GameBuy.module.css'

function GameBuy({ game }) {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.itemsInCart);
  const isItemInCart = items.some(item => item.id === game.id)

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id))
    } else {
      dispatch(setItemInCart(game))
    }
    
  }
  return (
    <div className={s.buy}>
      <span className={s.price}>{game.price} ₴ </span>
      <Button onClick={handleClick} type={isItemInCart ? 'secondary' : 'primary'}>
        {isItemInCart ? 'Убрать из корзины' : 'В Корзину'}
      </Button>
    </div>
  )
}

export default GameBuy