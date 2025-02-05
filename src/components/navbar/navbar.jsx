"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import navStyles from "./navbar.module.css";
import { animationConfig } from "@/utils";

const navItems = [
  { id: "01", label: "About", section: "about" },
  { id: "02", label: "Projects", section: "projects" },
  { id: "03", label: "Blog", section: "blog" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header {...animationConfig} className={navStyles.container}>
      <nav className={navStyles.navbar}>
        {/* Desktop Navigation */}
        <div className={navStyles.desktopNav}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.section}
              smooth={true}
              duration={500}
              className={navStyles.navLink}
              spy={true}
            >
              <span className={navStyles.navItemId}>{item.id}.</span>
              <span className={navStyles.spanItem}>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className={navStyles.mobileNav}>
          <button onClick={toggleMenu} className={navStyles.hamburger}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <motion.div
            className={`${navStyles.mobileMenu} ${
              isOpen ? navStyles.mobileMenuOpen : ""
            }`}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -20 },
            }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.section}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className={navStyles.navLink}
                spy={true}
              >
                <span className={navStyles.navItemId}>{item.id}.</span>
                <span className={navStyles.spanItem}>{item.label}</span>
              </Link>
            ))}
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
}
