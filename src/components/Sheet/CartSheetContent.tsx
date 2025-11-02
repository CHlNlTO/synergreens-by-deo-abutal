"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCartItems, removeFromCart, clearCart, updateCartQuantity } from "@/lib/cart";

export default function CartSheetContent() {
  const [cartItems, setCartItems] = useState(getCartItems());

  useEffect(() => {
    const updateCart = () => setCartItems(getCartItems());
    window.addEventListener("cart-updated", updateCart);
    return () => window.removeEventListener("cart-updated", updateCart);
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + (item.discountedPrice ?? item.price) * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <p className="text-center text-neutral-500">Your cart is empty.</p>;
  }

  return (
<div className="flex flex-col h-full max-h-[85vh] m-5"> {/* Make the sheet fill viewport */}
  {/* Scrollable product list */}
  <div className="flex-1 overflow-y-auto space-y-4 pr-1">
    {cartItems.map((item) => (
      <div
        key={`${item.id}-${item.variantLabel || "default"}`}
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
            <p className="font-medium">
              {item.name}
              {item.variantLabel && ` (${item.variantLabel})`}
            </p>
            <p className="text-sm text-neutral-600">
              {item.currency}
              {(item.discountedPrice ?? item.price).toLocaleString()} × {item.quantity}
            </p>

            <div className="flex items-center gap-2 mt-1">
              <button
                onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="w-6 h-6 flex items-center justify-center bg-neutral-200 rounded-full disabled:opacity-50"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                className="w-6 h-6 flex items-center justify-center bg-neutral-200 rounded-full"
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
  </div>

  {/* Footer always visible */}
  <div className="mt-4 border-t pt-3 flex flex-col gap-2">
    <div className="flex justify-between font-semibold">
      <span>Total</span>
      <span>
        {cartItems[0]?.currency}
        {total.toLocaleString()}
      </span>
    </div>

    <Link
      href="/checkout"
      className="w-full px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors flex justify-center items-center"
    >
      Proceed to Checkout
    </Link>

    <button
      onClick={clearCart}
      className="w-full px-5 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition"
    >
      Clear Cart
    </button>
  </div>
</div>

  );
}
