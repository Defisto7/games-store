import React from 'react';
import { useDispatch } from 'react-redux';
import { setItemInCart } from '../../redux/cart/reducer';
import Button from '../Button/Button'
import s from './GameBuy.module.css'

function GameBuy({ game }) {
  const dispatch = useDispatch()
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(game))
  }
  return (
    <div className={s.buy}>
      <span className={s.price}>{game.price} ₴ </span>
      <Button onClick={handleClick} type="primary">
        В Корзину
      </Button>
    </div>
  )
}

export default GameBuy