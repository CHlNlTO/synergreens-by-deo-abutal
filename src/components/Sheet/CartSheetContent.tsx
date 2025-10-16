"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems, removeFromCart, clearCart, updateCartQuantity } from "@/lib/cart";

export default function CartSheetContent() {
  const [cartItems, setCartItems] = useState(getCartItems());

  useEffect(() => {
    const updateCart = () => setCartItems(getCartItems());
    window.addEventListener("cart-updated", updateCart);
    return () => window.removeEventListener("cart-updated", updateCart);
  }, []);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return; // prevent going below 1
    updateCartQuantity(id, newQuantity);
    setCartItems(getCartItems());
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <p className="text-center text-neutral-500">Your cart is empty.</p>;
  }

  return (
    <div className="space-y-4 mt-4">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b pb-3"
        >
          <div className="flex items-center gap-3">
            <Image
              src={item.image}
              alt={item.name}
              width={60}
              height={60}
              className="rounded-md object-cover"
            />
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-neutral-600">
                {item.currency}
                {item.price.toLocaleString()} × {item.quantity}
              </p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                  className={`w-6 h-6 rounded-full border flex items-center justify-center text-sm font-bold transition 
                    ${
                      item.quantity === 1
                        ? "text-neutral-400 border-neutral-200 "
                        : "text-primary-700 border-primary-600 hover:bg-primary-50"
                    }`}
                >
                  −
                </button>
                <span className="w-6 text-center font-medium text-neutral-700">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="w-6 h-6 rounded-full border border-primary-600 text-primary-700 flex items-center justify-center text-sm font-bold hover:bg-primary-50 transition"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 text-sm hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="flex justify-between pt-3 border-t">
        <p className="font-semibold">Total</p>
        <p className="font-semibold">
          {cartItems[0]?.currency}
          {total.toLocaleString()}
        </p>
      </div>

      {/* Proceed to Checkout (disabled for now) */}
      <button
        disabled
        className="w-full mt-4 px-5 py-2 bg-primary-500/50 text-white rounded-full font-medium cursor-not-allowed"
      >
        Proceed to Checkout
      </button>

      <button
        onClick={clearCart}
        className="w-full mt-3 px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transition"
      >
        Clear Cart
      </button>
    </div>
  );
}
