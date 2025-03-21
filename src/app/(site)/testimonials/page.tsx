"use client";

import React, { useState } from "react";
import Image from "next/image";
import { testimonials, products } from "@/lib/data";

// Note: This would normally be in a separate metadata.ts file since this is a client component
export const testimonialsMetadata = {
  title: "Customer Testimonials",
  description:
    "Read success stories and experiences from our customers who have transformed their health with Synergreens products.",
};

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique product IDs from testimonials
  const productIds = Array.from(
    new Set(
      testimonials.map((testimonial) => testimonial.productId).filter(Boolean)
    )
  ) as string[];

  // Get product names from product IDs
  const productFilters = productIds.map((id) => {
    const product = products.find((p) => p.id === id);
    return {
      id,
      name: product ? product.name : "Unknown Product",
    };
  });

  // Filter testimonials based on active filter and search query
  const filteredTestimonials = testimonials.filter((testimonial) => {
    const matchesFilter = activeFilter
      ? testimonial.productId === activeFilter
      : true;
    const matchesSearch =
      searchQuery.trim() === ""
        ? true
        : testimonial.content
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          testimonial.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <main className="pt-16 pb-16 md:pt-24 md:pb-24">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-12 md:py-16 mb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
              Customer Testimonials
            </h1>
            <p className="text-lg text-neutral-700">
              Read about the experiences of our customers who have transformed
              their health with Synergreens products.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="container mx-auto px-4 md:px-6 mb-10">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === null
                    ? "bg-primary-600 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                All Testimonials
              </button>
              {productFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter.id
                      ? "bg-primary-600 text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search testimonials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-primary-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                  className="h-5 w-5 text-neutral-400"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        {filteredTestimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => {
              const relatedProduct = testimonial.productId
                ? products.find((p) => p.id === testimonial.productId)
                : null;

              return (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
                >
                  {/* Testimonial content */}
                  <div className="p-6 flex-grow">
                    {/* Rating */}
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={
                            i < testimonial.rating ? "currentColor" : "none"
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
                    </div>

                    {/* Testimonial text */}
                    <p className="text-neutral-700 mb-4">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Product tag */}
                    {relatedProduct && (
                      <div className="mb-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          {relatedProduct.name}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Customer info */}
                  <div className="p-6 bg-neutral-50 border-t border-neutral-100">
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
                      <div className="ml-auto text-xs text-neutral-500">
                        {testimonial.date}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10 text-neutral-400 mx-auto mb-4"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <h2 className="text-xl font-bold text-neutral-900 mb-2">
              No Testimonials Found
            </h2>
            <p className="text-neutral-600 mb-4">
              We couldn&apos;t find any testimonials matching your search
              criteria. Please try a different filter or search term.
            </p>
            <button
              onClick={() => {
                setActiveFilter(null);
                setSearchQuery("");
              }}
              className="inline-flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Submit testimonial section */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
                Share Your Synergreens Story
              </h2>
              <p className="text-primary-100 text-lg mb-6">
                Had a positive experience with our products? We&apos;d love to
                hear about it! Your story could inspire others on their health
                journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 bg-white text-primary-700 hover:bg-primary-50 font-medium rounded-full transition-colors shadow-md"
                >
                  Submit Your Testimonial
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
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative h-full min-h-[300px]">
              <Image
                src="/testimonial-cta.jpg"
                alt="Happy Synergreens customers"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 font-heading">
            Our Customer Satisfaction
          </h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            We&apos;re proud of the positive impact our products have made in
            the lives of our customers. Here&apos;s what the numbers say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">4.8</div>
            <p className="text-neutral-700">Average Rating</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <p className="text-neutral-700">Happy Customers</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
            <p className="text-neutral-700">Repeat Customers</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <p className="text-neutral-700">Satisfaction Rate</p>
          </div>
        </div>
      </section>
    </main>
  );
}
