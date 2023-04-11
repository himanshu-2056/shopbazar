import React, { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import { CartContext } from "../../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  return (
    <div className=" bg-green-100 fixed top-0 w-full z-20 shadow-md">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center py-5">
        <Link to={"/"}>
          <img src={logo} className="h-10" alt="" />
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-3xl mx-2 lg:mx-0" />
          <div className="bg-red-500 absolute left-[36px] md:left-[38px] lg:left-[32px] -top-3 lg:-top-1 text-xs px-2 py-1 text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
