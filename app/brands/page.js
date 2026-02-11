import Link from 'next/link';
import Navbar from '../components/navbar';

export default function BrandsPage() {
    const benefits = [
        {
            title: 'Sales & Conversions',
            description: 'We focus on creators who can actually move potential customers down the funnel, not just vanity metrics.',
        },
        {
            title: 'High-Quality Content (UGC)',
            description: 'Get a library of authentic content to use in your paid ads and social channels at a fraction of the cost of a production studio.',
        },
        {
            title: 'Brand Awareness',
            description: 'Get your product in front of thousands of targeted eyes through trusted voices in your specific niche.',
        }
    ];

    const process = [
        { step: '01', title: 'Strategy & Matching', desc: 'We analyze your goals and find the perfect creator fit.' },
        { step: '02', title: 'Campaign Execution', desc: 'We handle the briefs, shipping, and content coordination.' },
        { step: '03', title: 'Reporting & ROI', desc: 'You get a detailed report on performance and sales impact.' }
    ];

    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <Navbar />

            {/* Hero Section */}
            <section className="section-spacing-lg" style={{ paddingTop: '160px' }}>
                <div className="page-container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
                        <div>
                            <p className="hero-eyebrow fade-in-up">For Brands</p>
                            <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.1s' }}>
                                Scale Your Revenue With <span style={{ color: 'var(--accent-light)' }}>Creator Marketing.</span>
                            </h1>
                            <p className="hero-description fade-in-up" style={{ animationDelay: '0.2s' }}>
                                Stop wasting budget on ads that don't convert. We help VC-backed and fast-growing DTC brands unlock the power of authentic influencer partnerships.
                            </p>
                            <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
                                <Link href="/contact" className="btn-primary">
                                    Book a Strategy Call
                                </Link>
                            </div>
                        </div>
                        <div className="hero-image-wrapper fade-in-up" style={{ animationDelay: '0.4s', height: '400px', background: 'var(--bg-card)', border: '1px solid var(--border-card)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* Placeholder for Brand Dashboard Visual */}
                            <div style={{ textAlign: 'center', opacity: 0.7 }}>
                                <div style={{ fontSize: '64px', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--accent)' }}>High</div>
                                <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px' }}>ROAS Focus</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-spacing">
                <div className="page-container">
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <h2 className="section-title">Why Partner With Us?</h2>
                    </div>
                    <div className="grid-3">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="ic-card fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                                <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: 'var(--white)' }}>
                                    {benefit.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
                <div className="page-container">
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <p className="section-label">Our Process</p>
                        <h2 className="section-title">How It Works</h2>
                    </div>
                    <div className="grid-3">
                        {process.map((item, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '48px', fontWeight: 800, color: 'rgba(255,255,255,0.1)', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>{item.step}</div>
                                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-spacing">
                <div className="page-container">
                    <div className="ic-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '64px 32px' }}>
                        <h2 className="section-title" style={{ fontSize: '36px', marginBottom: '24px' }}>
                            Ready to grow?
                        </h2>
                        <Link href="/contact" className="btn-primary">
                            Let's Talk Strategy
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
