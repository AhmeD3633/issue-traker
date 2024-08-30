import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { label: "Dashbord", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="text-black flex space-x-6 mb-5 px-5 h-14 items-center border-b">
      <Link href={"/"}>
        <FaBug />
      </Link>

      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
