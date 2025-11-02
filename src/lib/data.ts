import {
  Distributor,
  FAQ,
  NavItem,
  Product,
  Testimonial,
} from "../types/product";

export const products: Product[] = [
  {
    id: "product-001",
    slug: "synergreens-powdered-mixed-juice",
    name: "Synergreens Powdered Mixed Juice",
    shortDescription:
      "A powerful blend of eleven green superfoods in one delicious drink",
    longDescription:
      "Synergreens is a powdered juice blend formulated from eleven green superfoods, providing a potent source of antioxidants, vitamins, and minerals. This combination aids in detoxifying free radicals, repairing damaged cells, and neutralizing body acidity. The perfect daily boost for your health and vitality.",
    price: 2400,
    currency: "PHP",
    image: "/synergreens-powdered-juice-30-sachets.avif",
    imageAlt:
      "Synergreens Powdered Mixed Juice packaging showing fresh green ingredients",
    ingredients: [
      {
        name: "Barley Grass",
        description: "Young grass of barley plant",
        benefits: [
          "Rich in vitamins A and C",
          "Supports immune function",
          "High antioxidant content",
        ],
      },
      {
        name: "Wheat Grass",
        description: "Young grass of wheat plant",
        benefits: [
          "Contains chlorophyll",
          "Aids in detoxification",
          "Supports cellular health",
        ],
      },
      {
        name: "Moringa",
        description: "Leaves of the Moringa oleifera tree",
        benefits: [
          "Packed with nutrients",
          "High in calcium and potassium",
          "Contains all 9 essential amino acids",
        ],
      },
      {
        name: "Celery",
        description: "Stalks and leaves",
        benefits: [
          "Provides dietary fiber",
          "Rich in antioxidants",
          "Supports digestive health",
        ],
      },
      {
        name: "Leeks",
        description: "Related to onions and garlic",
        benefits: [
          "Source of vitamins K and B6",
          "Contains beneficial compounds",
          "Supports heart health",
        ],
      },
      {
        name: "Broccoli",
        description: "Cruciferous vegetable",
        benefits: [
          "Contains sulforaphane",
          "Supports cellular health",
          "Rich in fiber",
        ],
      },
      {
        name: "Spinach",
        description: "Leafy green vegetable",
        benefits: [
          "High in iron and folate",
          "Supports eye health",
          "Contains nitrates for heart health",
        ],
      },
      {
        name: "Spirulina",
        description: "Blue-green algae",
        benefits: [
          "Rich in protein",
          "Contains B vitamins",
          "Powerful antioxidant properties",
        ],
      },
      {
        name: "Bitter Gourd",
        description: "Tropical vine vegetable",
        benefits: [
          "May regulate blood sugar",
          "Contains vitamin C",
          "Rich in antioxidants",
        ],
      },
      {
        name: "Stevia",
        description: "Natural sweetener from plant leaves",
        benefits: [
          "Zero-calorie sweetener",
          "Natural alternative to sugar",
          "No impact on blood glucose",
        ],
      },
      {
        name: "Green Apple",
        description: "Fresh green apple",
        benefits: [
          "Adds flavor",
          "Contains additional nutrients",
          "Source of fiber",
        ],
      },
    ],
    benefits: [
      "Detoxifies free radicals",
      "Repairs damaged cells",
      "Neutralizes body acidity",
      "Boosts immune system",
      "Enhances overall health",
      "Increases energy levels",
    ],
    fdaRegistered: true,
    fdaRegistrationNumber: "FDA-PH12345",
    featured: true,
    new: false,
    stockAvailable: true,
    categories: ["Nutraceuticals"],
    // categories: ["Juice", "Supplements", "Superfoods"],
    tags: ["Detox", "Immune Boost", "Energy", "Green Foods"],
    rating: 4.8,
    reviewCount: 156,
    variants: [
      { id: "15-sachets", label: "15 Sachets", price: 1200 },
      { id: "30-sachets", label: "30 Sachets", price: 2800, discountedPrice: 2400 },
    ]
    
  },
  {
    id: "product-002",
    slug: "gluta-deluxe-food-supplement",
    name: "Gluta Deluxe Food Supplement Capsule",
    shortDescription:
      "FDA-registered supplement for radiant skin and enhanced immunity",
    longDescription:
      "Gluta Deluxe is a premium food supplement capsule officially registered with the Philippine Food and Drug Administration. This powerful formula combines multiple ingredients known for their antioxidant properties to protect cells from oxidative stress, support skin health, and boost your immune system.",
    price: 2400,
    currency: "PHP",
    image: "/synergreens-gluta-deluxe.avif",
    imageAlt: "Gluta Deluxe supplement bottle with capsules",
    ingredients: [
      {
        name: "L-Glutathione",
        description: "Master antioxidant",
        benefits: [
          "Protects cells from oxidative stress",
          "Supports liver function",
          "Promotes skin brightening",
        ],
      },
      {
        name: "Collagen",
        description: "Structural protein",
        benefits: [
          "Supports skin elasticity",
          "Promotes joint health",
          "Enhances hair and nail strength",
        ],
      },
      {
        name: "Rosehips",
        description: "Fruit of the rose plant",
        benefits: [
          "Rich in vitamin C",
          "Enhances immune function",
          "Supports skin health",
        ],
      },
      {
        name: "Zinc",
        description: "Essential mineral",
        benefits: [
          "Essential for immune system",
          "Supports wound healing",
          "Aids protein synthesis",
        ],
      },
      {
        name: "Probiotics",
        description: "Beneficial bacteria",
        benefits: [
          "Promotes healthy gut microbiome",
          "Supports digestive health",
          "Enhances nutrient absorption",
        ],
      },
    ],
    benefits: [
      "Protects cells from damage",
      "Promotes radiant, glowing skin",
      "Supports immune system function",
      "Enhances gut health",
      "Improves overall wellness",
    ],
    fdaRegistered: true,
    fdaRegistrationNumber: "FDA-PH67890",
    featured: true,
    new: true,
    stockAvailable: true,
    categories: ["Food Supplements"],
    // categories: ["Supplements", "Skin Care", "Immunity"],
    tags: ["Antioxidant", "Skin Health", "Immunity", "Wellness"],
    rating: 4.9,
    reviewCount: 124,
    variants: [
      { id: "30-capsules", label: "30 Capsules", price: 1580 },
      { id: "60-capsules", label: "60 Capsules", price: 2980, discountedPrice: 2880 },
    ]
    
  },
  {
    id: "product-003",
    slug: "choco-deluxe-drink",
    name: "Choco Deluxe Drink",
    shortDescription:
      "Nutrient-rich chocolate drink for energy and cognitive function",
    longDescription:
      "Choco Deluxe is a delicious chocolate-flavored powdered drink enriched with various essential nutrients. More than just a tasty beverage, it's formulated to boost energy levels and enhance brain function, making it perfect for both children and adults seeking mental clarity and sustained energy throughout the day.",
    price: 980,
    currency: "PHP",
    image: "/synergreens-choco-deluxe.avif",
    imageAlt: "Choco Deluxe drink packaging with rich chocolate imagery",
    ingredients: [
      {
        name: "Cocoa",
        description: "Rich chocolate flavor",
        benefits: [
          "Provides antioxidants",
          "Natural flavor",
          "Contains flavanols for heart health",
        ],
      },
      {
        name: "Inulin Fiber",
        description: "Prebiotic plant fiber",
        benefits: [
          "Supports digestive health",
          "Promotes beneficial gut bacteria",
          "Helps regulate blood sugar",
        ],
      },
      {
        name: "Carrot",
        description: "Root vegetable",
        benefits: [
          "Source of beta-carotene",
          "Promotes eye health",
          "Supports immune function",
        ],
      },
      {
        name: "Moringa",
        description: "Leaves of the Moringa oleifera tree",
        benefits: [
          "Offers essential vitamins",
          "Rich in minerals",
          "Contains protein",
        ],
      },
      {
        name: "Okra",
        description: "Seed pod vegetable",
        benefits: [
          "Contains fiber",
          "Rich in antioxidants",
          "Supports digestive health",
        ],
      },
      {
        name: "Chlorella",
        description: "Green freshwater algae",
        benefits: [
          "Nutrient-dense superfood",
          "Detoxification properties",
          "High in protein",
        ],
      },
      {
        name: "Bacopa Monnieri",
        description: "Herb used in traditional medicine",
        benefits: ["Enhances memory", "Improves cognition", "Reduces anxiety"],
      },
      {
        name: "Mangosteen",
        description: "Tropical fruit",
        benefits: [
          "Known for antioxidant properties",
          "Supports immune system",
          "Anti-inflammatory benefits",
        ],
      },
      {
        name: "Stevia",
        description: "Natural sweetener",
        benefits: [
          "Zero-calorie sweetener",
          "Natural alternative to sugar",
          "No impact on blood glucose",
        ],
      },
    ],
    benefits: [
      "Boosts energy levels",
      "Enhances brain function",
      "Improves focus and concentration",
      "Supports digestive health",
      "Provides essential nutrients",
      "Delicious chocolate taste",
    ],
    fdaRegistered: true,
    fdaRegistrationNumber: "FDA-PH54321",
    featured: false,
    new: false,
    stockAvailable: true,
    categories: ["Beverages"],
    // categories: ["Drinks", "Brain Health", "Energy"],
    tags: ["Brain Boost", "Energy", "Chocolate", "Kids"],
    rating: 4.7,
    reviewCount: 89,
    variants: [
      { id: "15-sachets", label: "15 Sachets", price: 980 },
      { id: "30-sachets", label: "30 Sachets", price: 1880, discountedPrice: 1780 },
    ]
    
  },
  {
    id: "product-004",
    slug: "cup-n-slim-coffee",
    name: "Cup N Slim Coffee",
    shortDescription:
      "Weight management coffee with metabolism-boosting ingredients",
    longDescription:
      "Cup N Slim is a premium instant coffee blend specifically formulated to support your weight management goals while delivering the rich flavor and energy boost you expect from your morning coffee. With carefully selected natural ingredients that help boost metabolism, suppress appetite, and enhance energy levels, it's the perfect addition to your healthy lifestyle.",
    price: 1600,
    currency: "PHP",
    image: "/synergreens-cup-n-slim.avif",
    imageAlt: "Cup N Slim coffee packaging with slimming design elements",
    ingredients: [
      {
        name: "Garcinia Cambogia",
        description: "Tropical fruit extract",
        benefits: [
          "May help suppress appetite",
          "Contains HCA for weight management",
          "Supports metabolism",
        ],
      },
      {
        name: "Green Coffee Extract",
        description: "Unroasted coffee beans",
        benefits: [
          "Contains chlorogenic acids",
          "Believed to aid in weight loss",
          "Antioxidant properties",
        ],
      },
      {
        name: "Green Tea",
        description: "Tea leaf extract",
        benefits: [
          "Rich in antioxidants",
          "Supports metabolism",
          "Contains L-theanine for focus",
        ],
      },
      {
        name: "Gymnema Sylvestre",
        description: "Woody climbing shrub",
        benefits: [
          "May reduce sugar absorption",
          "Helps manage sweet cravings",
          "Supports healthy blood sugar",
        ],
      },
      {
        name: "Inulin",
        description: "Prebiotic fiber",
        benefits: [
          "Supports gut health",
          "Promotes feelings of fullness",
          "Feeds beneficial gut bacteria",
        ],
      },
      {
        name: "Psyllium",
        description: "Seed husks",
        benefits: [
          "Provides soluble fiber",
          "Aids digestion",
          "Promotes satiety",
        ],
      },
      {
        name: "Stevia",
        description: "Natural sweetener",
        benefits: [
          "Zero-calorie sweetener",
          "Natural alternative to sugar",
          "No impact on blood glucose",
        ],
      },
    ],
    benefits: [
      "Boosts metabolism",
      "Suppresses appetite",
      "Enhances energy levels",
      "Supports weight management",
      "Delivers rich coffee flavor",
      "Convenient on-the-go format",
    ],
    fdaRegistered: true,
    fdaRegistrationNumber: "FDA-PH09876",
    featured: true,
    new: false,
    stockAvailable: true,
    categories: ["Beverages"],
    // categories: ["Coffee", "Weight Management", "Energy"],
    tags: ["Slimming", "Energy", "Coffee", "Metabolism"],
    rating: 4.6,
    reviewCount: 112,
    variants: [
      { id: "10-sachets", label: "10 Sachets", price: 1180 },
      { id: "30-sachets", label: "30 Sachets", price: 3280, discountedPrice: 2980 },
    ]
    
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-001",
    name: "Maria Santos",
    role: "Fitness Instructor",
    image: "/images/testimonials/maria.jpg",
    content:
      "Synergreens Powdered Mixed Juice has become an essential part of my morning routine. As a fitness instructor, I need sustained energy throughout the day, and this product delivers exactly that. My immune system has never been stronger!",
    rating: 5,
    location: "Manila, Philippines",
    date: "2023-12-15",
    productId: "product-001",
    featured: true,
  },
  {
    id: "testimonial-002",
    name: "Schodel Javier",
    role: "Office Worker",
    image: "/testimonial-schodel.png",
    content:
      "Nung uminom ko ng Synergreens bagama't duda ako ang laki ng pinagbago, lahat ng nararamdaman ko unti-unti nakikita ko sa katawan ko after one week hindi na masakit. 'Yung Synergreens talaga salamat nang marami, andaming natutulungang tao Lalo na ako at pamilya ko na dati rati every week may mga sakit kami pabalik-balik, ngayon nawala.",
    rating: 5,
    location: "Batangas, Philippines",
    date: "2023-11-20",
    productId: "product-001",
    featured: true,
  },
  {
    id: "testimonial-003",
    name: "Ana Lim",
    role: "Beauty Consultant",
    image: "/images/testimonials/ana.jpg",
    content:
      "As someone who works in the beauty industry, I'm very particular about what I put in my body. Gluta Deluxe has made a noticeable difference in my skin's appearance and overall glow. My clients have been asking what my secret is!",
    rating: 5,
    location: "Davao, Philippines",
    date: "2024-01-10",
    productId: "product-002",
    featured: true,
  },
  {
    id: "testimonial-004",
    name: "Miguel Tan",
    role: "Student",
    image: "/images/testimonials/miguel.jpg",
    content:
      "Choco Deluxe is not only delicious but also helps me stay focused during long study sessions. I've noticed a significant improvement in my concentration since I started drinking it regularly. It's like a treat that's actually good for my brain!",
    rating: 4,
    location: "Baguio, Philippines",
    date: "2023-10-05",
    productId: "product-003",
    featured: false,
  },
];

