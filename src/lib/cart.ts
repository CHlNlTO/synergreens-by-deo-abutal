// /lib/cart.ts
export interface CartItem {
  id: string;
  name: string;
  price: number;
  discountedPrice?: number;
  variantLabel?: string;
  image: string;
  currency: string;
  quantity: number;
}

const CART_KEY = "cart";

// 🔹 Extend the WindowEventMap to include our custom event
declare global {
  interface WindowEventMap {
    "cart-updated": CustomEvent<{ productName?: string }>;
  }
}

// 🔹 Get all items
export const getCartItems = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

// 🔹 Save helper
const saveCart = (cart: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  // 🔥 Trigger UI refresh
  window.dispatchEvent(new CustomEvent("cart-updated"));
};

// 🔹 Add or update item
export function addToCart(item: CartItem) {
  const cart = getCartItems() || [];

  // ✅ Use both id + variantLabel as unique key
  const existing = cart.find(
    (i) => i.id === item.id && i.variantLabel === item.variantLabel
  );

  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));

  // ✅ Trigger event with product name (includes variant if any)
  window.dispatchEvent(
    new CustomEvent("cart-updated", {
      detail: {
        productName: item.variantLabel
          ? `${item.name} (${item.variantLabel})`
          : item.name,
      },
    })
  );
}


// 🔹 Remove one item completely
export const removeFromCart = (itemId: string) => {
  const cart = getCartItems();
  const updated = cart.filter((item) => item.id !== itemId);
  saveCart(updated);
};

// 🔹 Update quantity
export const updateCartQuantity = (itemId: string, quantity: number) => {
  const cart = getCartItems();
  const target = cart.find((item) => item.id === itemId);
  if (target) {
    target.quantity = quantity;
    if (target.quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
  }
  saveCart(cart);
};

// 🔹 Clear all
export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
  // 🔥 Trigger UI refresh
  window.dispatchEvent(new CustomEvent("cart-updated"));
};
