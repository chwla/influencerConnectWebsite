import Hero from './components/hero';
import ProofSection from './components/proof-section';
import ServicesSummary from './components/services-summary';
import TeamSection from './components/team-section';
import ValuesSection from './components/values-section';
import ContactSection from './components/contact-section';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Hero />
      <ProofSection />
      <ServicesSummary />
      <TeamSection />
      <ValuesSection />
      <ContactSection />
    </main>
  );
}
