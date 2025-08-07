import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import AsakaLogo from "../assets/AsakaTechSolutions3.png";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home") },
  { title: "About", url: createPageUrl("About") },
  { title: "Services", url: createPageUrl("Services") },
  { title: "Case Studies", url: createPageUrl("CaseStudies") },
  { title: "Portfolio", url: createPageUrl("Portfolio") },
  { title: "Testimonials", url: createPageUrl("Testimonials") },
  { title: "Contact", url: createPageUrl("Contact") }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <style>
        {`
          :root {
            --primary-blue: #1E40AF;
            --pure-white: #FFFFFF;
            --deep-black: #0F172A;
            --vibrant-magenta: #EC4899;
            --soft-gray: #F8FAFC;
            --border-gray: #E2E8F0;
          }
        `}
      </style>

      {/* Premium Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center">
              <img 
                src={AsakaLogo}
                alt="Asaka Tech Solutions Logo" 
                className="h-16 w-16 rounded-full border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 object-cover" 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-50 ${
                    location.pathname === item.url
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to={createPageUrl("Contact")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
              <div className="px-6 py-6 space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                      location.pathname === item.url
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="font-medium">{item.title}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ))}
                <Link
                  to={createPageUrl("Contact")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Premium Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to={createPageUrl("Home")}>
                <img 
                  src={AsakaLogo}
                  alt="Asaka Tech Solutions Logo" 
                  className="h-20 w-20 rounded-full border-2 border-blue-400 hover:border-blue-300 transition-all duration-300 object-cover mb-6" 
                />
              </Link>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                Secure. Scalable. Smart. We help enterprises, NGOs, and government agencies harness blockchain technology for transparency, efficiency, and trust.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:info@asakatech.co.ke" className="text-blue-400 hover:text-blue-300 font-medium">
                  info@asakatech.co.ke
                </a>
                <span className="text-gray-500">•</span>
                <a href="tel:+254701513729" className="text-blue-400 hover:text-blue-300 font-medium">
                  +254 701 513 729
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <div className="space-y-3">
                {navigationItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <div className="space-y-3">
                <p className="text-gray-300">Blockchain Consulting</p>
                <p className="text-gray-300">Smart Contract Audits</p>
                <p className="text-gray-300">Web Development</p>
                <p className="text-gray-300">System Integration</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-center lg:text-left">
              © 2024 Asaka Tech Solutions. All rights reserved.
            </p>
            <p className="text-gray-400 mt-4 lg:mt-0">
              Nairobi, Kenya
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

