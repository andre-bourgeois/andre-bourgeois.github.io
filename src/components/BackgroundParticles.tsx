
import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  color: string;
}

const BackgroundParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Brand colors from your design system
  const colors = [
    '#F24F22', // Brand Orange
    '#ED1A25', // Brand Red
    '#612D90', // Brand Purple
    '#314CA3', // Brand Blue
  ];

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 40; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1, // 1-4px
          opacity: Math.random() * 0.3 + 0.2, // 0.1-0.4
          speed: Math.random() * 2 + 1, // 1-3
          color: colors[Math.floor(Math.random() * colors.length)], // Random color
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-drift"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            backgroundColor: particle.color,
            animationDelay: `${particle.id * 0.5}s`,
            animationDuration: `${particle.speed * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
