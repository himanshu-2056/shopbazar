import React, { useContext } from "react";

import { FiTrash2 } from "react-icons/fi";

import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { FiArrowRight } from "react-icons/fi";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[50vw] xl:max-w-[25vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div onClick={() => handleClose()}>
          <FiArrowRight className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[440px] xl:h-[700px] scrollbar overflow-y-auto overflow-x-hidden border-b ">
        {cart.map((cart, index) => {
          return <CartItem cart={cart} index={index} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3  my-4">
        <div className="flex w-full justify-between items-center mx-2">
          <div className="uppercase font-semibold">
            <span className="mt-2">Total:</span> ${parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl "
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
