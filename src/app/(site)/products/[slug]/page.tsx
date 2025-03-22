import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, testimonials } from "@/lib/data";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Find testimonials for this product
  const productTestimonials = testimonials.filter(
    (t) => t.productId === product.id
  );

  return (
    <main className="pt-16 pb-16 md:pt-24 md:pb-24">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-primary-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-neutral-400"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <Link
                  href="/products"
                  className="ml-1 text-sm font-medium text-neutral-500 hover:text-primary-600 md:ml-2"
                >
                  Products
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-neutral-400"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <span className="ml-1 text-sm font-medium text-neutral-500 md:ml-2 truncate max-w-[150px] sm:max-w-none">
                  {product.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Product details */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="sticky top-24">
            <div className="bg-gradient-to-tr from-primary-50 to-primary-100 rounded-3xl p-8 flex items-center justify-center overflow-hidden">
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={500}
                height={500}
                className="max-w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {product.fdaRegistered && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  FDA Registered
                </span>
              )}
              {product.new && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                  New Product
                </span>
              )}
              {product.categories.map((category: string) => (
                <span
                  key={category}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={
                      i < Math.floor(product.rating) ? "currentColor" : "none"
                    }
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
                <span className="ml-2 text-sm font-medium text-neutral-700">
                  {product.rating.toFixed(1)}
                </span>
              </div>
              <span className="ml-2 text-sm text-neutral-500">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-lg text-neutral-700 mb-4">
                {product.longDescription}
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Key Benefits:
              </h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
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
                      className="h-5 w-5 text-primary-600 mr-3 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price & Order Options */}
            <div className="bg-neutral-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Choose Package:
              </h3>

              {product.availableSizes && (
                <div className="space-y-3 mb-6">
                  {product.availableSizes.map(
                    (
                      size: {
                        size: string;
                        price: number;
                        discountedPrice?: number;
                      },
                      index: number
                    ) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="radio"
                          id={`size-${index}`}
                          name="package-size"
                          defaultChecked={index === 0}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                        />
                        <label
                          htmlFor={`size-${index}`}
                          className="ml-3 flex-1"
                        >
                          <span className="block text-sm font-medium text-neutral-700">
                            {size.size}
                          </span>
                        </label>
                        <div>
                          {size.discountedPrice ? (
                            <div className="flex items-center">
                              <span className="text-lg font-bold text-primary-700">
                                {product.currency}{" "}
                                {size.discountedPrice.toLocaleString()}
                              </span>
                              <span className="ml-2 text-sm line-through text-neutral-500">
                                {product.currency} {size.price.toLocaleString()}
                              </span>
                            </div>
                          ) : (
                            <span className="text-lg font-bold text-primary-700">
                              {product.currency} {size.price.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}

              {/* Order buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 inline-flex items-center justify-center px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors shadow-md">
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
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button>
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 border border-primary-600 text-primary-700 hover:bg-primary-50 font-medium rounded-full transition-colors"
                >
                  Contact for Bulk
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Payment & Shipping Info */}
            <div className="border-t border-b border-neutral-200 py-4 mb-8">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center">
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
                    className="h-5 w-5 text-primary-600 mr-3"
                  >
                    <rect
                      x="1"
                      y="4"
                      width="22"
                      height="16"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                  <span className="text-sm text-neutral-700">
                    Secure payment
                  </span>
                </div>
                <div className="flex items-center">
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
                    className="h-5 w-5 text-primary-600 mr-3"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="M7 15h0"></path>
                    <circle cx="12" cy="10" r="2"></circle>
                    <path d="M17 15h0"></path>
                  </svg>
                  <span className="text-sm text-neutral-700">
                    Cash on delivery available
                  </span>
                </div>
                <div className="flex items-center">
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
                    className="h-5 w-5 text-primary-600 mr-3"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                  </svg>
                  <span className="text-sm text-neutral-700">
                    30-day satisfaction guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 font-heading">
          Premium Ingredients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.ingredients.map(
            (
              ingredient: {
                name: string;
                description: string;
                benefits: string[];
              },
              index: number
            ) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {ingredient.name}
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  {ingredient.description}
                </p>
                <h4 className="text-sm font-medium text-neutral-800 mb-2">
                  Benefits:
                </h4>
                <ul className="space-y-1">
                  {ingredient.benefits.map((benefit: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-neutral-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary-500 mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      {productTestimonials.length > 0 && (
        <section className="container mx-auto px-4 md:px-6 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 font-heading">
            Customer Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Rating */}
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-neutral-700 mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Customer info */}
                <div className="flex items-center">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover mr-3"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                      <span className="text-primary-700 font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-medium text-neutral-900">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center text-sm text-neutral-500">
                      {testimonial.role && (
                        <span className="mr-2">{testimonial.role}</span>
                      )}
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-primary-600 text-primary-700 hover:bg-primary-50 font-medium rounded-full transition-colors"
            >
              View All Testimonials
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </section>
      )}

      {/* Related Products */}
      <section className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 font-heading">
          You May Also Like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products
            .filter(
              (p) =>
                p.id !== product.id &&
                p.categories.some((c: string) => product.categories.includes(c))
            )
            .slice(0, 4)
            .map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Product image */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-tr from-primary-50 to-primary-100">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.imageAlt}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {relatedProduct.new && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-secondary-500 text-white">
                        New
                      </span>
                    )}
                  </div>
                </div>

                {/* Product details */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4 flex-grow">
                    {relatedProduct.shortDescription}
                  </p>

                  {/* Price */}
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center">
                      {relatedProduct.discountedPrice ? (
                        <>
                          <span className="text-lg font-bold text-primary-700">
                            {relatedProduct.currency}{" "}
                            {relatedProduct.discountedPrice.toLocaleString()}
                          </span>
                          <span className="ml-2 text-sm line-through text-neutral-500">
                            {relatedProduct.currency}{" "}
                            {relatedProduct.price.toLocaleString()}
                          </span>
                        </>
                      ) : (
                        <span className="text-lg font-bold text-primary-700">
                          {relatedProduct.currency}{" "}
                          {relatedProduct.price.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* View details button */}
                    <Link
                      href={`/products/${relatedProduct.slug}`}
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
      </section>
    </main>
  );
}
