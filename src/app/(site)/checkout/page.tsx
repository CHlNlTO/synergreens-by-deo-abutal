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

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.discountedPrice ?? item.price) * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your order in just a few steps</p>
        </div>

        {/* Grid: items-stretch keeps both columns the same height */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left column: Shipping form (fills available height) */}
          <div className="lg:col-span-2 flex flex-col gap-6 h-full">
            {/* Contact card */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">1</div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Contact Information</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+63 912 345 6789"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping card - mt-auto pushes it to the bottom so the right summary lines up */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mt-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">2</div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Shipping Address</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                  <textarea
                    placeholder="Block 5 Lot 4, San Sebastian Village"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    rows={2}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Barangay *</label>
                  <input
                    type="text"
                    placeholder="Darasa"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input
                      type="text"
                      placeholder="Tanauan"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Province</label>
                    <input
                      type="text"
                      placeholder="Batangas"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code *</label>
                    <input
                      type="text"
                      placeholder="4232"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <input id="saveAddress" type="checkbox" className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300" />
                  <label htmlFor="saveAddress" className="text-sm text-gray-600">Save this address for future orders</label>
                </div>

              </div>
            </div>
          </div>

          {/* Right column: Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 sticky top-8 h-full">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div
                        key={`${item.id}-${item.variantLabel || "default"}`}
                        className="flex gap-4 pb-4 border-b border-gray-200 last:border-0"
                      >
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                          <Image src={item.image} alt={item.name} width={80} height={80} className="object-cover" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 text-sm truncate">{item.name}</h3>
                          {item.variantLabel && <p className="text-xs text-gray-500 mt-1">{item.variantLabel}</p>}

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1">
                              <button
                                onClick={() => item.quantity > 1 ? updateCartQuantity(item.id, item.quantity - 1) : null}
                                className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-900 disabled:opacity-40 disabled:cursor-not-allowed"
                                disabled={item.quantity === 1}
                              >
                                −
                              </button>
                              <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-900"
                              >
                                +
                              </button>
                            </div>

                            <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-xs hover:text-red-700 font-medium">Remove</button>
                          </div>

                          <p className="text-sm font-semibold text-gray-900 mt-2">{item.currency}{((item.discountedPrice ?? item.price) * item.quantity).toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 py-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium text-gray-900">{cartItems[0]?.currency}{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium text-gray-900">{cartItems[0]?.currency}{shipping.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-4 border-t-2 border-gray-900">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-gray-900">{cartItems[0]?.currency}{total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0">Place Order</button>

                  <p className="text-xs text-gray-500 text-center mt-4">By placing your order, you agree to our terms and conditions</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
