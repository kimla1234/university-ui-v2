"use client"
import { useState, useEffect } from "react";// Correct usage of Link from react-router-dom
import { Menu, X } from "lucide-react"; // For hamburger menu icon
import { FaRegBell } from "react-icons/fa"; // For notification icon
import Link from "next/link";


// Navigation Links
const navLinks = [
  { href: "/", label: "ទំព័រដើម" },
  { href: "/university", label: "សាកល" },
  { href: "/jobs", label: "ការងារ" },
  { href: "/", label: "ព័ត៌មាន" },
  { href: "/", label: "អំពីយើង" },
];

export default function NavbarPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // For toggling mobile menu
  const [pathname, setPathname] = useState(""); // State for current pathname

  // Get pathname after the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-slate-50">
      <header
        className={`flex items-center justify-between py-4 px-4 md:px-6 lg:px-6 mx-auto w-full fixed top-0 left-0 z-50 bg-white shadow-md transition-all duration-300 ${
          isSticky ? "bg-opacity-90" : "bg-opacity-100"
        }`}
      >
        {/* Logo and Navigation Links */}
        <div className="flex items-center space-x-6 lg:space-x-8">
         
            <Link href="/" className="text-lg lg:text-xl text-green-700">
              សាកលវិទ្យាល័យ
            </Link>

        </div>

        {/* Navigation Links and Sign-In Button */}
        <div className="hidden md:block lg:flex items-center space-x-6">
          <div className="flex justify-end items-center">
            {/* Navigation Links */}
            <nav className="hidden md:flex w-[350px] space-x-6 md:space-x-0 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href} // Corrected: using 'to' instead of 'href'
                  className={`text-base md:text-md w-[70px] lg:text-lg whitespace-nowrap space-x-4  ${
                    pathname === link.href
                      ? "text-green-600 font-medium"
                      : "text-gray-800 hover:text-green-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Sign-In Button */}
            <div className="flex space-x-4 lg:w-full md:w-[200px] justify-end">
              <div className="w-[120px] flex justify-end items-center space-x-4">
                <div className="rounded-full border border-primary">
                  <FaRegBell className="text-xl mr-2 ml-2 mt-2 mb-2" />
                </div>
              </div>
              <Link
                href="/login" // Corrected: using 'to' instead of 'href'
                className="bg-emerald-500 text-white text-base text-center lg:text-lg rounded-xl lg:px-5 lg:py-2 md:px-2 md:py-1 px-5 py-2 lg:w-28 md:w-32 w-32"
              >
                ចុះឈ្មោះ
              </Link>
            </div>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="w-full md:hidden fixed left-0 right-0 lg:mt-14 md:mt-14 -mt-8 px-4 py-4 bg-white shadow-md z-50"
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href} // Corrected: using 'to' instead of 'href'
                className={`text-base ${
                  pathname === link.href
                    ? "text-green-700 font-bold"
                    : "text-gray-800 hover:text-green-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-4 justify-end">
            <div className="w-[120px] flex justify-end items-center space-x-4">
              <div className="rounded-full border border-primary">
                <FaRegBell className="text-xl mr-2 ml-2 mt-2 mb-2" />
              </div>
            </div>
            <Link
              href="/login" // Corrected: using 'to' instead of 'href'
              className="bg-emerald-500 text-white text-base lg:text-lg rounded-xl lg:px-5 lg:py-2 md:px-4 md:py-1 px-5 py-2"
            >
              ចុះឈ្មោះ
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
