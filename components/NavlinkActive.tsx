"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./NavbarActive.module.css";

export default function NavlinkActive({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const path = usePathname();
  return (
    <Link href={href} className={path === href ? styles.active : ""}>
      {children}
    </Link>
  );
}
