import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import StarRating from "./rating";

const ProductModal = ({ selectedData, setModal }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      className="relative z-10 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg h-[600px] overflow-y-auto md:h-full bg-white mt-20 md:mt-0  text-left shadow-xl transition-all max-w-6xl mx-auto ">
            <div className="grid grid-cols-12 justify-items-center p-10 ">
              <div className="col-span-12 md:col-span-6">
                <img
                  src={selectedData.image}
                  className="md:w-96 w-28 h-28 md:h-96 object-contain"
                  alt={selectedData.title}
                />
              </div>
              <div className="col-span-12 md:col-span-6 flex flex-col justify-between gap-5">
                <div className="flex flex-col justify-between gap-5">
                  <h3 className="capitalize text-xl font-semibold mt-5 md:mt-0 lg:max-w-sm md:max-w-7xl">
                    {selectedData.title}
                  </h3>
                  <p className="capitalize text-sm md:text-base text-gray-500">
                    {selectedData.description}
                  </p>
                  <div className="flex items-center gap-5 my-5">
                    <p className="text-xl text-gray-600 border-2 border-black px-2">
                      {selectedData.rating.rate}
                    </p>
                    <StarRating
                      rating={selectedData.rating.rate}
                      maxRating={5}
                    />
                  </div>
                </div>
                <div className=" border w-fit mx-auto md:mx-0 px-10 py-2 bg-red-500 text-white">
                  <button
                    onClick={() => addToCart(selectedData, selectedData.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute top-[92px] md:top-32 right-[45%] lg:right-5 xl:right-32"
          onClick={() => setModal(false)}
        >
          <span className="text-xl  px-3 rounded-full text-white bg-red-500 py-1">
            X
          </span>
        </button>
      </div>

      <style>
        {`
          @media (max-width: 1024px) {
            .fixed.inset-0.z-10.overflow-y-auto {
              padding-top: 80px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProductModal;
