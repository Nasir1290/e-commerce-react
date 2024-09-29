import React, { useState } from "react";
import useCart from "../../hooks/useCart";

const CartDetails = () => {
  const { state, dispatch } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkoutAmount, setCheckoutAmount] = useState(0);

  // Calculate total price
  const totalPrice = state.reduce((acc, item) => acc + item.discount_price, 0);

  // Handle item removal
  const handleRemove = (id) => {
    dispatch({ type: "removeFromCart", id });
  };

  // Handle Checkout and show modal
  const handleCheckout = () => {
    dispatch({
      type: "removeAllProducts",
    });
    setCheckoutAmount(totalPrice);
    setIsModalOpen(true);
    // Automatically close modal after 3 seconds
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen py-12 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Cart</h1>

        {/* Cart Items */}
        {state.length === 0 ? (
          <p className="text-center text-xl text-gray-600">
            Your cart is empty.
          </p>
        ) : (
          <div>
            <div className="space-y-4">
              {state.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md"
                >
                  {/* Image */}
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md mb-4 md:mb-0"
                  />

                  {/* Item Details */}
                  <div className="flex-1 ml-0 md:ml-4 text-center md:text-left">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">
                      Availability:{" "}
                      {item.availability ? "In Stock" : "Out of Stock"}
                    </p>
                    <p className="text-sm text-gray-500">
                      Material: {item.details.material}
                    </p>
                  </div>

                  {/* Quantity and Price */}
                  <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0 space-x-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        className="px-2 py-1 border rounded bg-gray-100 hover:bg-gray-200"
                        onClick={() =>
                          dispatch({
                            type: "DECREASE_QUANTITY",
                            payload: item.id,
                          })
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="px-2 py-1 border rounded bg-gray-100 hover:bg-gray-200"
                        onClick={() =>
                          dispatch({
                            type: "INCREASE_QUANTITY",
                            payload: item.id,
                          })
                        }
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-xl font-bold text-green-600">
                        ${item?.discount_price.toFixed(2)}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-white px-4 py-2 text-sm font-bold rounded-md bg-red-500 hover:scale-110 transition-all"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <hr className="mt-4 border-3 border-purple-400" />
            <div className="text-2xl font-bold mr-4 text-end mt-3 ">
              Total:{" "}
              <span className=" text-green-600">${totalPrice.toFixed(2)}</span>
            </div>
            {/* Total and Checkout */}
            <div className="mt-8 flex justify-end items-center">
              <button
                onClick={handleCheckout}
                className="bg-red-500 text-white px-24 py-3 rounded-md font-bold hover:bg-red-600"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed mt-8 inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            {/* Checkmark */}
            <svg
              className="w-16 h-16 text-green-500 mx-auto mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>

            {/* Success Message */}
            <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
            <p className="text-gray-700 mb-4">
              You have successfully checked out.
            </p>

            {/* Amount */}
            <p className="text-lg font-semibold text-green-600">
              Total Amount: ${checkoutAmount.toFixed(2)}
            </p>

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDetails;