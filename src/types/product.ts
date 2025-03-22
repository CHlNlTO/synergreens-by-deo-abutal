export interface Ingredient {
  name: string;
  description: string;
  benefits: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  discountedPrice?: number;
  currency: string;
  image: string;
  imageAlt: string;
  ingredients: Ingredient[];
  benefits: string[];
  fdaRegistered: boolean;
  fdaRegistrationNumber?: string;
  featured: boolean;
  new: boolean;
  stockAvailable: boolean;
  categories: string[];
  tags: string[];
  rating: number;
  reviewCount: number;
  availableSizes?: {
    size: string;
    price: number;
    discountedPrice?: number;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  image?: string;
  content: string;
  rating: number;
  location: string;
  date: string;
  productId?: string;
  featured: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface Distributor {
  id: string;
  name: string;
  role: string;
  image?: string;
  bio: string;
  achievements: string[];
  socialLinks?: {
    platform: string;
    url: string;
  }[];
  contactInfo?: {
    email?: string;
    phone?: string;
    location?: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  subItems?: Omit<NavItem, "subItems">[];
}
