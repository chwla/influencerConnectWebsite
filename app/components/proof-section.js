'use client';
import React from 'react';

const ProofSection = () => {
  return (
    <section className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="page-container" style={{ textAlign: 'center' }}>

        {/* Quote */}
        <div className="ic-card-sm fade-in-up" style={{ display: 'inline-block', marginBottom: '48px', maxWidth: '700px' }}>
          <blockquote style={{ margin: 0, fontSize: '17px', lineHeight: 1.7, color: 'var(--text-primary)', fontStyle: 'italic' }}>
            &ldquo;Influencer Connect Media helped us reach high-value audiences with creators who actually move the needle — creative, measurable and fast.&rdquo;
          </blockquote>
        </div>

        {/* Featured Work — real case studies only */}
        <div>
          <p className="section-label" style={{ textAlign: 'center' }}>Featured Work</p>
          <div className="featured-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <a href="https://www.trendhunter.com/trends/the-dolcelorian" target="_blank" rel="noopener noreferrer" className="ic-card featured-link-card fade-in-up">
              <div style={{ width: '100%', height: '160px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '16px' }}>
                <img
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&h=300&fit=crop"
                  alt="Dolce and Gabbana x Boson Protocol collaboration"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Dolce &amp; Gabbana x Boson Protocol</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '12px' }}>Managed collaboration between luxury fashion and web3 commerce</div>
              <div style={{ color: 'var(--accent-glow)', fontSize: '14px', fontWeight: 600 }}>Read Case Study →</div>
            </a>
            <a href="https://x.com/BosonProtocol/status/1935340118409170992?s=20" target="_blank" rel="noopener noreferrer" className="ic-card featured-link-card fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div style={{ width: '100%', height: '160px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '16px' }}>
                <img
                  src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=500&h=300&fit=crop"
                  alt="Campaign video production"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Campaign Video</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '12px' }}>Influencer campaign with Boson Protocol on social platforms</div>
              <div style={{ color: 'var(--accent-glow)', fontSize: '14px', fontWeight: 600 }}>View on X →</div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProofSection;
