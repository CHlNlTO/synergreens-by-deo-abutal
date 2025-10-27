"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
  clearCart,
} from "@/lib/cart";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<any[]>([]); // start empty to avoid SSR mismatch
  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [barangay, setBarangay] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");

  // ✅ Load cart only on the client
  useEffect(() => {
    setIsClient(true);
    setCartItems(getCartItems());

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

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setBarangay("");
    setCity("");
    setProvince("");
    setPostal("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    if (!name || !email || !phone || !address || !city || !postal) {
      toast.error("Please fill required fields.");
      return;
    }

    const orderData = {
      name,
      email,
      phone,
      address,
      barangay,
      city,
      province,
      postal,
      cartItems,
      total,
    };

    setIsSubmitting(true);
    const toastId = toast.loading("Sending order...");

    try {
      const [emailRes, sheetRes] = await Promise.all([
        fetch("/api/send-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        }),
        fetch("/api/save-to-sheet", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        }),
      ]);

      if (emailRes.ok && sheetRes.ok) {
        toast.success("✅ Order sent and saved!", { id: toastId });
        clearCart();
        setCartItems([]);
        resetForm();
      } else {
        toast.error("Failed to send or save order.", { id: toastId });
      }
    } catch (err) {
      console.error("Order send error:", err);
      toast.error("Network error: failed to send order.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Checkout
          </h1>
          <p className="text-gray-600">
            Complete your order in just a few steps
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left column */}
          <div className="lg:col-span-2 flex flex-col gap-6 h-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Contact info */}
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                    1
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Contact Information
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+63 912 345 6789"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping */}
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mt-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                    2
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Shipping Address
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <textarea
                      placeholder="Block 5 Lot 4, San Sebastian Village"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      rows={2}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Barangay *
                    </label>
                    <input
                      type="text"
                      placeholder="Darasa"
                      value={barangay}
                      onChange={(e) => setBarangay(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        placeholder="Tanauan"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Province
                      </label>
                      <input
                        type="text"
                        placeholder="Batangas"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        placeholder="4232"
                        value={postal}
                        onChange={(e) => setPostal(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <input
                      id="saveAddress"
                      type="checkbox"
                      className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label
                      htmlFor="saveAddress"
                      className="text-sm text-gray-600"
                    >
                      Save this address for future orders
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Right column: Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 sticky top-8 h-full">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              {/* Avoid hydration mismatch */}
              {!isClient ? (
                <div className="text-center py-8 text-gray-400">
                  <p>Loading cart...</p>
                </div>
              ) : cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">
                    <svg
                      className="w-16 h-16 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
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
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 text-sm truncate">
                            {item.name}
                          </h3>
                          {item.variantLabel && (
                            <p className="text-xs text-gray-500 mt-1">
                              {item.variantLabel}
                            </p>
                          )}

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1">
                              <button
                                onClick={() =>
                                  item.quantity > 1
                                    ? updateCartQuantity(
                                        item.id,
                                        item.quantity - 1
                                      )
                                    : null
                                }
                                className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-900 disabled:opacity-40 disabled:cursor-not-allowed"
                                disabled={item.quantity === 1}
                              >
                                −
                              </button>
                              <span className="text-sm font-medium w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateCartQuantity(item.id, item.quantity + 1)
                                }
                                className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-900"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 text-xs hover:text-red-700 font-medium"
                            >
                              Remove
                            </button>
                          </div>

                          <p className="text-sm font-semibold text-gray-900 mt-2">
                            {item.currency}
                            {(
                              (item.discountedPrice ?? item.price) *
                              item.quantity
                            ).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 py-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium text-gray-900">
                        {cartItems[0]?.currency}
                        {subtotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium text-gray-900">
                        {cartItems[0]?.currency}
                        {shipping.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-4 border-t-2 border-gray-900">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {cartItems[0]?.currency}
                      {total.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    } bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0`}
                  >
                    {isSubmitting ? "Sending order..." : "Place Order"}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By placing your order, you agree to our terms and conditions
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
