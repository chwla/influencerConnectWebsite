'use client';
import React from 'react';

const ContactSection = () => {
    return (
        <section className="section-spacing-lg" style={{ background: 'var(--bg-secondary)' }}>
            <div className="page-container">
                <div className="contact-grid">

                    {/* Left: Info */}
                    <div>
                        <p className="section-label">Get In Touch</p>
                        <h2 className="section-title" style={{ fontSize: '32px' }}>
                            Let&apos;s maximize your ROI
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.7, marginBottom: '32px', maxWidth: '44ch' }}>
                            Ready to scale with influencer marketing? Send us a brief or book a strategy call.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <a href="mailto:influencerconnectai@hotmail.com" style={{ color: 'var(--white)', fontWeight: 500 }}>
                                    influencerconnectai@hotmail.com
                                </a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>Response time: 24–48 hours</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div>
                        <form
                            className="ic-card"
                            style={{ padding: '32px' }}
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("Thanks! We'll be in touch.");
                            }}
                        >
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input type="text" className="ic-input" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="ic-input" placeholder="your@email.com" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea className="ic-input" rows={4} placeholder="Tell us about your brand..." required style={{ resize: 'vertical' }} />
                            </div>
                            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
