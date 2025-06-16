import React from "react";
import Link from "next/link";
import { categories } from "@/constant/data";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                {category.title}
              </h3>
              <ul className="space-y-2.5">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} The Faisalabad Times Company
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 mt-2">
            {[
              "Contact Us",
              "Work with us",
              "Advertise",
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
            ].map((link, index) => (
              <Link
                key={index}
                href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-600 hover:text-blue-600 text-xs transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
