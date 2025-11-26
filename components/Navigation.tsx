"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { label: "accueil", href: "/" },
    { label: "à propos", href: "/about" },
    { label: "faire un don", href: "/donate" },
  ];

  return (
    <nav className="w-full max-w-4xl mx-auto">
      <ul className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`text-white text-sm sm:text-base font-light tracking-wide  transition-all hover:font-medium ${pathname === item.href ? "font-semibold" : ""
                }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
