"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import navStyles from "./navbar.module.css";

const navItems = [
  { id: "01", label: "Home", href: "#home" },
  { id: "02", label: "Projects", href: "#projects" },
  { id: "03", label: "Blog", href: "#blog" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={navStyles.container}
    >
      <nav className={navStyles.navbar}>
        {/* Desktop Navigation */}
        <div className={navStyles.desktopNav}>
          {navItems.map((item) => (
            <Link key={item.id} href={item.href}>
              <label className={navStyles.navItemId}>{item.id}.</label>{" "}
              <span className={navStyles.spanItem}>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className={navStyles.mobileNav}>
          <button onClick={toggleMenu} className={navStyles.hamburger}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Overlay */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={navStyles.mobileMenu}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={navStyles.navItems}
                  >
                    <label className={navStyles.navItemId}>{item.id}.</label>{" "}
                    <span className={navStyles.spanItem}>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </nav>
    </motion.div>
  );
}
