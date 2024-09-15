"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashbord", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 mb-5 px-5 h-14 items-center border-b">
      <Link href={"/"}>
        <FaBug />
      </Link>

      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors font-medium": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
