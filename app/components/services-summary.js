'use client';
import React from 'react';

const services = [
  {
    title: 'Influencer Campaigns',
    desc: 'End-to-end campaign management from brief to reporting and ROI analysis.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
  },
  {
    title: 'Sourcing & Outreach',
    desc: 'Finding and contacting the perfect creators for your niche across all platforms.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop',
  },
  {
    title: 'UGC / Content Production',
    desc: 'High-quality authentic content that resonates with your target audience.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop',
  },
  {
    title: 'Paid Social + Whitelisting',
    desc: 'Amplifying top-performing creator content through paid ad campaigns.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
  },
  {
    title: 'Social Media Strategy',
    desc: 'Comprehensive Meta Ads, organic growth strategies, and audience building.',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=250&fit=crop',
  },
];

const ServicesSummary = () => {
  return (
    <section className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
      <div className="page-container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p className="section-label">Our Services</p>
          <h2 className="section-title" style={{ margin: '0 auto 12px' }}>What we do</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            End-to-end influencer marketing: strategy, talent &amp; creative execution focused on audience activation.
          </p>
        </div>

        <div className="grid-5">
          {services.map((service, i) => (
            <div key={service.title} className="ic-card fade-in-up" style={{ animationDelay: `${i * 0.08}s`, overflow: 'hidden', padding: 0 }}>
              <div style={{ width: '100%', height: '160px', overflow: 'hidden' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '20px', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>
                  {service.title}
                </h3>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6 }}>
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;
