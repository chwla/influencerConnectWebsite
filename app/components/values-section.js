'use client';
import React from 'react';

const values = [
    { title: 'Transparency First', desc: 'No hidden fees. You see exactly where your budget goes.' },
    { title: 'Creator-Centric', desc: 'Happy creators make better content. We treat them like partners.' },
    { title: 'Performance Mindset', desc: "We don't just post; we optimize for conversions and ROI." },
];

const prohibited = [
    'Adult Content',
    'Tobacco & Vaping',
    'Irresponsible Alcohol Promotion',
    'Animal Cruelty',
    'Illegal & Harmful Activity',
    'Unethical Creators',
];

const ValuesSection = () => {
    return (
        <section className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
            <div className="page-container">
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <p className="section-label">What We Stand For</p>
                    <h2 className="section-title">Ethics &amp; Values</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        At Influencer Connect, we believe influence carries responsibility. We partner only with creators and brands that align with our commitment to safety, integrity, and positive social impact.
                    </p>
                </div>

                <div className="grid-3" style={{ marginBottom: '48px' }}>
                    {values.map((v, i) => (
                        <div key={v.title} className="ic-card fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div style={{
                                width: '40px',
                                height: '4px',
                                background: 'var(--accent-glow)',
                                borderRadius: '2px',
                                marginBottom: '20px'
                            }} />
                            <h3 style={{ fontWeight: 700, fontSize: '20px', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>
                                {v.title}
                            </h3>
                            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6 }}>
                                {v.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="ethics-card fade-in-up">
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--text-primary)', textAlign: 'center', margin: '0 0 24px 0' }}>
                        What We Will Not Work With
                    </h3>
                    <div className="grid-2">
                        <div>
                            {prohibited.slice(0, 3).map((item) => (
                                <div key={item} className="ethics-item">
                                    <span className="ethics-dash" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            {prohibited.slice(3).map((item) => (
                                <div key={item} className="ethics-item">
                                    <span className="ethics-dash" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
