import { useEffect, useRef, useState } from "react";

function useInfiniteScroll({ totalPages }: { totalPages: number }) {
      const [page, setPage] = useState<number>(0)
      const loader = useRef<HTMLDivElement>(null);
      const [triggerRerender, setTriggerRerender] = useState<number>(0);


      // Intersection Observer to call increasePage
      useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });

            const observer = new IntersectionObserver(
                  (entries) => {
                        if (entries[0].isIntersecting) {
                              setTriggerRerender(prev => prev + 1);
                        }
                  },
                  { threshold: 1 }
            );

            if (loader.current) {
                  observer.observe(loader.current);
            }

            return () => {
                  if (loader.current) {
                        observer.unobserve(loader.current);
                  }
            };
      }, []);

      useEffect(() => {

            // Skip updating if triggerRerender is 0  0 means initial load)
            if (triggerRerender === 0) return;

            // Increment the page only if it hasn't reached totalPages
            if (page < totalPages) {
                  setPage(prev => prev + 1);
            }
      }, [triggerRerender]);

      return {
            pageNumber: page || 1,
            loader,
            isInitial: triggerRerender === 0,
      } as const;
}

export default useInfiniteScroll;