export const faqs: FAQ[] = [
  {
    question: "How often should I take Synergreens Powdered Mixed Juice?",
    answer:
      "For optimal results, we recommend taking Synergreens once daily, preferably in the morning. Mix one sachet with 250ml of cold water, stir well, and enjoy. Consistency is key for experiencing the full benefits of this superfood blend.",
    category: "Product Usage",
  },
  {
    question: "Are Synergreens products FDA approved?",
    answer:
      "Yes, all Synergreens products are registered with the Philippine Food and Drug Administration as food supplements. Our Gluta Deluxe is registered as a high-risk food product. While our products promote overall health and wellness, they are food supplements and not intended to diagnose, treat, cure, or prevent any disease.",
    category: "Regulation",
  },
  {
    question: "How can I become a distributor like Deo Abutal?",
    answer:
      "To become a Synergreens distributor, you can reach out through our contact form or directly message Deo Abutal. Our distributor program offers competitive incentives, training, and support to help you succeed in your business venture.",
    category: "Business Opportunity",
  },
  {
    question: "Do Synergreens products have any side effects?",
    answer:
      "Synergreens products are made from natural ingredients and are generally well-tolerated. However, as with any supplement, some individuals may experience mild digestive adjustments initially. We recommend consulting with a healthcare professional before starting any new supplement regimen, especially if you have existing medical conditions or are taking medications.",
    category: "Health & Safety",
  },
  {
    question: "What makes Cup N Slim Coffee different from regular coffee?",
    answer:
      "Cup N Slim Coffee is specially formulated with ingredients that support weight management, including Garcinia Cambogia, Green Coffee Extract, and Green Tea. Unlike regular coffee, it contains compounds that may help boost metabolism, reduce appetite, and support your weight management goals while still providing that delicious coffee taste and energy boost you love.",
    category: "Product Information",
  },
  {
    question: "How do I store Synergreens products?",
    answer:
      "For optimal freshness and efficacy, store all Synergreens products in a cool, dry place away from direct sunlight. Once opened, some products like our powdered drinks should be consumed within 24 hours if prepared, or kept sealed in their original packaging if in powder form.",
    category: "Product Usage",
  },
];

