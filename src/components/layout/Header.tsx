"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import useHeader from "@/hooks/useHeader";
import { menuItems } from "@/constant/data";

const Header = () => {
  const { open, setOpen } = useHeader();

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-5">
          <div className="flex justify-between items-center">
            <div className="text-center">
              <h1 className="text-4xl font-serif font-bold text-gray-900 hover:text-gray-700 transition-colors">
                The Faisalabad Times
              </h1>
            </div>
            <div className="text-xs text-gray-500 font-medium">
              {currentDate}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="mt-6 border-t border-gray-100 pt-4">
            <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-blue-600 hover:underline transition-colors duration-200 py-2"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="container mx-auto px-4 py-3">
          {/* Mobile Top Bar */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="text-xs text-gray-500 font-medium">
              {currentDate}
            </div>
          </div>

          {/* Mobile Logo */}
          <div className="text-center py-4 border-b border-gray-100">
            <h1 className="text-xl font-serif font-bold text-gray-900">
              The Faisalabad Times
            </h1>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {open && (
          <div className="bg-gray-50 border-t border-gray-200 animate-in slide-in-from-top duration-200">
            <nav className="container mx-auto px-4 py-4">
              <ul className="grid grid-cols-2 gap-3">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href="/"
                      className="block text-center py-3 px-4 text-sm font-medium text-gray-700 
                               hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200
                               border border-transparent hover:border-gray-200 hover:shadow-sm"
                      onClick={() => setOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
