import ParticleField from '@/src/components/lab/ParticleField';

export default function LabBackgroundPage() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      {/* particleColors already matches the component default (ported from
          this same source). Only the connection-line look was hardcoded
          differently in the original — reproduced here via props. */}
      <ParticleField lineColor="rgb(0, 255, 179)" lineAlpha={0.065} tapToggle />
    </div>
  );
}
