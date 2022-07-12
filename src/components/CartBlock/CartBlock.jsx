import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import s from "./CartBlock.module.css";
import { BsCart4 } from "react-icons/bs";
import CartMenu from "../CartMenu/CartMenu";
import { calcTotalPrice } from "../utils";
import ItemsInCart from "../ItemsInCart/ItemsInCart";
import { useNavigate } from "react-router-dom";

function CartBlock() {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const navigate = useNavigate();
  const totalPrice = calcTotalPrice(items);
  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false)
    navigate(`/order`)
  }, [navigate])
  return (
    <div className={s.cart}>
      <ItemsInCart quantity={items.length}/>
      <BsCart4
        size={25}
        className={s.icon}
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className={s.totalPrice}>{totalPrice} ₴</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
}

export default CartBlock;
