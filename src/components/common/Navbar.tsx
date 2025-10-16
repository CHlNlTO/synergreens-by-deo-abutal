"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";
import { getCartItems } from "@/lib/cart";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import CartSheetContent from "../Sheet/CartSheetContent";
import { NavItem } from "../../types/product";

interface NavbarProps {
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [isCartAnimating, setIsCartAnimating] = useState(false);
  const pathname = usePathname();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for cart updates
  const updateCart = (event: CustomEvent<{ productName?: string }>) => {
    const items = getCartItems() || [];
    const total = items.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(total);
  
    // ✅ Only animate and show toast when a product is added
    if (event.detail?.productName) {
      setIsCartAnimating(true);
      setTimeout(() => setIsCartAnimating(false), 400);
  
      toast.success(`${event.detail.productName} added to your cart!`, {
        duration: 2000,
        style: {
          background: "#16a34a",
          color: "#fff",
          borderRadius: "9999px",
          fontWeight: 500,
        },
      });
    }
  };
  
  
  
  useEffect(() => {
    const handleCartEvent = (e: Event) => updateCart(e as CustomEvent<{ productName?: string }>);
    window.addEventListener("cart-updated", handleCartEvent);
    updateCart(new CustomEvent("cart-updated")); // initialize count
  
    return () => window.removeEventListener("cart-updated", handleCartEvent);
  }, []);
  
  

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/sgi-logo.png"
              alt="Synergreens Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* -------- Desktop Navigation -------- */}
          <nav className="hidden lg:flex items-center space-x-1">
            {items.map((item) => (
              <div key={item.label} className="relative group">
                {item.subItems ? (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                      pathname === item.href ||
                      pathname.startsWith(`${item.href}/`)
                        ? "text-primary-700 bg-primary-50"
                        : "text-neutral-700 hover:text-primary-600 hover:bg-primary-50"
                    }`}
                  >
                    {item.label}
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
                      className={`ml-1 h-4 w-4 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? "text-primary-700 bg-primary-50"
                        : "text-neutral-700 hover:text-primary-600 hover:bg-primary-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {item.subItems && (
                  <div
                    className={`absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                      activeDropdown === item.label
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }`}
                  >
                    <div className="py-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* -------- Desktop Cart + CTA -------- */}
          <div className="hidden lg:flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className={`relative p-2 rounded-full hover:bg-primary-50 transition-transform ${
                    isCartAnimating ? "scale-140" : ""
                  }`}
                >
                  <ShoppingCart className="h-6 w-6 text-neutral-700 hover:text-primary-600 transition-colors" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[90%] sm:max-w-sm bg-white">
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                  <SheetDescription>
                    Review your selected items before checkout.
                  </SheetDescription>
                </SheetHeader>

                <CartSheetContent />
              </SheetContent>
            </Sheet>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors shadow-sm"
            >
              Order Now
            </Link>
          </div>

          {/* -------- Mobile Buttons -------- */}
          <div className="flex lg:hidden items-center space-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className={`relative p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-transform ${
                    isCartAnimating ? "scale-140" : ""
                  }`}
                >
                  <ShoppingCart className="h-6 w-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[90%] sm:max-w-sm bg-white">
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                  <SheetDescription>
                    Review your selected items before checkout.
                  </SheetDescription>
                </SheetHeader>

                <CartSheetContent />

                <SheetFooter className="mt-6">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors"
                  >
                    Proceed to Checkout
                  </Link>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            {/* Menu toggle unchanged */}
            <button
              className="p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-primary-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
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
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* -------- Mobile Menu -------- */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ${
          isMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden py-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex flex-col space-y-1">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={`flex justify-between items-center px-4 py-2 rounded-md text-sm font-medium ${
                        pathname === item.href
                          ? "text-primary-700 bg-primary-50"
                          : "text-neutral-700 hover:text-primary-600 hover:bg-primary-50"
                      }`}
                    >
                      {item.label}
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
                        className={`ml-1 h-4 w-4 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    <div
                      className={`mt-1 ml-4 border-l-2 border-primary-100 pl-4 space-y-1 transition-all duration-200 ${
                        activeDropdown === item.label
                          ? "max-h-screen opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 rounded-md"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsMenuOpen(false);
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      pathname === item.href
                        ? "text-primary-700 bg-primary-50"
                        : "text-neutral-700 hover:text-primary-600 hover:bg-primary-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-3 inline-flex w-full items-center justify-center px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
