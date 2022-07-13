import React from 'react'
import s from './OrderItem.module.css'
import GameCover from '../GameCover/GameCover';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle} from 'react-icons/ai'
import { deleteItemFromCart } from '../../redux/cart/reducer';

function OrderItem({game}) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id))
  }

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
        <AiOutlineCloseCircle 
          size={25}
          className={s.deleteIcon}
          onClick={handleClick}/>
      </div>
    </div>
  )
}

export default OrderItem