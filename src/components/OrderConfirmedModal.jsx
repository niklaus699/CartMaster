import React from "react";
import Modal from "./Modal";

const OrderConfirmedModal = ({ items, total, startNewOrder, onClearModal }) => {
  return (
    <div>
      <Modal onClose={onClearModal}>
        <div>
          <img src="../src/assets/images/icon-order-confirmed.svg" alt="🎈" />
          <div className="mb-6">
            <h1 className="font-redhat-bold">Order Confirmed</h1>
            <p className="font-redhat-regular text-gray-500">
              We hope you enjoy your food 😎
            </p>
          </div>
          <div className="flex flex-col bg-Rose-50 rounded-xl px-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b-1 border-Rose-300 py-4"
              >
                <div className="flex items-center justify-between">
                  <img
                    src={item.image.thumbnail}
                    alt={item.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div>
                    <span className="font-redhat-semibold"> {item.name} </span>
                    <div className="flex items-center justify-between">
                      <span className="text-Red"> {item.quantity}x </span>
                      <span className="text-Rose-300 font-redhat-regular">
                        {" "}
                        @{item.price.toFixed(2)}{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="font-redhat-bold">
                  {" "}
                  ${(item.price * item.quantity).toFixed(2)}{" "}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-center my-4">
              <span className="text-Rose-300">Order Total</span>
              <span className="font-redhat-bold"> ${total.toFixed(2)} </span>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button
              className="bg-Red-50 rounded-4xl py-3 w-full"
              onClick={startNewOrder}
            >
              <span className="font-redhat-semibold">Start new order</span>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OrderConfirmedModal;
