"use client";

import { useState } from "react";
import { Menu, Terminal, X } from "lucide-react";
import { NavLinks, navItems } from "./nav-links";
import styles from "./navbar.module.css";

export function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((isClosed) => !isClosed);

  return (
    <header className={styles.navbar}>
      {/* Desktop Nav */}
      <Terminal size={35} stroke={"var(--blue)"} />

      <nav className={styles.desktopNav}>
        <NavLinks navItems={navItems} />
      </nav>

      {/* Mobile Nav */}
      <nav className={styles.mobileNav}>
        <button onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className={styles.mobileMenu}>
            <Terminal size={24} />

            <NavLinks navItems={navItems} />
          </div>
        )}
      </nav>
    </header>
  );
}
