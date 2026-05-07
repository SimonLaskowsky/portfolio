"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "const available = true",
  "// open to new work",
  'import { craft } from "web"',
  "git push origin main",
  "npm run dev ✓",
];

const TYPING_MS = 65;
const DELETING_MS = 32;
const PAUSE_MS = 1800;
const WAIT_MS = 450;

export default function TypedLine() {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const phrase = PHRASES[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < phrase.length) {
        timer = setTimeout(
          () => setText(phrase.slice(0, text.length + 1)),
          TYPING_MS,
        );
      } else {
        timer = setTimeout(() => setDeleting(true), PAUSE_MS);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), DELETING_MS);
      } else {
        timer = setTimeout(() => {
          setDeleting(false);
          setIndex((i) => (i + 1) % PHRASES.length);
        }, WAIT_MS);
      }
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <div className="font-mono text-[11px] text-bone/35 tracking-wide">
      {text}
      <span className="animate-pulse text-bone/50">_</span>
    </div>
  );
}
