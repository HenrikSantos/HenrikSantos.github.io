import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";

const SECTIONS = [
  "inicio",
  "stack",
  "trajetoria",
  "experiencia",
  "formacao",
  "frontend",
  "contato",
] as const;

export type SectionId = (typeof SECTIONS)[number];

const ActiveSectionContext = createContext<SectionId>("inicio");

interface ActiveSectionProviderProps {
  children: ReactNode;
}

export function ActiveSectionProvider({ children }: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionId>("inicio");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        rootMargin: "-30% 0px -70% 0px",
      }
    );

    SECTIONS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, []);

  return (
    <ActiveSectionContext.Provider value={activeSection}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection(): SectionId {
  return useContext(ActiveSectionContext);
}
