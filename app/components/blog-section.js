'use client';
import React from 'react';
import Link from 'next/link';

const articles = [
    {
        title: 'How to Measure Influencer ROI in 2026',
        excerpt: 'Moving beyond vanity metrics to track real business impact from creator partnerships.',
        category: 'Strategy',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    },
    {
        title: "Micro vs Macro Influencers: What's Right for D2C?",
        excerpt: 'Why smaller audiences often yield higher engagement rates and better conversion.',
        category: 'Guides',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop',
    },
    {
        title: 'The Rise of LinkedIn Influencers for B2B',
        excerpt: 'Leveraging professional networks for lead generation and thought leadership.',
        category: 'Trends',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=250&fit=crop',
    },
];

const BlogSection = () => {
    return (
        <section className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
            <div className="page-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
                    <div>
                        <p className="section-label">Learn &amp; Grow</p>
                        <h2 className="section-title" style={{ marginBottom: 0 }}>Latest Resources</h2>
                    </div>
                    <Link href="/blog" className="btn-outline-sm">View all →</Link>
                </div>

                <div className="grid-3">
                    {articles.map((article, i) => (
                        <article key={i} className="ic-card fade-in-up" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden', animationDelay: `${i * 0.1}s` }}>
                            <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <span className="section-label" style={{ marginBottom: '8px', fontSize: '11px' }}>
                                    {article.category}
                                </span>
                                <h3 style={{ fontWeight: 700, fontSize: '18px', color: 'var(--text-primary)', margin: '0 0 8px 0', lineHeight: 1.3 }}>
                                    {article.title}
                                </h3>
                                <p style={{ margin: '0 0 16px 0', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, flex: 1 }}>
                                    {article.excerpt}
                                </p>
                                <div style={{ color: 'var(--white)', fontSize: '14px', fontWeight: 500 }}>
                                    Read Article →
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
