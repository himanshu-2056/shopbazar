import React, { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ cart, index }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  return (
    <div
      key={index}
      className="flex  items-center gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500"
    >
      <div className="min-h-[150px]  flex items-center gap-x-4">
        <Link to={`/product/${cart.id}`}>
          <img
            className="max-h-[80px] w-[80px] object-cover"
            src={cart.image}
            alt={cart}
          />
        </Link>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex justify-between mb-2">
          <Link
            to={`/product/${cart.id}`}
            className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
          >
            {cart.title}
          </Link>
          <div
            onClick={() => removeFromCart(cart.id)}
            className="text-xl cursor-pointer"
          >
            <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
          </div>
        </div>
        <div className=" flex gap-x-2 h-[36px] text-sm">
          <div className="flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium">
            <div
              onClick={() => decreaseAmount(cart.id)}
              className="flex-1 h-full flex justify-center items-center cursor-pointer"
            >
              <IoMdRemove />
            </div>
            <div className="h-full flex-1 flex justify-center items-center">
              {cart.amount}
            </div>
            <div
              onClick={() => increaseAmount(cart.id)}
              className="flex-1 h-full flex justify-center items-center cursor-pointer"
            >
              <IoMdAdd />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-around">
            <div>${cart.price}</div>
            <div>{`$ ${parseFloat(cart.price * cart.amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
