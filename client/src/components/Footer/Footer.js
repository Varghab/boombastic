import React from "react";
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto text-black py-4 px-2">
      <div className="flex items-center flex-col md:flex-row justify-center gap-4 md:gap-10">
        <div className="flex items-center gap-2 w-full md:w-1/2">
          <BsFillSendFill className="text-2xl" />
          <p className="text-xl md:text-2xl text-center font-primary">Sign Up For Newsletter</p>
        </div>
        <div className="relative flex items-stretch w-full md:w-1/2">
          <input
            type="text"
            placeholder="example@gmail.com"
            className="w-full font-secondary px-2 py-2 border border-gray-700 rounded-l focus:outline-none focus:border-gray-900"
          />
          <button
            type="button"
            className="px-4 py-2 font-secondary bg-neutral-700 duration-150 text-white rounded-r hover:bg-neutral-800 focus:outline-none"
          >
            Subscribe
          </button>
        </div>
      </div>
      <hr className="mt-10 border border-neutral-400"></hr>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4 font-primary">About Us</h2>
          <p className="font-secondary">
            Welcome to Boombastic, where passion for music meets cutting-edge
            technology. Our journey began in 2023 with a simple yet ambitious
            goal: to redefine the way you experience sound.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 font-primary">
            Quick Links
          </h2>
          <ul className="list-none p-0 m-0 font-secondary">
            <li className="mb-2">
              <a href="#" className="text-black hover:text-gray-600">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black hover:text-gray-600">
                All Products
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black hover:text-gray-600">
                Create an account
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4 font-primary">
            Contact Information
          </h2>
          <p className="font-secondary">Agartala, Tripura, India</p>
          <p className="font-secondary">Email: shibvarghab@gmail.com</p>
          <p className="font-secondary">Phone: 8837XXXXXX</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black mt-8 pt-4 flex justify-between items-center font-primary">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-black hover:text-gray-600">
            Privacy Policy
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
