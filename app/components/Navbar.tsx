"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const whatsappUrl =
  "https://wa.me/573105975861?text=Hola%2C%20quiero%20agendar%20una%20demo%20de%20Vektora";

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/precios", label: "Precios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "#1A1A2E" }}
      className="sticky top-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* Desktop logo: 48px tall, auto width */}
          <Image
            src="/logo/vektora-full.png"
            alt="Vektora - AI Agents Studio"
            width={154}
            height={48}
            priority
            className="hidden md:block h-12 w-auto"
            style={{ height: "48px", width: "auto" }}
          />
          {/* Mobile logo: 36px tall, auto width */}
          <Image
            src="/logo/vektora-full.png"
            alt="Vektora - AI Agents Studio"
            width={115}
            height={36}
            priority
            className="block md:hidden h-9 w-auto"
            style={{ height: "36px", width: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? "text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#6C63FF" }}
            className="hidden md:inline-block text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 active:scale-95 transition-all duration-150"
          >
            Agenda demo →
          </a>

          {/* Hamburger with CSS animation */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="md:hidden text-white p-1 flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          >
            <span
              className="block h-0.5 w-6 bg-white transition-all duration-300 origin-center"
              style={{ transform: open ? "rotate(45deg) translateY(8px)" : "none" }}
            />
            <span
              className="block h-0.5 w-6 bg-white transition-all duration-300"
              style={{ opacity: open ? 0 : 1, transform: open ? "scaleX(0)" : "none" }}
            />
            <span
              className="block h-0.5 w-6 bg-white transition-all duration-300 origin-center"
              style={{ transform: open ? "rotate(-45deg) translateY(-8px)" : "none" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu with smooth animation */}
      <div
        style={{ backgroundColor: "#1A1A2E" }}
        className={`md:hidden border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100 mt-4 pt-4 pb-2" : "max-h-0 opacity-0"}`}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className={`block px-2 py-3 text-sm transition-colors ${
              pathname === href
                ? "text-white font-semibold"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "#6C63FF" }}
          className="mt-3 w-full block text-center text-white text-sm font-semibold px-4 py-3 rounded-lg"
        >
          Agenda demo →
        </a>
      </div>
    </nav>
  );
}
