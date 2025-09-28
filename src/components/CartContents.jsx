import React from 'react'
import RemoveIcon from "../assets/icons/icon-remove-item.svg?react";

const CartContents = ({item, count, onRemove}) => {
  return (
    <div className="flex justify-between items-center border-b-1 border-Rose-300 space-y-3">
      <div className="flex flex-col">
        <span className="font-redhat-bold"> {item.name} </span>
        <div className="flex justify-between items-center gap-2">
          <span className="font-redhat-semibold text-Red"> {count}x </span>
          <span className="font-redhat-regular text-gray-400">
            {" "}
            @ ${item.price.toFixed(2)}{" "}
          </span>
          <span className="font-redhat-semibold text-gray-500">
            {" "}
            ${(item.price * count).toFixed(2)}{" "}
          </span>
        </div>
      </div>
      <button
        className="group cursor-pointer text-gray-500 border w-fit rounded-full h-fit py-0.5 px-0.5 hover:text-black"
        onClick={() => onRemove(item.id)}
      >
        <RemoveIcon className="fill-current group-hover:transition-colors " />
      </button>
    </div>
  );
}

export default CartContents;