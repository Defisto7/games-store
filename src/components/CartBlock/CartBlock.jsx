import React, { useState } from "react";
import { useSelector } from "react-redux";
import s from "./CartBlock.module.css";
import { BsCart4 } from "react-icons/bs";
import CartMenu from "../CartMenu/CartMenu";
import { calcTotalPrice } from "../utils";

function CartBlock() {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className={s.cart}>
      <BsCart4
        size={25}
        className={s.icon}
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className={s.totalPrice}>{totalPrice} ₴</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => {}} />}
    </div>
  );
}

export default CartBlock;
