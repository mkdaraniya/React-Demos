import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <div className="mb-5">
              <Logo width="100px" />
            </div>

            <p className="text-gray-600 text-sm leading-6">
              Modern blogging platform built with React, Tailwind CSS, and Appwrite.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              © 2026 All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-5">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <Link className="text-gray-600 hover:text-blue-600 transition" to="/">
                  Features
                </Link>
              </li>

              <li>
                <Link className="text-gray-600 hover:text-blue-600 transition" to="/">
                  Pricing
                </Link>
              </li>

              <li>
                <Link className="text-gray-600 hover:text-blue-600 transition" to="/">
                  Affiliate Program
                </Link>
              </li>

              <li>
                <Link className="text-gray-600 hover:text-blue-600 transition" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-5">
              Support
            </h3>

            <ul className="space-y-3">
              <li>
                <Link className="text-gray-600 hover:text-blue-600 transition" to="/">
                  Account
                </Link>
              </li>

              <li>
                <Link className="text-gray-600 hover:text-blue-600 transition" to="/">
                  Help
                </Link>
              </li>

              <li>
                <Link className="text-gray-600 hover:text-blue-600 transition" to="/">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link className="text-gray-600 hover:text-blue-600 transition" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-5">
              Legal
            </h3>

            <ul className="space-y-3">
              <li>
                <Link className="text-gray-600 hover:text-blue-600 transition" to="/">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link className="text-gray-600 hover:text-blue-600 transition" to="/">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link className="text-gray-600 hover:text-blue-600 transition" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;