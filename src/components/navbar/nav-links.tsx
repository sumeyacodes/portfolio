import Link from "next/link";
import navStyles from "./navbar.module.css";

export interface NavItems {
  id: string;
  label: string;
  section: string;
}

interface NavItemsProps {
  navItems: NavItems[];
}

export const navItems: NavItems[] = [
  { id: "00", label: "Home", section: "/" },
  { id: "01", label: "About", section: "/#about" },
  { id: "02", label: "Projects", section: "/#projects" },
  { id: "03", label: "Blog", section: "/blogs" },
];

export const NavLinks = ({ navItems }: NavItemsProps) => (
  <>
    {navItems.map((item) => (
      <Link key={item.id} href={item.section} className={navStyles.navLink}>
        <span>{item.id}.</span>
        <span>{item.label}</span>
      </Link>
    ))}
  </>
);
