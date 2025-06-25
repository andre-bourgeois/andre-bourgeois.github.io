import React from 'react';

const CpuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#brand-gradient)"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <defs>
      <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F24F22" stopOpacity="0.8" />
        <stop offset="33%" stopColor="#ED1A25" stopOpacity="0.8" />
        <stop offset="66%" stopColor="#612D90" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#314CA3" stopOpacity="0.8" />
      </linearGradient>
    </defs>

    {/* Pins */}
    <path d="M12 20v2" />
    <path d="M12 2v2" />
    <path d="M17 20v2" />
    <path d="M17 2v2" />
    <path d="M2 12h2" />
    <path d="M2 17h2" />
    <path d="M2 7h2" />
    <path d="M20 12h2" />
    <path d="M20 17h2" />
    <path d="M20 7h2" />
    <path d="M7 20v2" />
    <path d="M7 2v2" />

    {/* Outer square */}
    <rect x="4" y="4" width="16" height="16" rx="2" />

    {/* Inner square */}
    <rect x="8" y="8" width="8" height="8" rx="1" />
  </svg>
);

export default CpuIcon;