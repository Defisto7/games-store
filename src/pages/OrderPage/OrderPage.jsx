import React from 'react';
import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../../components/utils';
import s from './OrderPage.module.css'
import OrderItem from './../../components/OrderItem/OrderItem';

function OrderPage() {
  const items = useSelector(state => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>Ваша корзина пуста</h1>
  }
  return (
    <div className={s.order}>
      <div className={s.left}>
        {items.map(game => <OrderItem game={game} />)}
      </div>
      <div className={s.right}>
        <div className={s.totalPrice}>
          <span>
            {items.length} товаров на сумму {calcTotalPrice(items)} ₴
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrderPage