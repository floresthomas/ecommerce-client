import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Cart = ({ cartItems, handleRemoveItem, handleAddProduct }) => {
  const [total, setTotal] = useState(0);
  let userLocal = localStorage.getItem("user");

  const handleClick = async() => {
     try {
      const res = await axios.post('http://localhost:5000/api/product/payment', cartItems);
      console.log(res.data)
      window.location.href = res.data.response.body.init_point;
     } catch (error) {
       console.log(error.message)
     }
  };

  useEffect(() => {
    const getTotal = () => {
      const result = cartItems.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0);
      setTotal(result);
    };

    getTotal();
  }, [cartItems]);

  return (
    <div>
      <div>
        {cartItems.length === 0 ? (
          <div className="flex items-center justify-center h-[500px] font-bold">
            No items are added
          </div>
        ) : (
          <section>
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 h-[700px]">
              <div class="mx-auto max-w-3xl">
                <header class="text-center">
                  <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">
                    Your Cart
                  </h1>
                </header>
                {cartItems.map((item) => {
                  let itemQuantity = item.quantity;
                  let quantityInt = parseInt(itemQuantity, 10);
                  let newItem = {
                    ...item,
                    quantity: quantityInt,
                  };
                  return (
                    <div class="mt-8">
                      <ul class="space-y-4">
                        <li class="flex items-center gap-4">
                          <img
                            src={newItem.images}
                            alt={newItem.titles}
                            class="h-16 w-16 rounded object-cover"
                          />

                          <div>
                            <h3 class="text-lg text-gray-900">
                              {newItem.title}
                            </h3>

                            <dl class="mt-0.5 space-y-px text-[15px] text-gray-600">
                              <div>
                                <dt class="inline">${newItem.price}</dt>
                              </div>

                              <div>
                                <dt class="inline">{newItem.color}</dt>
                              </div>
                            </dl>
                          </div>

                          <div class="flex flex-1 items-center justify-end gap-2">
                            <form className="h-4 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none">
                              {newItem.quantity}
                            </form>
                            <button
                              onClick={() => handleRemoveItem(newItem._id)}
                              class="text-gray-600 transition hover:text-red-600"
                            >
                              <span class="sr-only">Remove item</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-4 w-4"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                          </div>
                          <button onClick={() => handleAddProduct(newItem)}>
                            +
                          </button>
                        </li>
                      </ul>
                    </div>
                  );
                })}
                <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div class="w-screen max-w-lg space-y-4">
                    <dl class="space-y-0.5 text-sm text-gray-700">
                      <div class="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>{total}</dd>
                      </div>
                    </dl>

                    <div class="flex justify-end">
                      {userLocal ? (
                        <button
                          className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                          onClick={() => handleClick()}
                        >
                          Checkout
                        </button>
                      ) : (
                        <Link to="/login">
                          <button className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
                            Login if you want to buy
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
