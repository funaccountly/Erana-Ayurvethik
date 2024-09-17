import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Header */}
      <header className="bg-green-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif">Erana Ayurvethik</h1>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-green-200">Home</Link>
            <Link to="/products" className="hover:text-green-200">Products</Link>
            <Link to="/about" className="hover:text-green-200">About</Link>
            <Link to="/blog" className="hover:text-green-200">Blog</Link>
            <Link to="/contact" className="hover:text-green-200">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 cursor-pointer" />
            <ShoppingCart className="h-5 w-5 cursor-pointer" />
            <Menu className="h-5 w-5 cursor-pointer md:hidden" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[url('/hero-background.jpg')] bg-cover bg-center py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-green-900 mb-4">Discover the Power of Ayurveda</h2>
          <p className="text-xl text-green-800 mb-8">Premium holistic health and wellness products</p>
          <Button className="bg-green-700 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-serif text-center mb-10">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={`/product-${item}.jpg`} alt={`Product ${item}`} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h4 className="font-serif text-xl mb-2">Ayurvedic Product {item}</h4>
                  <p className="text-green-700 font-bold">$29.99</p>
                  <Button className="mt-4 w-full bg-green-600 hover:bg-green-500">Add to Cart</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Ayurveda */}
      <section className="bg-green-100 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-serif mb-6">The Wisdom of Ayurveda</h3>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Discover the ancient healing tradition that harmonizes mind, body, and spirit. Our products are crafted
            using time-honored Ayurvedic principles to promote balance and well-being.
          </p>
          <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
            Learn More
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-serif text-xl mb-4">Erana Ayurvethik</h4>
            <p>Premium Ayurvedic products for your holistic wellness journey.</p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to="/products" className="hover:text-green-200">Products</Link></li>
              <li><Link to="/about" className="hover:text-green-200">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-green-200">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-green-200">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Contact Us</h5>
            <p>123 Ayurveda Lane</p>
            <p>Wellness City, WC 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@eranaayurvethik.com</p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Newsletter</h5>
            <p className="mb-4">Subscribe for Ayurvedic tips and exclusive offers.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md text-green-900 mb-2"
            />
            <Button className="w-full bg-green-700 hover:bg-green-600">Subscribe</Button>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Erana Ayurvethik. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
