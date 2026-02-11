import Link from 'next/link';
import Navbar from '../components/navbar';
import ValuesSection from '../components/values-section';
import TeamSection from '../components/team-section';

export default function AboutPage() {
    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <Navbar />

            {/* Hero Section */}
            <section className="section-spacing-lg" style={{ paddingTop: '160px', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-10%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(16, 49, 81, 0.15), transparent 70%)',
                    pointerEvents: 'none'
                }} />

                <div className="page-container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
                        <div>
                            <p className="hero-eyebrow fade-in-up">Who We Are</p>
                            <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.1s' }}>
                                Connecting the World Through <span style={{ color: 'var(--accent-light)' }}>Influence.</span>
                            </h1>
                            <p className="hero-description fade-in-up" style={{ animationDelay: '0.2s', fontSize: '18px' }}>
                                Influencer Connect sits squarely in the middle between brands that want attention and creators who have it.
                                We bridge the gap, ensuring that campaigns are smooth, profitable, and impactful for both sides.
                            </p>
                            <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
                                <Link href="/contact" className="btn-primary">
                                    Work With Us
                                </Link>
                            </div>
                        </div>

                        <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <div style={{
                                aspectRatio: '1',
                                background: 'var(--bg-card)',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--border-card)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            }}>
                                {/* Visual Representation of "Sitting in the Middle" */}
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ display: 'flex', gap: '32px', marginBottom: '32px', justifyContent: 'center' }}>
                                        <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>BRANDS</div>
                                        <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>CREATORS</div>
                                    </div>
                                    <div style={{
                                        background: 'var(--accent)',
                                        padding: '12px 24px',
                                        borderRadius: 'var(--radius-md)',
                                        display: 'inline-block',
                                        fontWeight: 'bold',
                                        boxShadow: '0 0 40px var(--accent-glow)'
                                    }}>
                                        INFLUENCER CONNECT
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <ValuesSection />

            {/* Team Section */}
            <TeamSection featured={true} />

            {/* CTA Section */}
            <section className="section-spacing">
                <div className="page-container">
                    <div className="ic-card" style={{ textAlign: 'center', padding: '64px 32px' }}>
                        <h2 className="section-title" style={{ fontSize: '36px', marginBottom: '24px' }}>
                            Join Our Network
                        </h2>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/brands" className="btn-primary">
                                I'm a Brand
                            </Link>
                            <Link href="/creators" className="btn-secondary">
                                I'm a Creator
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
