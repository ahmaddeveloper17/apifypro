"use client";
const { default: Image } = require("next/image");
import { Images } from "@/constants/constant";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-[#42f5da] overflow-x-hidden ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-12 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block  h-6 w-6 ${
                    isMobileMenuOpen ? "hidden" : "block"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex mt-3  ml-[-260px] sm:ml-0">
                <Link href="/">
                  <Image
                    src={Images.mainIcon}
                    className="w-[135px] h-[88px] py-4"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-0 my-2 sm:hidden md:block">
                <div className="flex space-x-4">
                  <Link href="/">
                    <h2 className="text-Accent2 xl:ml-32 font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent">
                      Events
                    </h2>
                  </Link>
                  <Link href="/">
                    <h2 className="text-Accent font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent2">
                      Beyond Events
                    </h2>
                  </Link>{" "}
                  <Link href="/">
                    <h2 className="text-Accent font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent2">
                      Photos
                    </h2>
                  </Link>
                  <Link href="/">
                    <h2 className="text-Accent font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent2">
                      Venues
                    </h2>
                  </Link>
                  <Link href="/">
                    <h2 className="text-Accent font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent2">
                      About Us
                    </h2>
                  </Link>
                  <Link href="/">
                    <h2 className="text-Accent font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent2">
                      contact US
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute hidden inset-y-0 right-0 sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3 flex">
                <div className="mr-6 mt-3 cursor-pointer">
                  <Image src={Images.search} width={20} height={20} />
                </div>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-Accent rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-Accent focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                  <span class="relative text-Accent2 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-Accent rounded-md group-hover:bg-opacity-0">
                    Login
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className=" space-x-4">
              <Link href="/">
                <h2 className="text-Accent2 xl:ml-32 font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent">
                  Events
                </h2>
              </Link>
              <Link href="/">
                <h2 className="text-Accent font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent2">
                  Beyond Events
                </h2>
              </Link>{" "}
              <Link href="/">
                <h2 className="text-Accent font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent2">
                  Photos
                </h2>
              </Link>
              <Link href="/">
                <h2 className="text-Accent font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent2">
                  Venues
                </h2>
              </Link>
              <Link href="/">
                <h2 className="text-Accent font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent2">
                  About Us
                </h2>
              </Link>
              <Link href="/">
                <h2 className="text-Accent font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent2">
                  contact US
                </h2>
              </Link>
              <button class="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2  text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span class=" w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Login
                </span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
