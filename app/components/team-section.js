'use client';
import React from 'react';

const team = [
  { name: 'Raghav', role: 'CEO', image: '/raghav_goyal.jpeg' },
  { name: 'Simon', role: 'Head of Growth', image: '/simon.jpeg' },
  { name: 'Soham', role: 'CTO', image: '/soham.jpeg' },
  { name: 'Saad', role: 'Advisor', image: '/saad.jpeg' },
];

const TeamSection = ({ featured = false }) => {
  return (
    <section className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
      <div className="page-container">
        <div style={{ textAlign: 'center', marginBottom: featured ? '64px' : '48px' }}>
          <p className="section-label">Our People</p>
          <h2 className="section-title" style={{ fontSize: featured ? '48px' : '32px' }}>Meet the Team</h2>
        </div>

        <div className={featured ? "grid-2" : "grid-4"} style={{ gap: featured ? '48px' : '24px' }}>
          {team.map((member) => (
            <div key={member.name} className="ic-card" style={{ textAlign: 'center', padding: featured ? '48px' : '24px' }}>
              <div
                className="team-avatar"
                style={{
                  overflow: 'hidden',
                  width: featured ? '180px' : '100px',
                  height: featured ? '180px' : '100px',
                  margin: '0 auto 24px'
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{
                fontWeight: 700,
                fontSize: featured ? '28px' : '18px',
                color: 'var(--text-primary)',
                margin: '0 0 8px 0'
              }}>
                {member.name}
              </h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: featured ? '18px' : '14px' }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
