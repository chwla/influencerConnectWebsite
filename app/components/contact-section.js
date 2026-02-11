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
                                <a href="mailto:raghav@influencer-connect.com" style={{ color: 'var(--white)', fontWeight: 500 }}>
                                    raghav@influencer-connect.com
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
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const formData = {
                                    name: e.target.name.value,
                                    email: e.target.email.value,
                                    message: e.target.message.value,
                                    _subject: "New Submission from Influencer Connect Website",
                                    _captcha: "false"
                                };

                                const btn = e.target.querySelector('button[type="submit"]');
                                const originalText = btn.innerText;
                                btn.innerText = 'Sending...';
                                btn.disabled = true;

                                try {
                                    const response = await fetch('https://formsubmit.co/ajax/raghav@influencer-connect.com', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                            'Accept': 'application/json'
                                        },
                                        body: JSON.stringify(formData),
                                    });

                                    if (response.ok) {
                                        alert("Thanks! We'll be in touch shortly.");
                                        e.target.reset();
                                    } else {
                                        alert("Something went wrong. Please try again.");
                                    }
                                } catch (error) {
                                    console.error(error);
                                    alert("Error sending message.");
                                } finally {
                                    btn.innerText = originalText;
                                    btn.disabled = false;
                                }
                            }}
                        >
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" className="ic-input" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" className="ic-input" placeholder="your@email.com" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea id="message" name="message" className="ic-input" rows={4} placeholder="Tell us about your brand..." required style={{ resize: 'vertical' }} />
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
