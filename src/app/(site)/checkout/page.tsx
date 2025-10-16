"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getCartItems, removeFromCart, updateCartQuantity } from "@/lib/cart";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState(getCartItems());

  useEffect(() => {
    const handleCartUpdate = () => setCartItems(getCartItems());
    window.addEventListener("cart-updated", handleCartUpdate);
    return () => window.removeEventListener("cart-updated", handleCartUpdate);
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + (item.discountedPrice ?? item.price) * item.quantity,
    0
  );

  return (
    <main className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column: Cart summary */}
        <div className="space-y-4">
          {cartItems.length === 0 && <p>Your cart is empty.</p>}

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

                  {/* Quantity controls */}
                  <div className="flex items-center mt-1 gap-2">
                    <button
                      onClick={() =>
                        item.quantity > 1
                          ? updateCartQuantity(item.id, item.quantity - 1)
                          : null
                      }
                      className="px-2 py-1 bg-gray-200 rounded"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
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

          <div className="flex justify-between pt-3 border-t font-semibold">
            <span>Total</span>
            <span>
              {cartItems[0]?.currency}
              {total.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Right column: Shipping form */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Shipping Details</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border rounded-md"
            />
            <textarea
              placeholder="Shipping Address"
              className="w-full px-4 py-2 border rounded-md"
              rows={4}
            />
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 rounded-full font-medium"
            >
              Submit Order
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
