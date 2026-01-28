import Link from "next/link";
import React from "react";
import styles from "./mainHeader.module.css";
import NavlinkActive from "./NavlinkActive";

const Links = [
  { href: "/", label: "Home" },
  { href: "/meals", label: "Browse Meals" },
  { href: "/community", label: "Foodies Community" },
];

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {Links.map((link) => (
          <li key={link.href}>
            <NavlinkActive href={link.href}>{link.label}</NavlinkActive>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
