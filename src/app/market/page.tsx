'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Search,
  ShoppingCart,
  Filter,
  Star,
  X,
  Plus,
  Minus,
  Trash2,
} from 'lucide-react';
import GridLayout from '@/components/layout/GridLayout';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

const categories = [
  'All',
  'Heroes',
  'Equipment',
  'Power-ups',
  'Cosmetics',
  'Resources',
];

const products: Product[] = [
  {
    id: 1,
    name: 'Legendary Hero: Dragon Knight',
    description: 'A powerful hero with dragon-based abilities.',
    price: 299.99,
    image: 'https://picsum.photos/id/60/400/400',
    category: 'Heroes',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mystic Staff',
    description: 'Increases magical damage and mana regeneration.',
    price: 149.99,
    image: 'https://picsum.photos/id/61/400/400',
    category: 'Equipment',
    rating: 4,
  },
  {
    id: 3,
    name: 'Ultimate Power Boost',
    description: 'Temporarily enhances all hero abilities.',
    price: 49.99,
    image: 'https://picsum.photos/id/62/400/400',
    category: 'Power-ups',
    rating: 4,
  },
  {
    id: 4,
    name: 'Celestial Armor Set',
    description: 'Exclusive cosmetic armor with special effects.',
    price: 199.99,
    image: 'https://picsum.photos/id/63/400/400',
    category: 'Cosmetics',
    rating: 5,
  },
  {
    id: 5,
    name: 'Rare Essence Bundle',
    description: 'Bundle of rare resources for crafting.',
    price: 79.99,
    image: 'https://picsum.photos/id/64/400/400',
    category: 'Resources',
    rating: 3,
  },
  {
    id: 6,
    name: 'Epic Hero: Shadow Assassin',
    description: 'Stealthy hero specializing in critical strikes.',
    price: 249.99,
    image: 'https://picsum.photos/id/65/400/400',
    category: 'Heroes',
    rating: 5,
  },
];

interface CartItem extends Product {
  quantity: number;
}

export default function MarketPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const filters = (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-800 bg-gray-900 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-[#2CD591] focus:outline-none focus:ring-1 focus:ring-[#2CD591]"
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="mb-4 text-sm font-medium text-white">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                selectedCategory === category
                  ? 'bg-[#2CD591] text-black'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <GridLayout title="Marketplace" filters={filters}>
      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50"
          >
            <div className="relative h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                <div className="flex items-center text-[#2CD591]">
                  <Star className="mr-1 h-4 w-4 fill-current" />
                  {product.rating}
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-400">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#2CD591]">
                  ${product.price}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center rounded-lg bg-[#2CD591] px-4 py-2 text-sm font-medium text-black hover:bg-[#2CD591]/90"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shopping Cart Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-96 transform overflow-y-auto bg-gray-900 p-6 shadow-xl transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-gray-400">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 rounded-lg border border-gray-800 bg-gray-900/50 p-4"
                >
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#2CD591]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="rounded-lg border border-gray-800 p-1 text-gray-400 hover:text-white"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="rounded-lg border border-gray-800 p-1 text-gray-400 hover:text-white"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                <span className="text-lg font-medium text-white">Total</span>
                <span className="text-2xl font-bold text-[#2CD591]">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <button className="w-full rounded-lg bg-[#2CD591] px-6 py-3 text-sm font-medium text-black hover:bg-[#2CD591]/90">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {/* Cart Toggle Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#2CD591] text-black shadow-lg hover:bg-[#2CD591]/90"
      >
        <ShoppingCart className="h-6 w-6" />
        {cart.length > 0 && (
          <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-sm font-medium text-white">
            {cart.length}
          </span>
        )}
      </button>
    </GridLayout>
  );
} 