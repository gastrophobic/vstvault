/**
 * VSTVault Footer
 * Dark footer with blue accent links
 */

import { Link } from 'wouter';
import { Music, Github, Twitter, Mail } from 'lucide-react';

const LOGO_URL = 'https://files.offshore.cat/api/file/2a1f7e00-efb8-49d4-a2ca-45895f2b368b';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(3, 7, 18, 0.95)',
        borderTop: '1px solid rgba(37, 99, 235, 0.15)',
      }}
    >
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/">
              <img src={LOGO_URL} alt="VSTVault" className="h-7 w-auto mb-3" />
            </Link>
            <p className="text-sm" style={{ color: 'oklch(0.50 0.02 255)', lineHeight: '1.6' }}>
              The largest collection of free professional VST plugins. No paywalls, no trials — just great plugins.
            </p>
          </div>

          {/* Plugins */}
          <div>
            <h4 className="font-display font-600 text-sm mb-3" style={{ color: 'oklch(0.75 0.10 255)' }}>
              Plugins
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/plugins', label: 'All Plugins' },
                { href: '/plugins?sort=newest', label: 'Newest' },
                { href: '/plugins?sort=downloads', label: 'Most Downloaded' },
                { href: '/request', label: 'Request a Plugin' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm nav-link hover:text-blue-400 transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-600 text-sm mb-3" style={{ color: 'oklch(0.75 0.10 255)' }}>
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/blog', label: 'Blog' },
                { href: '/faq', label: 'FAQ' },
                { href: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm nav-link hover:text-blue-400 transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-600 text-sm mb-3" style={{ color: 'oklch(0.75 0.10 255)' }}>
              Legal
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/dmca', label: 'DMCA' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm nav-link hover:text-blue-400 transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs" style={{ color: 'oklch(0.40 0.02 255)' }}>
            © {new Date().getFullYear()} VSTVault. All plugins are provided free of charge.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs mr-2" style={{ color: 'oklch(0.40 0.02 255)' }}>
              vstvault.org
            </span>
            <div className="flex items-center gap-1">
              <span
                className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs"
                style={{
                  background: 'rgba(37, 99, 235, 0.15)',
                  color: 'oklch(0.65 0.18 255)',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                <Music size={10} />
                100% FREE
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
