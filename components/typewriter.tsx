"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export function Typewriter({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 1800,
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, deletingSpeed);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1),
          );
        },
        isDeleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className="inline-flex items-baseline">
      <span>{text}</span>
      <span className="ml-0.5 inline-block w-0.75 animate-blink bg-primary align-baseline" />
    </span>
  );
}
