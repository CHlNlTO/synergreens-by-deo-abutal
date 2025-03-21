import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { products, testimonials, distributor } from "@/lib/data";

export const metadata = {
  title: "Synergreens - Live Long Abundantly!",
  description:
    "Premium health and wellness products by Deo Abutal. Explore our range of natural supplements and powdered drinks for optimal health.",
};

const HomePage = () => {
  return (
    <main>
      {/* Hero section */}
      <Hero
        title="Enhance Your Health With Natural Superfoods"
        subtitle="Discover premium health and wellness products crafted from nature's finest ingredients. Join thousands of satisfied customers on their journey to better health."
        ctaText="Explore Products"
        ctaLink="/products"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/about"
        image="/hero.png"
        imageAlt="Synergreens health and wellness products arranged artfully with natural ingredients"
      />

      {/* Benefits section */}
      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-heading">
              Why Choose Synergreens?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Our products are designed with your health in mind, using only the
              finest natural ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-5">
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Scientifically Formulated
              </h3>
              <p className="text-neutral-600">
                Our products are carefully developed by health experts to ensure
                maximum effectiveness and benefit.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-5">
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
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                All-Natural Ingredients
              </h3>
              <p className="text-neutral-600">
                We source only the highest quality natural ingredients, with no
                artificial additives or harmful chemicals.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-5">
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
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                FDA Registered
              </h3>
              <p className="text-neutral-600">
                Our products meet rigorous safety standards and are officially
                registered with the Philippine FDA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products section */}
      <FeaturedProducts
        title="Our Premium Products"
        subtitle="Discover our carefully crafted health and wellness solutions"
        products={products}
      />

      {/* About Deo Abutal section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative mx-auto lg:mx-0 max-w-2xl">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={distributor.image || "/deo-profile.jpg"}
                  alt={`${distributor.name} - Synergreens Grand Master Distributor`}
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 h-20 w-20 bg-secondary-400 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 h-16 w-16 bg-primary-400 rounded-full opacity-20"></div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-heading mb-6">
                Meet {distributor.name}
              </h2>
              <p className="text-lg text-neutral-700 mb-6">{distributor.bio}</p>

              {/* Achievements */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Achievements
                </h3>
                <ul className="space-y-3">
                  {distributor.achievements
                    .slice(0, 3)
                    .map((achievement, index) => (
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
                        <span className="text-neutral-700">{achievement}</span>
                      </li>
                    ))}
                </ul>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors shadow-md"
              >
                Learn More About Deo
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
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-heading">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Join thousands of satisfied customers who have transformed their
              health with Synergreens products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials
              .filter((t) => t.featured)
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
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

          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-700 hover:bg-primary-50 font-medium rounded-full transition-colors"
            >
              View All Testimonials
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

      {/* CTA section */}
      <section className="py-16 md:py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Ready to Transform Your Health?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-100">
              Start your journey to optimal health today with Synergreens
              premium products.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-700 hover:bg-primary-50 font-medium rounded-full transition-colors shadow-md w-full sm:w-auto"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-primary-700 font-medium rounded-full transition-colors w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
            <p className="mt-6 text-primary-200 text-sm">
              <span className="font-bold">
                &ldquo;Live Long Abundantly!&rdquo;
              </span>{" "}
              — Synergreens International
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
