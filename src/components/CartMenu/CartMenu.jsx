import React from "react";
import { calcTotalPrice } from "../utils";
import Button from "../Button/Button";
import s from "./CartMenu.module.css";

function CartMenu({ items, onClick }) {
  return (
    <div className={s.menu}>
      <div className={s.gameList}>
        {items.length > 0 ? items.map((game) => game.title) : "Корзина пустая"}
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
