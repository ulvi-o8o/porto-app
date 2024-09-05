import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Import React Icons

const Footer = () => {
  return (
    <footer className="bg-[#332859] text-white   mx-auto px-52 pt-16 pb-24">
      <div className="container mx-auto flex flex-wrap  justify-between">
        {/* Left Section */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">PORTO</h1>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
          <p>
            Porto Education. © 2024.
            <br />
            All Rights Reserved
          </p>
        </div>

        {/* About Us */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <ul>
            <li>Porto Education</li>
            <li>123 Porto Blvd, Suite 100</li>
            <li>New York, NY</li>
            <li>Phone: 123-456-7890</li>
            <li>Email: porto@domain.com</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Instructors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-4">Support</h2>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-400">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Forums
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Open a Ticket
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                FAQ's
              </a>
            </li>
          </ul>
        </div>

        {/* More */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-4">More</h2>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
