import React from "react";
import Image from "next/image";
import { products } from "@/lib/data";
import ProductCard from "@/components/products/ProductCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore our range of premium health and wellness products. From green superfoods to supplements, find the perfect solution for your wellbeing.",
};

export default function ProductsPage() {
  // Get unique categories from all products
  const categories = Array.from(
    new Set(products.flatMap((product) => product.categories))
  );

  return (
    <main className="pt-16 pb-16 md:pt-24 md:pb-24">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-12 md:py-16 mb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
              Our Premium Products
            </h1>
            <p className="text-lg text-neutral-700">
              Discover our range of carefully formulated health and wellness
              products designed to help you live a healthier, more vibrant life.
            </p>
          </div>
        </div>
      </section>

      {/* Product sections by category */}
      <div className="container mx-auto px-4 md:px-6">
        {categories.map((category) => {
          const categoryProducts = products.filter((product) =>
            product.categories.includes(category)
          );

          return (
            <section key={category} className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 font-heading">
                  {category}
                </h2>
                <div className="h-px bg-neutral-200 flex-grow ml-6"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Benefits section */}
      <section className="bg-neutral-50 py-16 my-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 font-heading">
              Why Choose Synergreens Products?
            </h2>
            <p className="text-lg text-neutral-700">
              Our products are designed with your health in mind, using only the
              finest natural ingredients to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Natural Ingredients
              </h3>
              <p className="text-neutral-700">
                We source only the highest quality natural ingredients, free
                from harmful chemicals and additives.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary-600"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Scientifically Formulated
              </h3>
              <p className="text-neutral-700">
                Our products are carefully developed by health experts to ensure
                maximum effectiveness and benefit.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                FDA Registered
              </h3>
              <p className="text-neutral-700">
                Our products are registered with the Philippine Food and Drug
                Administration, ensuring quality and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="container mx-auto px-4 md:px-6 mb-12">
        <div className="bg-primary-600 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-heading">
                Ready to Transform Your Health?
              </h2>
              <p className="text-primary-100 text-lg mb-6">
                Start your journey to optimal health today with Synergreens
                premium products. Contact us for special offers and bulk
                discounts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 bg-white text-primary-700 hover:bg-primary-50 font-medium rounded-full transition-colors shadow-md"
                >
                  Contact for Orders
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
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-5 py-3 bg-transparent border-2 border-white text-white hover:bg-primary-700 font-medium rounded-full transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative h-full min-h-[300px]">
              <Image
                src="/images/products-cta.jpg"
                alt="Synergreens products arrangement"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
