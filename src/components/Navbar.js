'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="md:bg-white md:border-gray-200 shadow-lg bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-white">
              <Image src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" width={50} height={50} alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap md:text-blue-700">ThatsMyCollege</span>
            </Link>
          </div>
          {/* md menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 text-gray-900">
              <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 hover:bg-blue-500 rounded md:px-4 md:py-[0.20rem]" aria-current="page">Internship</Link>
              <Link href="/courses" className="hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 px-3 py-2 rounded-md">Courses</Link>
              <Link href="/colleges" className="hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 px-3 py-2 rounded-md">Colleges</Link>
              <Link href="/about" className="hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 px-3 py-2 rounded-md">About</Link>
              <Link href="/contact" className="hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 px-3 py-2 rounded-md">Contact</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden={!isOpen}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden={isOpen}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/courses" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Courses</a>
          <a href="/colleges" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Colleges</a>
          <a href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