export const distributor: Distributor = {
  id: "distributor-001",
  name: "Rodeo 'Deo' Abutal",
  role: "Grand Master Distributor, Synergreens International",
  image: "/deo-profile.jpg",
  bio: "Rodeo Abutal, known to most as Deo, is a renowned entrepreneur who transformed his life after returning from his time as an Overseas Filipino Worker (OFW). As a dedicated father of two, he discovered Synergreens International and quickly recognized its potential, becoming the company's top distributor in just a few months. His passion for health, wellness, and helping others achieve financial freedom drives his success in the business.",
  achievements: [
    "Top Distributor at Synergreens International",
    "Achieved Grand Master status in record time",
    "Helped hundreds of individuals improve their health and financial situation",
    "Built a thriving network of distributors across the Philippines",
    "Former Overseas Filipino Worker who found success back home",
  ],
  socialLinks: [
    {
      platform: "Facebook",
      url: "https://facebook.com/deoabutal",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/deoabutal",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/deoabutal",
    },
  ],
  contactInfo: {
    email: "deo.abutal@synergreens.com",
    phone: "+63 917 721 2114",
    location: "Tanauan City, Batangas",
  },
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
    subItems: [
      {
        label: "Deo Abutal",
        href: "/about#deo-abutal",
      },
      {
        label: "Synergreens International",
        href: "/about#synergreens",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    subItems: [
      {
        label: "Synergreens Juice",
        href: "/products/synergreens-powdered-mixed-juice",
      },
      {
        label: "Gluta Deluxe",
        href: "/products/gluta-deluxe-food-supplement",
      },
      {
        label: "Choco Deluxe",
        href: "/products/choco-deluxe-drink",
      },
      {
        label: "Cup N Slim Coffee",
        href: "/products/cup-n-slim-coffee",
      },
    ],
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "FAQs",
    href: "/about#faqs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
