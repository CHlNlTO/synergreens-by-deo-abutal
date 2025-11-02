"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types/product";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: Product;
  showDetails?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showDetails = true,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-tr from-primary-50 to-primary-100">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.imageAlt}
            width={500}
            height={500}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.new && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-secondary-500 text-white">
              New
            </span>
          )}
          {product.fdaRegistered && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-500 text-white">
              FDA Registered
            </span>
          )}
        </div>
      </div>

      {/* Product details */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
          <span className="ml-2 text-xs text-neutral-500">
            ({product.reviewCount} reviews)
          </span>
        </div>

        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-neutral-600 mb-4 flex-grow">
          {product.shortDescription}
        </p>

        {/* Price */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center">
            {product.discountedPrice ? (
              <>
                <span className="text-lg font-bold text-primary-700">
                  {product.currency} {product.discountedPrice.toLocaleString()}
                </span>
                <span className="ml-2 text-sm line-through text-neutral-500">
                  {product.currency} {product.price.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-primary-700">
                {product.currency} {product.price.toLocaleString()}
              </span>
            )}
          </div>

          {/* View details icon */}
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center p-2 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-full transition-colors"
          >
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
              className="h-5 w-5"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Quick shop buttons */}
        {showDetails && (
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <AddToCartButton
              product={product}
              className="flex-1 inline-flex items-center justify-center px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl shadow-md transition-colors"
            />
            <Link
              href="/contact"
              className="flex-1 inline-flex items-center justify-center px-5 py-2.5 border border-primary-600 text-primary-700 hover:bg-primary-50 font-medium rounded-xl shadow-md transition-colors"
            >
              Contact for Bulk
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
