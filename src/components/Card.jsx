import React from 'react'
import PlusIcon from "../assets/images/icon-increment-quantity.svg?react";
import MinusIcon from "../assets/images/icon-decrement-quantity.svg?react";


const Card = ({img, name, category, price, count, id, onPress, onAdd, onRemove}) => {

  return (
    <div>
      <div className="relative grid">
        <img
          src={img}
          alt="image"
          className="rounded-xl hover:border-1 hover:border-orange-600"
        />
        <div
          className={`flex gap-6 items-center left-1/4 top-11/12 hover:border-orange-600 absolute py-2 self-center border-gray-400 rounded-full z-10 cursor-pointer ${
            count > 0 ? "bg-orange-600" : "bg-white"
          } ${count > 0 ? "px-2" : "px-6"} ${
            count > 0 ? "border-none" : "border-1"
          }`}
        >
          {count === 0 ? (
            <button
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => onPress(id)}
            >
              <img
                src="./assets/images/icon-add-to-cart.svg"
                alt="add to cart"
              />
              <span>Add to Cart</span>
            </button>
          ) : (
            <>
              <button
                onClick={() => onRemove(id)}
                className="group bg-inherit p-1 text-white rounded-full border border-white hover:cursor-pointer hover:bg-white"
              >
                <MinusIcon className="fill-current group-hover:text-orange-600" />
              </button>
              <span className="mx-2 text-white">{count}</span>
              <button
                onClick={() => onAdd(id)}
                className="group bg-inherit p-1 text-white rounded-full border border-white hover:cursor-pointer hover:bg-white"
              >
                <PlusIcon className="fill-current group-hover:text-orange-600 transition-colors" />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="mt-10">
        <p className="mb-2">{category}</p>
        <h4 className="mb-2 font-semibold font-sans">{name}</h4>
        <span className="text-orange-600">{`$${price.toFixed(2)}`}</span>
      </div>
    </div>
  );
}

export default Card;