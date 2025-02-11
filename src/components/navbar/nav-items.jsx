import Link from "next/link";
import navStyles from "./navbar.module.css";

export const NavLinks = ({ items }) => (
  <>
    {items.map((item) => (
      <Link key={item.id} href={item.section} className={navStyles.navLink}>
        <span className={navStyles.navItemId}>{item.id}.</span>
        <span className={navStyles.spanItem}>{item.label}</span>
      </Link>
    ))}
  </>
);

export const navItems = [
  { id: "01", label: "About", section: "#about" },
  { id: "02", label: "Projects", section: "#projects" },
  { id: "03", label: "Blog", section: "/blogs" },
];
