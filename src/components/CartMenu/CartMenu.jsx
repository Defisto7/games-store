import React from "react";
import { calcTotalPrice } from "../utils";
import Button from "../Button/Button";
import s from "./CartMenu.module.css";
import CartItem from "./../CartItem/CartItem";

function CartMenu({ items, onClick }) {
  return (
    <div className={s.menu}>
      <div className={s.gameList}>
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Корзина пустая"}
      </div>
      {items.length > 0 ? (
        <div className={s.arrange}>
          <div className={s.totalPrice}>
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} ₴</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default CartMenu;
