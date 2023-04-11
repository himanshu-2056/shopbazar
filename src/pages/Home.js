import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

import { categories, shippingDetails } from "../data";
import Category from "../contexts/Category";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  return (
    <div>
      <section className="bg-green-100  py-20">
        <div className="max-w-6xl mx-auto px-5">
          <Hero />
        </div>
      </section>
      <section className="my-5">
        <div className="max-w-6xl mx-auto px-5 py-12 shadow-lg bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {shippingDetails.map((details, index) => {
              return (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-10 h-10 flex-shrink-0">
                    <i>{details.icon}</i>
                  </div>
                  <div>
                    <h1 className="text-sm font-bold">{details.heading}</h1>
                    <p className="text-xs text-gray-400">{details.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="py-10 text-4xl font-semibold">Categories</h1>
          <div className="flex flex-col md:flex-row justify-between gap-5 relative">
            {categories.map((category) => {
              return <Category category={category} />;
            })}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="py-10 text-4xl font-semibold">Products</h1>
          <div className="grid grid-cols-12 md:gap-10">
            {products.map((product) => {
              return <Product product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
