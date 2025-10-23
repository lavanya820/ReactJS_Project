import React from 'react';
import { FaRegCopyright, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-16 pt-20 pb-8">
      {/* ✅ Main Footer Grid */}
      <div className="grid grid-cols-4 gap-16 pt-10">
        
        {/* --- Tech-Shop Column --- */}
        <div className="space-y-5">
          <h2 className="text-xl text-white font-bold">Tech-Shop</h2>
          <p className="text-sm leading-6 text-gray-300">
            Subscribe to our Email alerts to receive<br />
            early discount offers, and new products info.
          </p>

          {/* Input + Button */}
          <div className="d-flex flex-column gap-2 mt-3">
            <input
              type="text"
              placeholder="Email Address*"
              className="form-control bg-transparent text-white border-secondary placeholder-gray-800 w-75"
            />
            <button className="btn btn-danger w-50 fw-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* --- Help Column --- */}
        <div className="space-y-5">
          <h3 className="text-xl text-white fw-bold mb-3">Help</h3>
          <ul className="list-unstyled space-y-1">
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">FAQs</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Track Order</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Cancel Order</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Return Order</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Warranty Info</li>
          </ul>
        </div>

        {/* --- Policies Column --- */}
        <div className="space-y-5">
          <h3 className="text-xl text-white fw-bold mb-3">Policies</h3>
          <ul className="list-unstyled space-y-1">
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Return Policy</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Security</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Sitemap</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Privacy Policy</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Terms & Conditions</li>
          </ul>
        </div>

        {/* --- Company Column --- */}
        <div className="space-y-5">
          <h3 className="text-xl text-white fw-bold mb-3">Company</h3>
          <ul className="list-unstyled space-y-1">
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">About Us</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Contact Us</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Service Centres</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Careers</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Affiliates</li>
          </ul>
        </div>
      </div>

      {/* ✅ Divider */}
      <hr className="border-secondary my-4" />

      {/* ✅ Bottom Bar */}
      <div className="d-flex justify-content-between align-items-center">
        <p className="d-flex align-items-center gap-1 m-0">
          2025 | All Rights Reserved <FaRegCopyright className="ms-1" />.
        </p>
        <div className="d-flex gap-10 text-white fs-5 mr-15">
          <FaFacebookF className="hover:text-red-500 transition-all cursor-pointer" />
          <FaTwitter className="hover:text-red-500 transition-all cursor-pointer" />
          <FaInstagram className="hover:text-red-500 transition-all cursor-pointer" />
          <FaLinkedinIn className="hover:text-red-500 transition-all cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
// project done

