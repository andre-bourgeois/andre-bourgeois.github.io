import React from 'react';

const CpuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth={2}        // Slightly thicker stroke
    strokeLinecap="round"    // Rounded line ends
    strokeLinejoin="round"
    stroke="url(#brand-gradient)"
    {...props}
  >
    <defs>
      <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F24F22" stopOpacity="0.8" />
        <stop offset="33%" stopColor="#ED1A25" stopOpacity="0.8" />
        <stop offset="66%" stopColor="#612D90" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#314CA3" stopOpacity="0.8" />
      </linearGradient>
    </defs>

    {/* Replace tiny stroke paths with circles for dots */}
    <circle cx="12" cy="20" r="1" fill="url(#brand-gradient)" />
    <circle cx="12" cy="4" r="1" fill="url(#brand-gradient)" />
    <circle cx="17" cy="20" r="1" fill="url(#brand-gradient)" />
    <circle cx="17" cy="4" r="1" fill="url(#brand-gradient)" />
    <circle cx="2" cy="12" r="1" fill="url(#brand-gradient)" />
    <circle cx="2" cy="17" r="1" fill="url(#brand-gradient)" />
    <circle cx="2" cy="7" r="1" fill="url(#brand-gradient)" />
    <circle cx="20" cy="12" r="1" fill="url(#brand-gradient)" />
    <circle cx="20" cy="17" r="1" fill="url(#brand-gradient)" />
    <circle cx="20" cy="7" r="1" fill="url(#brand-gradient)" />
    <circle cx="7" cy="20" r="1" fill="url(#brand-gradient)" />
    <circle cx="7" cy="4" r="1" fill="url(#brand-gradient)" />

    {/* Main rectangular shapes */}
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="url(#brand-gradient)" fill="none" />
    <rect x="8" y="8" width="8" height="8" rx="1" stroke="url(#brand-gradient)" fill="none" />
  </svg>
);

export default CpuIcon;
