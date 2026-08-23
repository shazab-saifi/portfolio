import { useEffect, useState } from "react";

export const useHeadingsData = () => {
  const [headingsData, setHeadingsData] = useState<Element[] | []>([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h1"));
    const set = () => setHeadingsData(headingElements);
    set();
  }, []);

  return { headingsData };
};
