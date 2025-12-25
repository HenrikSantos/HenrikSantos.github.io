import { useState, useEffect } from "react";

const SECTIONS = [
  "inicio",
  "stack",
  "trajetoria",
  "experiencia",
  "formacao",
  "frontend",
  "contato",
] as const;

type SectionId = (typeof SECTIONS)[number];

let activeSection: SectionId = "inicio";
const listeners = new Set<(section: SectionId) => void>();
let observer: IntersectionObserver | null = null;

function initObserver(): void {
  if (observer || typeof window === "undefined") return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection = entry.target.id as SectionId;
          listeners.forEach((listener) => listener(activeSection));
        }
      });
    },
    {
      rootMargin: "-30% 0px -70% 0px",
    },
  );

  SECTIONS.forEach((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      observer?.observe(element);
    }
  });
}

export function useActiveSection(): SectionId {
  const [section, setSection] = useState<SectionId>(activeSection);

  useEffect(() => {
    initObserver();
    listeners.add(setSection);

    return () => {
      listeners.delete(setSection);
      if (listeners.size === 0 && observer) {
        observer.disconnect();
        observer = null;
      }
    };
  }, []);

  return section;
}
