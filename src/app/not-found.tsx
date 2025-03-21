import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-neutral-50 px-4 py-16">
      <div className="container mx-auto max-w-md text-center">
        <div className="mb-8">
          <Image
            src="/images/logo.svg"
            alt="Synergreens Logo"
            width={180}
            height={50}
            className="mx-auto"
          />
        </div>

        <div className="text-9xl font-bold text-primary-600 mb-4">404</div>

        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
          Page Not Found
        </h1>

        <p className="text-lg text-neutral-700 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors shadow-md"
          >
            Back to Home
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-700 hover:bg-primary-50 font-medium rounded-full transition-colors"
          >
            Explore Products
          </Link>
        </div>

        <div className="mt-16">
          <p className="text-neutral-500 text-sm">
            Need assistance?{" "}
            <Link
              href="/contact"
              className="text-primary-600 hover:text-primary-700"
            >
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
