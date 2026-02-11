import Link from 'next/link';
import Navbar from '../components/navbar';

export default function ServicesPage() {
    const services = [
        {
            title: 'One-Time Collaborations',
            description: 'Perfect for brands looking for specific deliverables. We connect you with the right influencer for a single campaign.',
            features: ['Targeted Influencer Matching', 'Negotiation & Contracting', 'Content Coordination', 'Performance Tracking'],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            )
        },
        {
            title: 'Influencer Seeding',
            description: 'Scale your reach by getting your product into the hands of many micro-influencers to generate organic buzz.',
            features: ['Product Distribution Strategy', 'Micro & Nano Influencer Outreach', 'UGC Generation', 'Organic Social Proof'],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
            )
        },
        {
            title: 'Talent Management',
            description: 'For creators ready to level up. We handle the business side so you can focus on creating amazing content.',
            features: ['Brand Deal Negotiation', 'Calendar Management', 'Legal & Contracts', 'Career Strategy'],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            )
        },
        {
            title: 'Full Campaign Management',
            description: 'End-to-end management for high-impact campaigns. From strategy to reporting, we handle everything.',
            features: ['Comprehensive Strategy', 'Influencer Sourcing & Vetting', 'Content Approval Workflow', 'Detailed ROI Reporting'],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            )
        }
    ];

    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <Navbar />

            {/* Hero Section */}
            <section className="section-spacing-lg" style={{ paddingTop: '160px', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(16, 49, 81, 0.2), transparent 70%)',
                    pointerEvents: 'none'
                }} />

                <div className="page-container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h1 className="section-title fade-in-up" style={{ fontSize: '56px', marginBottom: '24px' }}>
                            Strategic Influencer Marketing <span style={{ color: 'var(--text-tertiary)' }}>Solutions</span>
                        </h1>
                        <p className="section-subtitle fade-in-up" style={{ margin: '0 auto 40px', animationDelay: '0.1s' }}>
                            We sit in the middle between brands that want attention and creators who have it.
                            Our service models are designed to scale your reach effectively.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-spacing" style={{ paddingTop: 0 }}>
                <div className="page-container">
                    <div className="grid-2">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="ic-card fade-in-up"
                                style={{
                                    animationDelay: `${0.1 * (index + 2)}s`,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%'
                                }}
                            >
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '24px',
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 700,
                                    marginBottom: '16px',
                                    color: 'var(--text-primary)'
                                }}>
                                    {service.title}
                                </h3>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    marginBottom: '32px',
                                    flexGrow: 1
                                }}>
                                    {service.description}
                                </p>

                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {service.features.map((feature, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            marginBottom: '12px',
                                            color: 'var(--text-secondary)',
                                            fontSize: '15px'
                                        }}>
                                            <div className="ethics-dash" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }}></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-spacing">
                <div className="page-container">
                    <div className="ic-card" style={{ textAlign: 'center', padding: '64px 32px' }}>
                        <h2 className="section-title" style={{ fontSize: '36px', marginBottom: '24px' }}>
                            Ready to Scale Your Reach?
                        </h2>
                        <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
                            Whether you're a brand looking for exposure or a creator looking to monetize, we have the right strategy for you.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/brands" className="btn-primary">
                                For Brands
                            </Link>
                            <Link href="/creators" className="btn-secondary">
                                For Creators
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
