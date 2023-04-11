import React from "react";

const Category = ({ category }) => {
  return (
    <div className="relative cursor-pointer">
      <img
        src={category.image}
        alt={category.category}
        className=" h-80 w-80 bg-center object-cover"
      />
      <div className="absolute top-0 right-0 bg-black/20 z-2 h-full w-full"></div>
      <p className="absolute bottom-5 left-5 text-xl font-semibold text-white">
        {category.category}
      </p>
    </div>
  );
};

export default Category;
