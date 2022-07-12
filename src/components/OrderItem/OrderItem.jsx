import React from 'react'
import s from './OrderItem.module.css'
import GameCover from '../GameCover/GameCover';

function OrderItem({game}) {


  return (
    <div className={s.orderItem}>
      <div className={s.cover}>
        <GameCover image={game.image}/>
      </div>
      <div className={s.title}>
        <span>{game.title}</span>
      </div>
      <div className={s.price}>
        <span>{game.price} ₴</span>
      </div>
    </div>
  )
}

export default OrderItem