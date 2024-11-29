import React, { useState, useEffect } from 'react';
import { Heart, Star, Stethoscope, SmilePlus } from 'lucide-react';

// Componente Card
const Card = ({ className = '', children }) => (
  <div className={`bg-backgroundColor rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

// Componente StatCounter
const StatCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span className="text-4xl font-bold">{count}</span>;
};

// Componente StatCard
const StatCard = ({ icon: Icon, value, label }) => (
  <Card className="p-6 flex flex-col items-center justify-center space-y-2">
    <Icon className="w-8 h-8 text-white" />
    <StatCounter end={value} />
    <p className="text-white text-lg">{label}</p>
  </Card>
);

// Componente MedicalStats
const MedicalStats = () => {
  const stats = [
    { icon: Stethoscope, value: 1080, label: "Cirugías" },
    { icon: Heart, value: 650, label: "Consultas" },
    { icon: Star, value: 80, label: "Pacientes atendidos" },
    { icon: SmilePlus, value: 180, label: "Sonrisas" }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default MedicalStats;
