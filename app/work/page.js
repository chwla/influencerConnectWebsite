import Link from 'next/link';
import Navbar from '../components/navbar';

export default function WorkPage() {
    const caseStudies = [
        {
            client: 'Beauty Brand',
            niche: 'Beauty / Skincare',
            title: 'Scaling UGC for a Skincare Launch',
            stats: { result: 'High ROI', reach: 'Massive', content: 'Authentic' },
            image: '/images/case-study-1.jpg', // Placeholder
            color: '#FFD1DC'
        },
        {
            client: 'Fitness App',
            niche: 'Fitness & Health',
            title: 'User Acquisition via Micro-Influencers',
            stats: { cost: 'Lower CPA', growth: 'Rapid', creators: 'Niche' },
            image: '/images/case-study-2.jpg', // Placeholder
            color: '#A0E7E5'
        },
        {
            client: 'SaaS Platform',
            niche: 'SaaS / Productivity',
            title: 'B2B Influencer Seeding Strategy',
            stats: { quality: 'Qualified', demos: 'Increased', engagement: 'High' },
            image: '/images/case-study-3.jpg', // Placeholder
            color: '#B4F8C8'
        },
        {
            client: 'Fashion Retailer',
            niche: 'Fashion',
            title: 'Seasonal Collection Drop',
            stats: { sales: 'Sold Out', reach: 'Broad', roi: 'Positive' },
            image: '/images/case-study-4.jpg', // Placeholder
            color: '#FBE7C6'
        }
    ];

    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <Navbar />

            {/* Hero Section */}
            <section className="section-spacing-lg" style={{ paddingTop: '160px' }}>
                <div className="page-container" style={{ textAlign: 'center' }}>
                    <h1 className="section-title fade-in-up" style={{ fontSize: '52px', marginBottom: '24px' }}>
                        Featured <span style={{ color: 'var(--text-tertiary)' }}>Work</span>
                    </h1>
                    <p className="section-subtitle fade-in-up" style={{ margin: '0 auto 40px', animationDelay: '0.1s' }}>
                        Real results for real brands. We don't just generate likes; we drive measurable business outcomes through strategic creator partnerships.
                    </p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="section-spacing" style={{ paddingTop: 0 }}>
                <div className="page-container">
                    <div className="grid-2">
                        {caseStudies.map((study, index) => (
                            <div
                                key={index}
                                className="ic-card fade-in-up"
                                style={{
                                    animationDelay: `${0.1 * (index + 2)}s`,
                                    overflow: 'hidden',
                                    padding: 0,
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{
                                    height: '240px',
                                    background: `linear-gradient(45deg, ${study.color}22, ${study.color}44)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: study.color,
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    fontFamily: 'var(--font-display)'
                                }}>
                                    {study.client}
                                </div>

                                <div style={{ padding: '32px' }}>
                                    <div className="section-label" style={{ marginBottom: '8px' }}>{study.niche}</div>
                                    <h3 style={{
                                        fontSize: '24px',
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 700,
                                        marginBottom: '24px',
                                        color: 'var(--text-primary)'
                                    }}>
                                        {study.title}
                                    </h3>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', borderTop: '1px solid var(--border-subtle)', paddingTop: '24px' }}>
                                        {Object.entries(study.stats).map(([key, value]) => (
                                            <div key={key} style={{ textAlign: 'center' }}>
                                                <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--white)', marginBottom: '4px' }}>{value}</div>
                                                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{key}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
                            Want Results Like These?
                        </h2>
                        <Link href="/contact" className="btn-primary">
                            Start Your Campaign
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
