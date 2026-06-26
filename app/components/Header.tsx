'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold hover:text-blue-100 transition-colors">
          Tsvetkov.site
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link href="#about" className="hover:text-blue-100 transition-colors font-medium">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-100 transition-colors font-medium">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-100 transition-colors font-medium">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
