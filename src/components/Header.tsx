"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "active" : "";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link href="/" className="logo">
          <Image
            src="/images/logo.png"
            alt="Ceding Foundation Logo"
            className="logo-image"
            width={100}
            height={100}
          />
          <h1 className="text-2xl font-bold">Ceding Foundation</h1>
        </Link>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link href="/" className={isActive("/")} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/leadership"
              className={isActive("/leadership")}
              onClick={closeMenu}
            >
              Our Leadership
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={isActive("/gallery")}
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={isActive("/contact")}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            {/* <Link
              href="/admin"
              className={isActive("/admin")}
              onClick={closeMenu}
            >
              Admin
            </Link> */}
          </li>
          <li>
            <Link href="/donate" className="donate-btn" onClick={closeMenu}>
              Donate Now
            </Link>
          </li>
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
