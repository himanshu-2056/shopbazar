import React, { useContext, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import ProductModal from "./Modal";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const [modal, setModal] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const handleModal = () => {
    setModal(true);
    setSelectedData(product);
  };
  const { addToCart } = useContext(CartContext);

  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-3  flex flex-col product">
      <div className="border relative group h-80 flex justify-center items-center cursor-pointer">
        <img
          src={product.image}
          alt={product.title}
          className="h-44 w-44 object-contain group-hover:scale-125 transition duration-300"
        />
        <div className="group-hover:block hidden transition duration-300">
          <div className="absolute  top-0 right-0 py-2 w-12 flex flex-col items-center text-white cursor-pointer hover:bg-red-500 bg-red-400 hover-div">
            <button onClick={() => addToCart(product, product.id)}>
              <BiPlus className="h-5 w-5 m-2 text-white" />
            </button>
            <button onClick={() => handleModal()} className="bg-white my-1">
              <AiOutlineEye className="h-5 w-5 m-2 text-black" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 my-4">
        <p className="capitalize flex-1 text-gray-500">{product.category}</p>
        <p className="text-sm flex-1 font-bold">{product.title}</p>
        <p className="text-sm flex-1 font-semibold">$ {product.price}</p>
      </div>
      {modal && (
        <ProductModal
          selectedData={selectedData}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default Product;
