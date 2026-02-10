'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/work' },
    { name: 'About', href: '/about' },
    { name: 'For Brands', href: '/brands' },
    { name: 'For Creators', href: '/creators' },
  ];

  return (
    <nav className={`ic-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="ic-navbar-inner">
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '22px', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
          <span style={{ color: 'var(--white)' }}>Influencer</span>
          <span style={{ color: 'var(--accent-light)' }}>Connect</span>
        </Link>

        <div className="ic-navbar-links">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="ic-navbar-link">
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
            Book a Strategy Call
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <div style={{ padding: '8px 16px' }}>
            <Link href="/contact" className="btn-primary" style={{ width: '100%', display: 'flex' }} onClick={() => setIsMenuOpen(false)}>
              Book a Strategy Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
