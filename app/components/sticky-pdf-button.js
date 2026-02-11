'use client';
import React from 'react';
import { Download, BookOpen } from 'lucide-react';

const StickyPdfButton = () => {
    return (
        <a
            href="/The Influencer Marketing Playbook (Agency Edition).pdf"
            download
            style={{
                position: 'fixed',
                bottom: '32px',
                right: '32px',
                zIndex: 9998,
                background: 'var(--accent)',
                color: 'var(--white)',
                padding: '12px 20px',
                borderRadius: '50px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'transform 0.2s ease',
                border: '1px solid rgba(255,255,255,0.1)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <BookOpen size={18} />
            <span>Get Playbook</span>
        </a>
    );
};

export default StickyPdfButton;
