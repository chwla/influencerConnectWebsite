'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)', padding: '40px 0' }}>
            <div className="page-container">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontWeight: 700, fontSize: '18px', fontFamily: 'var(--font-display)' }}>
                            <span style={{ color: 'var(--white)' }}>Influencer</span>
                            <span style={{ color: 'var(--accent-light)' }}>Connect</span>
                        </span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>© Influencer Connect Media</span>
                        <a href="mailto:raghav@influencer-connect.com" style={{ color: 'var(--text-secondary)', fontSize: '13px', textDecoration: 'none' }}>raghav@influencer-connect.com</a>
                    </div>

                    <nav style={{ display: 'flex', gap: '24px' }}>
                        <Link href="/about" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>About</Link>
                        <Link href="/services" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Services</Link>
                        <Link href="/contact" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Contact</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
