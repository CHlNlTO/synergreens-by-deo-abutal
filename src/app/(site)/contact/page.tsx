"use client";

import React, { useState } from "react";
import Image from "next/image";
import { distributor } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "product-inquiry", // Default value
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate form submission with a timeout
    try {
      const response = await fetch("../api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Something went wrong.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        interest: "product-inquiry",
      });
    } catch (err: any) {
      setError(
        err.message || "An error occurred while submitting the form. Please try again."
      );
    }
  };

  return (
    <main className="pt-16 pb-16 md:pt-24 md:pb-24">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-12 md:py-16 mb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
              Contact Us
            </h1>
            <p className="text-lg text-neutral-700">
              Have questions about our products or interested in becoming a
              distributor? Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form and info */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 font-heading">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
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
                  className="h-10 w-10 text-green-500 mx-auto mb-4"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-neutral-700 mb-4">
                  Your message has been sent successfully. Well get back to you
                  as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-lg border border-neutral-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-lg border border-neutral-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-neutral-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  {/* Interest field */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      I&apos;m interested in *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-lg border border-neutral-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    >
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="bulk-order">Bulk Order</option>
                      <option value="distributorship">
                        Becoming a Distributor
                      </option>
                      <option value="partnership">Business Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg border border-neutral-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="block w-full rounded-lg border border-neutral-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  ></textarea>
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center w-full px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-md ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
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
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact information */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 font-heading">
              Contact Information
            </h2>

            {/* Distributor contact */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <div className="flex items-start">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full mr-4">
                  <Image
                    src={distributor.image || "/images/deo-profile.jpg"}
                    alt={distributor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {distributor.name}
                  </h3>
                  <p className="text-sm text-neutral-600">{distributor.role}</p>

                  {distributor.contactInfo && (
                    <ul className="mt-3 space-y-2">
                      {distributor.contactInfo.phone && (
                        <li className="flex items-center text-sm">
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
                            className="h-4 w-4 text-primary-600 mr-2"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                          <a
                            href={`tel:${distributor.contactInfo.phone.replace(
                              /\s+/g,
                              ""
                            )}`}
                            className="text-neutral-700 hover:text-primary-700"
                          >
                            {distributor.contactInfo.phone}
                          </a>
                        </li>
                      )}
                      {distributor.contactInfo.email && (
                        <li className="flex items-center text-sm">
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
                            className="h-4 w-4 text-primary-600 mr-2"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                          <a
                            href={`mailto:${distributor.contactInfo.email}`}
                            className="text-neutral-700 hover:text-primary-700"
                          >
                            {distributor.contactInfo.email}
                          </a>
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Company contact details */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Synergreens International
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
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
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-neutral-700">
                    123 Wellness Avenue
                    <br />
                    Makati City, Metro Manila
                    <br />
                    Philippines 1200
                  </span>
                </li>
                <li className="flex items-start">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div>
                    <a
                      href="tel:+63282345678"
                      className="text-neutral-700 hover:text-primary-700 block"
                    >
                      +63 (2) 8234 5678
                    </a>
                    <a
                      href="tel:+639171234567"
                      className="text-neutral-700 hover:text-primary-700 block"
                    >
                      +63 917 123 4567
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a
                    href="mailto:info@synergreens.com"
                    className="text-neutral-700 hover:text-primary-700"
                  >
                    info@synergreens.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Business hours */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Business Hours
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-neutral-700">Monday - Friday</span>
                  <span className="font-medium text-neutral-900">
                    9:00 AM - 6:00 PM
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-700">Saturday</span>
                  <span className="font-medium text-neutral-900">
                    9:00 AM - 3:00 PM
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-700">Sunday</span>
                  <span className="font-medium text-neutral-900">Closed</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <p className="text-sm text-neutral-600">
                  Note: Response time for inquiries is usually within 24 hours
                  on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 bg-neutral-50">
            <h2 className="text-xl font-bold text-neutral-900 mb-2 font-heading">
              Visit Our Office
            </h2>
            <p className="text-neutral-700">
              We&apos;re conveniently located in the heart of Makati City. Drop
              by during business hours to learn more about our products.
            </p>
          </div>
          <div className="h-96 w-full bg-neutral-200 relative">
            {/* This would be replaced with an actual map in a real implementation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-neutral-400 mx-auto mb-4"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p className="text-neutral-600">
                  Map placeholder - In a real implementation, this would be
                  replaced with a Google Maps or similar integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 font-heading">
            Connect With Us
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Follow us on social media for the latest updates, promotions, and
            health tips.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com/synergreens"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-600 hover:text-white transition-colors"
              aria-label="Facebook"
            >
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
                className="h-6 w-6"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com/synergreens"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-600 hover:text-white transition-colors"
              aria-label="Instagram"
            >
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
                className="h-6 w-6"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://youtube.com/synergreens"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-600 hover:text-white transition-colors"
              aria-label="YouTube"
            >
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
                className="h-6 w-6"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a
              href="https://twitter.com/synergreens"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-600 hover:text-white transition-colors"
              aria-label="Twitter"
            >
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
                className="h-6 w-6"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
