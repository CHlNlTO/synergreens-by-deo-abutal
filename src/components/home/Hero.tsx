import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image: string;
  imageAlt: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  image,
  imageAlt,
}) => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-400 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-secondary-400 blur-3xl"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 md:top-40 md:left-20 w-20 h-20 md:w-32 md:h-32 opacity-20 animate-bounce-slow">
        <Image
          src="/bolt.svg"
          alt="Decorative leaf"
          width={1920}
          height={1920}
          className="w-full h-full"
        />
      </div>
      <div
        className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-16 h-16 md:w-24 md:h-24 opacity-20 animate-bounce-slow"
        style={{ animationDelay: "1s" }}
      >
        <Image
          src="/favorite-plus.svg"
          alt="Decorative leaf"
          width={96}
          height={96}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 leading-tight font-heading animate-fade-in">
              {title}
            </h1>
            <p
              className="mt-6 text-lg md:text-xl text-neutral-600 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {subtitle}
            </p>
            <div
              className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                href={ctaLink}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors shadow-md w-full sm:w-auto"
              >
                {ctaText}
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
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white border border-primary-200 text-primary-700 hover:bg-primary-50 font-medium rounded-full transition-colors shadow-sm w-full sm:w-auto"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>

            {/* Trust indicators */}
            <div
              className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-neutral-500 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
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
                  className="mr-2 h-5 w-5 text-primary-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-sm">FDA Registered</span>
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
                  className="mr-2 h-5 w-5 text-primary-500"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span className="text-sm">100% Natural</span>
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
                  className="mr-2 h-5 w-5 text-primary-500"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span className="text-sm">Customer Favorite</span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div
            className="relative order-first lg:order-last animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="w-full h-full aspect-square rounded-full bg-gradient-to-tr from-primary-100 to-primary-50 p-4 md:p-6 lg:p-8">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white shadow-soft">
                  <Image
                    src={image}
                    alt={imageAlt}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute top-6 -left-4 md:top-10 md:-left-8 bg-white rounded-lg shadow-md px-3 py-2 animate-slide-up"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="flex items-center">
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
                  </div>
                  <span className="ml-2 text-xs font-medium">4.9/5 Rating</span>
                </div>
              </div>

              <div
                className="absolute bottom-6 -right-4 md:bottom-10 md:-right-8 bg-white rounded-lg shadow-md px-3 py-2 animate-slide-up"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-2">
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
                      className="h-4 w-4 text-primary-600"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-xs font-medium">
                    Natural Ingredients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
