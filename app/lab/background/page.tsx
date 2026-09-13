import ParticleField from '@/src/components/lab/ParticleField';

export default function LabBackgroundPage() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <ParticleField />
    </div>
  );
}
