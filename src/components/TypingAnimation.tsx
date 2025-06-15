
import { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const phrases = [
    "Smart Buildings",
    "Internet of Things",
    "Robotics",
    "Artificial Intelligence",
    "Technology Leadership",
    "Innovation Strategy"
  ];

  const colors = [
    '#F24F22', // Orange
    '#ED1A25', // Red
    '#612D90', // Purple
    '#314CA3'  // Blue
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Get current color based on phrase index
  const currentColor = colors[currentPhraseIndex % colors.length];

  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[currentPhraseIndex];

    if (isTyping) {
      if (currentText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, 80 + Math.random() * 40);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1800); // Pause before deleting
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 300); // Brief pause before next phrase
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentPhraseIndex]);

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block cursor-default select-none" style={{ color: currentColor }}>
      {currentText}
      <span className={`inline-block ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75`}>
        |
      </span>
    </span>
  );
};

export default TypingAnimation;
