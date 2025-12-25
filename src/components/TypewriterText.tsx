import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export default function TypewriterText({
  text,
  className = "",
  delay = 0,
  speed = 100,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const animate = useCallback(
    (timestamp: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
      }

      const elapsed = timestamp - lastTimeRef.current;

      if (elapsed >= speed) {
        if (indexRef.current <= text.length) {
          setDisplayedText(text.slice(0, indexRef.current));
          indexRef.current++;
          lastTimeRef.current = timestamp;
        } else {
          setIsComplete(true);
          return;
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    },
    [text, speed],
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      rafRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [animate, delay]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: isComplete ? 0 : [1, 0] }}
        transition={{ duration: 0.5, repeat: isComplete ? 0 : Infinity }}
        className="ml-1 inline-block h-[1em] w-[3px] bg-current align-middle"
        style={{ willChange: "opacity" }}
      />
    </span>
  );
}
