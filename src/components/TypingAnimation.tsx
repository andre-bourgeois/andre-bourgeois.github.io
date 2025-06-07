
import { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const phrases = [
    "Good technology leaves no fingerprints.",
    "Buildings are products, not infrastructure.",
    "Smart systems that actually make sense.",
    "IoT solutions that disappear into experience.",
    "Digital twins that mirror reality.",
    "Technology that serves humans, not the other way around."
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isTyping) {
      if (currentText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, 50 + Math.random() * 50); // Variable typing speed
        
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before starting to delete
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 30);
        
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next phrase
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [currentText, isTyping, currentPhraseIndex, phrases]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block">
      {currentText}
      <span className={`inline-block w-0.5 h-6 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75`}>
        |
      </span>
    </span>
  );
};

export default TypingAnimation;
