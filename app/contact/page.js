'use client';
import Navbar from '../components/navbar';
import ContactSection from '../components/contact-section';

export default function ContactPage() {
    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <Navbar />
            <div style={{ paddingTop: '80px' }}>
                <ContactSection />
            </div>
        </main>
    );
}
