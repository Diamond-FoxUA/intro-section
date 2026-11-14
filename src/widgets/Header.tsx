"use client";
import { useState } from "react";

import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center w-full py-6 px-4.5">
        <a
          href="#"
          className="pt-2 hover:scale-110 transition-transform duration-300"
          aria-label="Snap Logo"
        >
          <svg className="w-21 h-6.75" aria-hidden="true">
            <use href={`/icons/logo.svg`}></use>
          </svg>
        </a>

        <button
          className="flex items-center justify-center"
          type="button"
          aria-label="Open Mobile Menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-8 h-4.5" aria-hidden="true">
            <use href={`/icons/icon-menu.svg`}></use>
          </svg>
        </button>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
