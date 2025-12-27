import { useCallback } from "react";

const SCROLL_OFFSET_RATIO = 1 / 3;

export function useScrollToSection(onAfterScroll?: () => void) {
  const scrollToSection = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href")?.substring(1);
      const targetElement = document.getElementById(targetId || "");

      if (targetElement) {
        const offset =
          window.innerHeight * SCROLL_OFFSET_RATIO -
          targetElement.offsetHeight * SCROLL_OFFSET_RATIO;
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      }

      onAfterScroll?.();
    },
    [onAfterScroll]
  );

  return scrollToSection;
}
