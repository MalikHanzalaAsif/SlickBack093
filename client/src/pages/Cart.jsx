"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useCart } from "../components/CartContext";
import calculateTotalCartPrice from "../utils/calculateTotalCartPrice";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function CartModal({ open, setOpen }) {
  const { cart, setCart } = useCart();

  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      setCart(storedCart ? storedCart : []);
    } catch (error) {
      console.error("Error in cart:");
      setCart([]);
    }
  }, []);

  let subTotal = useMemo(() => calculateTotalCartPrice(cart), [cart]);

  function removeCartItem(currItem) {
    const filteredCart = cart.filter((cartItem) => cartItem.id !== currItem.id);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
    setCart(filteredCart);
  }

  function increaseQuantity(currItem) {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === currItem.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  function decreaseQuantity(currItem) {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === currItem.id) {
        return { ...cartItem, quantity: Math.max(1, cartItem.quantity - 1) };
      }
      return cartItem;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              {cart.length !== 0 ? (
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {cart.map((item) => (
                            <li key={item.id} className="flex py-6">
                              <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  alt={item.description}
                                  src={item.image}
                                  className="size-full object-cover"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <p>{item.title}</p>
                                    </h3>
                                    <p className="ml-4">${item.price}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.color}
                                  </p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">
                                    Qty <button className="border p-1 text-black hover:bg-gray-100" onClick={() => increaseQuantity(item)}>+</button> {item.quantity} <button className="border p-1 text-black hover:bg-gray-100" onClick={() => decreaseQuantity(item)}>-</button>
                                  </p>
                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-red-700 hover:text-red-700"
                                      onClick={() => removeCartItem(item)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${subTotal}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <Link to={`/checkout`}
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-red-500 to-red-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:opacity-[0.9]"
                        onClick={() => setOpen(false)}
                      >
                        Checkout
                      </Link >
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{" "}
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="font-medium text-red-700 hover:text-red-700"
                        >
                          <Link to="/shop">Continue Shopping</Link>
                          <span aria-hidden="true">&rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8 h-full">
                      <div className="flex flex-col justify-center h-60">
                        <h1 className="text-4xl mb-4 m-auto">
                          Your Cart is Empty!
                        </h1>
                        <div className="mt-6">
                          <Link
                            to="/shop"
                            className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-red-500 to-red-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:opacity-[0.9]"
                            onClick={() => setOpen(false)}
                          >
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
