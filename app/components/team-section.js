'use client';
import React from 'react';

const team = [
  { name: 'Raghav', role: 'CEO', initial: 'R' },
  { name: 'Simon', role: 'Head of Growth', initial: 'S' },
  { name: 'Soham', role: 'CTO', initial: 'S' },
  { name: 'Saad', role: 'Advisor', initial: 'S' },
];

const TeamSection = () => {
  return (
    <section className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
      <div className="page-container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p className="section-label">Our People</p>
          <h2 className="section-title">Meet the Team</h2>
        </div>

        <div className="grid-4">
          {team.map((member) => (
            <div key={member.name} className="ic-card" style={{ textAlign: 'center' }}>
              <div className="team-avatar">{member.initial}</div>
              <h3 style={{ fontWeight: 700, fontSize: '18px', color: 'var(--text-primary)', margin: '0 0 4px 0' }}>
                {member.name}
              </h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '14px' }}>
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
