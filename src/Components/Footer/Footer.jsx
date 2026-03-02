import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <footer className="bg-[#212529] text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
          
          {/* Company Details */}
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2 mb-4">
              <FiShoppingBag size={28} />
              ShopMe
            </h1>
            <p className="text-gray-300 text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Cum in beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Important Links
            </h2>
            <ul className="space-y-3">
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.link}
                    className="text-gray-300 hover:text-[#4263eb] hover:translate-x-1 transition duration-300 inline-block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Contact Us
            </h2>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-[#4263eb] transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-[#4263eb] transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-[#4263eb] transition">
                <FaLinkedin size={24} />
              </a>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3 text-gray-300 mb-3">
              <FaMapLocationDot />
              <p>Indore, Madhya Pradesh</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-gray-300">
              <IoCall />
              <p>+91 123456789</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} ShopMe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;