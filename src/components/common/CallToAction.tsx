import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="bg-primary-600 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
              Join Us on Our Mission
            </h2>
            <p className="text-primary-100 text-lg mb-6">
              Whether you&apos;re looking to improve your health with our
              premium products or interested in business opportunities as a
              distributor, we&apos;re here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 bg-white text-primary-700 hover:bg-primary-50 font-medium rounded-full transition-colors shadow-md"
              >
                Contact Us
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
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-5 py-3 bg-transparent border-2 border-white text-white hover:bg-primary-700 font-medium rounded-full transition-colors"
              >
                Explore Products
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative h-full min-h-[300px]">
            <Image
              src="/images/about-cta.jpg"
              alt="Join Synergreens Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
