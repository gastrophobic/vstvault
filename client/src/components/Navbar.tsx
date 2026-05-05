/**
 * VSTVault Navbar
 * Sticky navigation with blur backdrop, Space Grotesk font
 * Electric blue accent on active links
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Download } from 'lucide-react';

const LOGO_URL = 'https://files.offshore.cat/api/file/2a1f7e00-efb8-49d4-a2ca-45895f2b368b';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/plugins', label: 'Plugins' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(5, 11, 24, 0.92)'
          : 'rgba(5, 11, 24, 0.6)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(37, 99, 235, 0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group">
              <img
                src={LOGO_URL}
                alt="VSTVault"
                className="h-8 w-auto object-contain"
                style={{ filter: 'brightness(1.1)' }}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`nav-link px-4 py-2 rounded-md text-sm transition-all duration-200 ${
                    location === link.href
                      ? 'active text-blue-400 bg-blue-500/10'
                      : 'hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/plugins">
              <button className="btn-primary flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold">
                <Download size={14} />
                Browse Plugins
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: 'rgba(5, 11, 24, 0.98)',
            borderColor: 'rgba(37, 99, 235, 0.15)',
          }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`nav-link block px-4 py-3 rounded-md text-sm transition-all duration-200 ${
                    location === link.href
                      ? 'active text-blue-400 bg-blue-500/10'
                      : 'hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="pt-2 border-t border-white/5 mt-2">
              <Link href="/plugins">
                <button className="btn-primary w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold">
                  <Download size={14} />
                  Browse Plugins
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
