'use client'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';
import NavLink from './NavLink';

const Header: React.FC = () => {
  // State for toggling the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Add or remove the scroll lock based on menu state
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Lock scroll when menu is open
    } else {
      document.body.style.overflow = ''; // Unlock scroll when menu is closed
    }
  }, [isOpen]);

  return (
    <header className="">
      <nav className="flex justify-between items-center py-9 px-5 w-full mx-auto lg:w-[1024px] h-full">
        {/* Logo */}
        <Logo />

        {/* Hamburger Menu for Mobile/Tablet */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Center - NavLinks (Hidden on mobile) */}
        <div className={`lg:flex items-center space-x-7 hidden`}>
          <NavLink href="/documentation" text="Documentation" />
          <NavLink href="/customers" text="Customers" />
          <NavLink href="/pricing" text="Pricing" />
          <NavLink href="/blog" text="Blog" />
          <NavLink href="/preview" text="Preview" />
          <NavLink href="/demo" text="Demo" />
        </div>

        {/* Right Side - Action Buttons (Hidden on mobile) */}
        <div className={`lg:flex items-center space-x-4 hidden`}>
          <NavLink href="/login" text="Sign In" />
        </div>
      </nav>

      {/* Mobile Menu (Dropdown when Hamburger is clicked) */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="space-y-4 mt-4 px-8 py-4 bg-gray-50 flex flex-col gap-y-10">
          <NavLink href="/documentation" text="Documentation" />
          <NavLink href="/customers" text="Customers" />
          <NavLink href="/pricing" text="Pricing" />
          <NavLink href="/blog" text="Blog" />
          <NavLink href="/preview" text="Preview" />
          <NavLink href="/demo" text="Demo" />
          <NavLink href="/login" text="Sign In" />
        </div>
      </div>
    </header>
  );
};

export default Header;
