import Link from 'next/link';
import Navbar from '../components/navbar';

export default function CreatorsPage() {
    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <Navbar />

            {/* Hero Section */}
            <section className="section-spacing-lg" style={{ paddingTop: '160px' }}>
                <div className="page-container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
                        <div>
                            <p className="hero-eyebrow fade-in-up">For Creators</p>
                            <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.1s' }}>
                                Get Paid To Create <span style={{ color: 'var(--accent-light)' }}>Content You Love.</span>
                            </h1>
                            <p className="hero-description fade-in-up" style={{ animationDelay: '0.2s' }}>
                                We connect talented creators with brands that value authenticity. No more chasing payments or confusing contracts. We handle the business, you handle the creativity.
                            </p>
                            <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
                                <Link href="/contact" className="btn-primary">
                                    Join Our Roster
                                </Link>
                            </div>
                        </div>
                        <div className="hero-image-wrapper fade-in-up" style={{ animationDelay: '0.4s', height: '400px', background: 'var(--bg-card)', border: '1px solid var(--border-card)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* Placeholder for Creator Dashboard Visual */}
                            <div style={{ textAlign: 'center', opacity: 0.7 }}>
                                <div style={{ fontSize: '64px', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--accent)' }}>100%</div>
                                <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px' }}>Creator Focused</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-spacing">
                <div className="page-container">
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <h2 className="section-title">Why Join Influencer Connect?</h2>
                    </div>
                    <div className="grid-3">
                        <div className="ic-card fade-in-up">
                            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: 'var(--white)' }}>top-Tier Brands</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Access to campaigns with brands you actually want to work with, from startups to household names.</p>
                        </div>
                        <div className="ic-card fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: 'var(--white)' }}>Fair Payment</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>We ensure you get paid what you're worth, on time, every time.</p>
                        </div>
                        <div className="ic-card fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: 'var(--white)' }}>Creative Freedom</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>We advocate for your creative vision. Brands hire you for your style, not to be a robot.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-spacing">
                <div className="page-container">
                    <div className="ic-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '64px 32px' }}>
                        <h2 className="section-title" style={{ fontSize: '36px', marginBottom: '24px' }}>
                            Ready to Collaborate?
                        </h2>
                        <Link href="/contact" className="btn-primary">
                            Apply Now
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
