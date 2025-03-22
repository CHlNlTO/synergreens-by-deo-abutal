import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types/product";

interface FeaturedProductsProps {
  title: string;
  subtitle: string;
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  title,
  subtitle,
  products,
}) => {
  // Filter to get only featured products
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-heading">
            {title}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">{subtitle}</p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Product image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-tr from-primary-50 to-primary-100">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
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
                    <span className="ml-1 text-sm font-medium">
                      {product.rating}
                    </span>
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
                          {product.currency}{" "}
                          {product.discountedPrice.toLocaleString()}
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

                  {/* View details button */}
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
              </div>
            </div>
          ))}
        </div>

        {/* View all products button */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-700 hover:bg-primary-50 font-medium rounded-full transition-colors"
          >
            View All Products
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
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
