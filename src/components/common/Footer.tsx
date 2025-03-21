import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavItem } from "@/types/product";

interface FooterProps {
  navItems: NavItem[];
}

const Footer: React.FC<FooterProps> = ({ navItems }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main footer */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/sgi-logo.png"
                alt="Synergreens Logo"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-neutral-400 max-w-xs">
              Synergreens International offers premium health and wellness
              products designed to promote overall well-being and vitality.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/synergreens"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/synergreens"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
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
                  className="h-5 w-5"
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
                className="text-neutral-400 hover:text-primary-400 transition-colors"
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
                  className="h-5 w-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.slice(0, 4).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-medium text-lg mb-5">
              Our Products
            </h3>
            <ul className="space-y-3">
              {navItems
                .find((item) => item.label === "Products")
                ?.subItems?.map((product) => (
                  <li key={product.label}>
                    <Link
                      href={product.href}
                      className="text-neutral-400 hover:text-primary-400 transition-colors"
                    >
                      {product.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4">
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
                  className="h-5 w-5 text-neutral-400 mr-2 mt-0.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-neutral-400">Tanauan City, Batangas</span>
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
                  className="h-5 w-5 text-neutral-400 mr-2 mt-0.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-neutral-400">+63 917 133 7780</span>
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
                  className="h-5 w-5 text-neutral-400 mr-2 mt-0.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-neutral-400">drix331@gmail.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors text-sm"
              >
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-500">
              &copy; {currentYear} Synergreens International. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-sm text-neutral-500 hover:text-neutral-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-neutral-500 hover:text-neutral-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/faq"
                className="text-sm text-neutral-500 hover:text-neutral-400 transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-neutral-600">
            <p>
              Synergreens International -{" "}
              <span className="text-primary-400">
                &ldquo;Live Long Abundantly!&rdquo;
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
