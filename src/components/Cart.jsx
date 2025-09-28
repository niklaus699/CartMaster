import { useState } from "react";
import CartContents from "./CartContents";
import OrderConfirmedModal from "./OrderConfirmedModal";

const Cart = ({ counts, desserts, removeFunction, onClearCart }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const handleStartNew = () => {
    handleClearModal(); // ➍ Close the modal
    onClearCart(); // ➎ Clear the cart when starting a new order
  };
  const handleClearModal = () => {
    setShowConfirm(false); // ➏ Close the modal
  };
  const handleConfirmOrderClick = () => setShowConfirm(true);
  const items = desserts
    .filter((dessert) => counts[dessert.id] > 0)
    .map((dessert) => ({ ...dessert, quantity: counts[dessert.id] }));
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  return (
    <div className="flex flex-col shadow-Rose-500 shadow-lg p-4 sticky top-0 bg-Rose-50 rounded-2xl space-y-3">
      <h1 className="text-Red font-redhat-bold my-8 text-2xl">
        Your Cart ({items.length})
      </h1>
      {!items.length ? (
        <div className="flex flex-col w-full justify-between items-center">
          <img src="/images/illustration-empty-cart.svg" alt="" />
          <p className="text-Rose-400">Your added items will appear here</p>
        </div>
      ) : (
        <div className="flex flex-col space-y-5">
          {items.map((item) => {
            const count = counts[item.id];
            return (
              <CartContents
                key={item.id}
                item={item}
                count={count}
                onRemove={removeFunction}
              />
            );
          })}
          <div className="flex justify-between items-center">
            <span className="font-redhat-regular">Order Total</span>
            <span className="font-redhat-bold text-xl">
              ${total.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-center bg-Rose-100 py-2 rounded-md">
            <img src="/images/icon-carbon-neutral.svg" alt="" />
            <span className="font-redhat-regular">
              This is a{" "}
              <span className="font-redhat-semibold">carbon-neutral</span>{" "}
              delivery
            </span>
          </div>
          <button
            className="flex justify-center rounded-4xl bg-Red py-2"
            onClick={handleConfirmOrderClick}
          >
            <span className="font-redhat-semibold text-white">
              Confirm order
            </span>
          </button>
        </div>
      )}
      {showConfirm && <OrderConfirmedModal items={items} total={total} startNewOrder={handleStartNew} onClearModal={handleClearModal} />}
    </div>
  );
};

export default Cart;
