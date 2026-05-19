
import { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const phrases = [
    "Digital Buildings",
    "Internet of Things",
    "Robotics",
    "Artificial Intelligence",
    "Technology Leadership",
    "Innovation Strategy"
  ];

  // Cycle through v2.2 palette: deep teal → slate teal → mist teal → dusty plum
  const colors = [
    '#0A2E36',
    '#1F4B53',
    '#5C7E83',
    '#5A4357',
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const currentColor = colors[currentPhraseIndex % colors.length];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentPhrase = phrases[currentPhraseIndex];

    if (isTyping) {
      if (currentText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, 80 + Math.random() * 40);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 1800);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => setCurrentText(currentText.slice(0, -1)), 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentPhraseIndex]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="inline-block cursor-default select-none font-semibold"
      style={{ color: currentColor }}
    >
      {currentText}
      <span
        className="inline-block ml-1 transition-opacity duration-75"
        style={{ opacity: showCursor ? 1 : 0, color: currentColor }}
      >
        |
      </span>
    </span>
  );
};

export default TypingAnimation;
