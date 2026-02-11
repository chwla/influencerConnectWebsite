'use client';
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-text-animate">
          <p className="hero-eyebrow">
            We are <span style={{ color: 'var(--accent-glow)', fontWeight: 600 }}>Influencer Connect</span>
          </p>
          <h1 className="hero-title">
            ROI-focused <span style={{ color: 'var(--accent-glow)' }}>influencer campaigns</span> for D2C and startup brands.
          </h1>
          <p className="hero-description">
            We specialise in Beauty, Fashion, Gaming, SaaS, and Local Brands. Trusted by top brands to connect them with world-class creators that audiences trust.
          </p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn-primary">Send us a Brief</Link>
            <Link href="/services" className="btn-secondary">Our Services</Link>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=450&fit=crop"
              alt="Social media and influencer marketing"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 'var(--radius-lg)',
              }}
            />
            <div className="hero-image-overlay" />
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
