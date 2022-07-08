import React from 'react'
import Button from '../Button/Button'
import s from './GameBuy.module.css'

function GameBuy({ game }) {
  return (
    <div className={s.buy}>
      <span className={s.price}>{game.price} ₴ </span>
      <Button onClick={() => {}} type="primary">
        В Корзину
      </Button>
    </div>
  )
}

export default GameBuy