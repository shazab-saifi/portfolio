import { useEffect, useRef } from "react";

const BOTTOM_OFFSET = 4;
const FALLBACK_Y_THRESHOLD = 150;

function isInsideFixedContainer(el: HTMLElement) {
  let node = el.parentElement;
  while (node) {
    if (window.getComputedStyle(node).position === "fixed") return true;
    node = node.parentElement;
  }
  return false;
}

const useIntersectionObserver = (
  setActiveId: (id: string) => void,
  activeId: string,
) => {
  const headingsRef = useRef<Record<string, IntersectionObserverEntry>>({});
  const isAtBottomRef = useRef(false);

  useEffect(() => {
    const headingsElements: HTMLElement[] = Array.from(
      document.querySelectorAll("h2, h1"),
    );
    const flowElements = headingsElements.filter(
      (el) => !isInsideFixedContainer(el),
    );
    const fixedHeadings = headingsElements.filter((el) =>
      isInsideFixedContainer(el),
    );
    const fixedHeading = fixedHeadings[fixedHeadings.length - 1];

    const update = () => {
      const visibleHeadings: IntersectionObserverEntry[] = [];
      Object.keys(headingsRef.current).forEach((key) => {
        const headingsElement = headingsRef.current[key];
        if (headingsElement.isIntersecting)
          visibleHeadings.push(headingsElement);
      });

      const getIndexFromId = (id: string) =>
        headingsElements.findIndex((heading) => heading.id === id);

      if (fixedHeading && isAtBottomRef.current) {
        setActiveId(fixedHeading.id);
        return;
      }

      if (visibleHeadings.length === 1) {
        setActiveId((visibleHeadings[0].target as HTMLElement).id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) =>
            getIndexFromId((a.target as HTMLElement).id) -
            getIndexFromId((b.target as HTMLElement).id),
        );
        setActiveId((sortedVisibleHeadings[0].target as HTMLElement).id);
      } else if (activeId) {
        const activeElement = headingsElements.find((el) => el.id === activeId);
        if (!activeElement || isInsideFixedContainer(activeElement)) return;

        const activeIndex = headingsElements.findIndex(
          (el) => el.id === activeId,
        );
        const activeIdYcoord = activeElement?.getBoundingClientRect().y;
        if (
          activeIdYcoord &&
          activeIdYcoord > FALLBACK_Y_THRESHOLD &&
          activeIndex !== 0
        ) {
          setActiveId(headingsElements[activeIndex - 1].id);
        }
      }
    };

    const callback = (headings: IntersectionObserverEntry[]) => {
      headingsRef.current = headings.reduce<
        Record<string, IntersectionObserverEntry>
      >(
        (map, headingsElement) => {
          const id = (headingsElement.target as HTMLElement).id;
          if (id) {
            map[id] = headingsElement;
          }
          return map;
        },
        { ...headingsRef.current },
      );

      update();
    };

    const handleScroll = () => {
      isAtBottomRef.current =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - BOTTOM_OFFSET;
      update();
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-96px 0px -40px 0px",
    });

    flowElements.forEach((ele) => observer.observe(ele));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveId, activeId]);
};

export default useIntersectionObserver;
