"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  getCartItems,
  removeFromCart,
  clearCart,
  updateCartQuantity,
} from "@/lib/cart";

export default function CartSheetContent() {
  const [cartItems, setCartItems] = useState(getCartItems());

  // 🔹 Listen for updates (add/remove/change)
  useEffect(() => {
    const updateCart = () => setCartItems(getCartItems());
    window.addEventListener("cart-updated", updateCart);
    return () => window.removeEventListener("cart-updated", updateCart);
  }, []);

  const handleQuantityChange = (itemId: string, newQty: number) => {
    if (newQty <= 0) return removeFromCart(itemId);
    updateCartQuantity(itemId, newQty);
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

              {/* Quantity controls */}
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  className="w-6 h-6 flex items-center justify-center border rounded-full text-neutral-600 hover:bg-neutral-100"
                >
                  −
                </button>
                <span className="text-sm font-medium">{item.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                  className="w-6 h-6 flex items-center justify-center border rounded-full text-neutral-600 hover:bg-neutral-100"
                >
                  +
                </button>
              </div>

              <p className="text-sm text-neutral-600 mt-1">
                {item.currency}
                {item.price.toLocaleString()} × {item.quantity}
              </p>
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

      {/* Total */}
      <div className="flex justify-between pt-3 border-t">
        <p className="font-semibold">Total</p>
        <p className="font-semibold">
          {cartItems[0]?.currency}
          {total.toLocaleString()}
        </p>
      </div>

      {/* Proceed to checkout (disabled) */}
      <button
        disabled
        className="w-full mt-4 px-5 py-2 bg-primary-400 text-white rounded-full font-medium opacity-60 cursor-not-allowed"
      >
        Proceed to Checkout
      </button>

      {/* Clear cart */}
      <button
        onClick={clearCart}
        className="w-full mt-3 px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transition"
      >
        Clear Cart
      </button>
    </div>
  );
}
