import { Building, Cpu, Lightbulb, Users, BrainCircuit, Workflow, Bot } from 'lucide-react';

const GradientDefs = () => (
  <svg className="absolute w-0 h-0">
    <defs>
      <linearGradient id="gradient-brand" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F24F22" />
        <stop offset="33%" stopColor="#ED1A25" />
        <stop offset="66%" stopColor="#612D90" />
        <stop offset="100%" stopColor="#314CA3" />
      </linearGradient>
    </defs>
  </svg>
);

const IconCard = ({ Icon, title, description }) => (
  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
    <div className="mb-4 w-fit">
      <Icon className="w-8 h-8" style={{ stroke: 'url(#gradient-brand)', fill: 'none' }} />
    </div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const AboutOption1 = () => (
  <section id="about" className="py-20 relative">
    <GradientDefs />
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      {/* Left side omitted for brevity */}

      {/* Expertise Grid */}
      <div className="grid grid-cols-2 gap-10">
        <IconCard
          Icon={Building}
          title="Smart Buildings"
          description="Designing intelligent systems that adapt to human needs and environmental conditions."
        />
        <IconCard
          Icon={Cpu}
          title="Internet of Things"
          description="Creating connected ecosystems that turn data into actionable insights."
        />
        <IconCard
          Icon={Bot}
          title="Robotics"
          description="Researching autonomous coordination and control in multi-agent systems."
        />
        <IconCard
          Icon={BrainCircuit}
          title="Artificial Intelligence"
          description="Exploring the applications and impacts of generative and edge AI."
        />
        <IconCard
          Icon={Users}
          title="Technology Leadership"
          description="Guiding teams and organisations through complex technology decisions."
        />
        <IconCard
          Icon={Lightbulb}
          title="Innovation Strategy"
          description="Making sense of emerging technology and its real-world opportunities."
        />
      </div>
    </div>
  </section>
);