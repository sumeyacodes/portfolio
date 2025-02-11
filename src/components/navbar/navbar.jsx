"use client";

import { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import navStyles from "./navbar.module.css";

const navItems = [
  { id: "01", label: "About", section: "about" },
  { id: "02", label: "Projects", section: "projects" },
  { id: "03", label: "Blog", section: "/blogs" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={navStyles.container}>
      <nav className={navStyles.navbar}>
        {/* Desktop Navigation */}
        <div className={navStyles.desktopNav}>
          {navItems.map((item) =>
            item.section.startsWith("/") ? (
              <Link
                key={item.id}
                href={item.section}
                className={navStyles.navLink}
              >
                <span className={navStyles.navItemId}>{item.id}.</span>
                <span className={navStyles.spanItem}>{item.label}</span>
              </Link>
            ) : (
              <ScrollLink
                key={item.id}
                to={item.section}
                smooth={true}
                duration={500}
                className={navStyles.navLink}
                spy={true}
              >
                <span className={navStyles.navItemId}>{item.id}.</span>
                <span className={navStyles.spanItem}>{item.label}</span>
              </ScrollLink>
            )
          )}
        </div>

        {/* Mobile Navigation */}
        <div className={navStyles.mobileNav}>
          <button onClick={toggleMenu} className={navStyles.hamburger}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isOpen && (
            <div className={navStyles.mobileMenu}>
              {navItems.map((item) =>
                item.section.startsWith("/") ? (
                  <Link
                    key={item.id}
                    href={item.section}
                    className={navStyles.navLink}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={navStyles.navItemId}>{item.id}.</span>
                    <span className={navStyles.spanItem}>{item.label}</span>
                  </Link>
                ) : (
                  <ScrollLink
                    key={item.id}
                    to={item.section}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={navStyles.navLink}
                    spy={true}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={navStyles.navItemId}>{item.id}.</span>
                    <span className={navStyles.spanItem}>{item.label}</span>
                  </ScrollLink>
                )
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
