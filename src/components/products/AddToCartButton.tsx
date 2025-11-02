"use client";

import React from "react";
import { addToCart } from "@/lib/cart";

interface ProductVariant {
  id: string;
  label: string;
  price: number;
  discountedPrice?: number;
}

interface Product {
  id: string;
  name: string;
  image: string;
  currency: string;
  variants?: ProductVariant[];
  price: number;
}

interface AddToCartButtonProps {
  product: Product;
  className?: string; // ✅ Allows custom styling (fixes TS error)
}

export default function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const handleAddToCart = () => {
    // 🔹 Find the selected variant from radio buttons (if any)
    const checked = document.querySelector(
      'input[name="package-variant"]:checked'
    ) as HTMLInputElement | null;

    let selectedVariant: ProductVariant | undefined;

    if (checked && product.variants) {
      const variantId = checked.value;
      selectedVariant = product.variants.find((v) => v.id === variantId);
    }

    // 🔹 Fallback to first variant or default product
    if (!selectedVariant) {
      selectedVariant =
        product.variants?.[0] || { id: product.id, label: "", price: product.price };
    }

    const finalPrice = selectedVariant.discountedPrice ?? selectedVariant.price;

    // 🔹 Add to cart
    addToCart({
      id: `${product.id}-${selectedVariant.id}`, // unique key for each variant
      name: product.name,
      price: finalPrice,
      discountedPrice: selectedVariant.discountedPrice,
      variantLabel: selectedVariant.label,
      image: product.image,
      currency: product.currency,
      quantity: 1,
    });

    // 🟢 Toast handled globally (Navbar or toast listener)
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`flex-1 inline-flex items-center justify-center px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors shadow-md ${className || ""}`}
    >
      Add to Cart
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-2 h-5 w-5"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    </button>
  );
}
