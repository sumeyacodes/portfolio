"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLinks } from "./nav-items";
import { navItems } from "./nav-items";
import navStyles from "./navbar.module.css";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <header className={navStyles.container}>
      <nav className={navStyles.navbar}>
        {/* Desktop Navigation */}
        <div className={navStyles.desktopNav}>
          <NavLinks items={navItems} />
        </div>

        {/* Mobile Navigation */}
        <div className={navStyles.mobileNav}>
          <button onClick={toggleMenu} className={navStyles.hamburger}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isOpen && (
            <div className={navStyles.mobileMenu}>
              <NavLinks items={navItems} />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
