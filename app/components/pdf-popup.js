'use client';
import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';

const PdfPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);

    useEffect(() => {
        // Show popup after 5 seconds, but only once per session
        const timer = setTimeout(() => {
            if (!hasOpened && !sessionStorage.getItem('pdfPopupShown')) {
                setIsOpen(true);
                setHasOpened(true);
                sessionStorage.setItem('pdfPopupShown', 'true');
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [hasOpened]);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(5px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.3s ease'
        }}>
            <div className="ic-card fade-in-up" style={{
                maxWidth: '500px',
                width: '90%',
                position: 'relative',
                padding: '40px',
                textAlign: 'center',
                border: '1px solid var(--accent)'
            }}>
                <button
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer'
                    }}
                >
                    <X size={24} />
                </button>

                <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--white)' }}>
                    Get The Agency Playbook
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                    Download our exclusive Agency Edition of The Influencer Marketing Playbook and learn how to scale your campaigns effectively.
                </p>

                <a
                    href="/The Influencer Marketing Playbook (Agency Edition).pdf"
                    download
                    className="btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    onClick={() => setIsOpen(false)}
                >
                    <Download size={18} />
                    Download PDF
                </a>
            </div>
        </div>
    );
};

export default PdfPopup;
