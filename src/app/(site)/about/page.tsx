import React from "react";
import Image from "next/image";
import Link from "next/link";
import { distributor, faqs } from "@/lib/data";
import { Metadata } from "next";
import CallToAction from "@/components/common/CallToAction";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Synergreens International and Deo Abutal. Discover our mission, values, and commitment to providing premium health and wellness products.",
};

export default function AboutPage() {
  return (
    <main className="pt-16 pb-16 md:pt-24 md:pb-24">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-12 md:py-16 mb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
              About Synergreens
            </h1>
            <p className="text-lg text-neutral-700">
              Discover our story, mission, and the people behind our premium
              health and wellness products.
            </p>
          </div>
        </div>
      </section>

      {/* Company overview */}
      <section
        className="container mx-auto px-4 md:px-6 mb-16"
        id="synergreens"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 font-heading">
              Synergreens International
            </h2>
            <p className="text-lg text-neutral-700 mb-6">
              Established in the Philippines, Synergreens International is
              dedicated to providing premium health and wellness products
              designed to promote overall well-being and vitality.
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              Our commitment to quality begins with carefully selecting the
              finest natural ingredients for our formulations. We believe that
              nature provides the best solutions for health and wellness, which
              is why our products harness the power of superfoods and natural
              compounds.
            </p>
            <div className="flex items-center mb-8">
              <div className="h-px bg-primary-200 flex-grow mr-4"></div>
              <span className="text-xl font-bold text-primary-700">
                &ldquo;Live Long Abundantly!&rdquo;
              </span>
              <div className="h-px bg-primary-200 flex-grow ml-4"></div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
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
                  className="h-6 w-6 text-primary-600 mr-3 mt-0.5"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-neutral-700">
                  <strong className="text-neutral-900">
                    FDA Registered Products
                  </strong>{" "}
                  — All our products are registered with the Philippine Food and
                  Drug Administration, ensuring quality and safety.
                </span>
              </li>
              <li className="flex items-start">
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
                  className="h-6 w-6 text-primary-600 mr-3 mt-0.5"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-neutral-700">
                  <strong className="text-neutral-900">
                    Natural Formulations
                  </strong>{" "}
                  — We use only the finest natural ingredients in our products,
                  free from harmful chemicals and additives.
                </span>
              </li>
              <li className="flex items-start">
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
                  className="h-6 w-6 text-primary-600 mr-3 mt-0.5"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-neutral-700">
                  <strong className="text-neutral-900">
                    Customer Satisfaction
                  </strong>{" "}
                  — Thousands of satisfied customers have experienced the
                  benefits of our products.
                </span>
              </li>
            </ul>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors shadow-md"
            >
              Explore Our Products
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
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/about-syergreens-office.jpg"
                alt="Synergreens International Office"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-primary-400 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 h-20 w-20 bg-secondary-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Deo Abutal section */}
      <section className="bg-neutral-50 py-16 mb-16" id="deo-abutal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={distributor.image || "/images/deo-profile.jpg"}
                  alt={`${distributor.name} - Synergreens Grand Master Distributor`}
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-secondary-400 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 h-20 w-20 bg-primary-400 rounded-full opacity-20"></div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 font-heading">
                Meet {distributor.name}
              </h2>
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-4">
                  {distributor.role}
                </span>
              </div>
              <p className="text-lg text-neutral-700 mb-6">{distributor.bio}</p>

              {/* Achievements */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Achievements
                </h3>
                <ul className="space-y-3">
                  {distributor.achievements.map((achievement, index) => (
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

              {/* Social Links */}
              {distributor.socialLinks && (
                <div className="flex space-x-4 mb-8">
                  {distributor.socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow text-neutral-700 hover:text-primary-700"
                    >
                      {link.platform === "Facebook" && (
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
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      )}
                      {link.platform === "Instagram" && (
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
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      )}
                      {link.platform === "LinkedIn" && (
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
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              )}

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors shadow-md"
              >
                Contact {distributor.name.split(" ")[0]}
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
        </div>
      </section>

      {/* Mission and Values */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 font-heading">
              Our Mission & Values
            </h2>
            <p className="text-lg text-neutral-700">
              At Synergreens International, we&apos;re driven by a passion for
              helping people achieve optimal health and wellness through
              natural, high-quality products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 mb-4">
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
                  className="h-6 w-6 text-primary-600"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Our Mission
              </h3>
              <p className="text-neutral-700">
                To empower individuals to take control of their health through
                premium, natural supplements and wellness products that enhance
                quality of life. We strive to make health accessible to
                everyone, promoting longevity and abundant living.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 mb-4">
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
                  className="h-6 w-6 text-primary-600"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Our Vision
              </h3>
              <p className="text-neutral-700">
                To be the leading provider of natural health solutions in the
                Philippines and beyond, recognized for our commitment to
                quality, innovation, and customer satisfaction. We envision a
                world where everyone has access to the tools they need to live a
                healthier, more vibrant life.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Value 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                Quality
              </h4>
              <p className="text-neutral-700">
                We are committed to delivering products of the highest quality,
                using only the finest natural ingredients and adhering to strict
                manufacturing standards.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                Integrity
              </h4>
              <p className="text-neutral-700">
                We operate with honesty and transparency in all our business
                dealings, building trust with our customers, partners, and
                distributors.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                Innovation
              </h4>
              <p className="text-neutral-700">
                We continuously explore new ingredients, formulations, and
                technologies to deliver the most effective wellness solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-neutral-50 py-16 mb-16" id="faqs">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 font-heading">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-700">
                Find answers to common questions about our products and
                services.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-700">{faq.answer}</p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {faq.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <CallToAction />
    </main>
  );
}
