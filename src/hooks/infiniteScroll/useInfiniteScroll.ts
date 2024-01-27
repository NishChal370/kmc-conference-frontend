import { useEffect, useMemo, useRef, useState } from "react";

function useInfiniteScroll({ totalPages }: { totalPages: number }) {
      const [pageNumber, setPageNumber] = useState<number>(1);
      const pageNumberRef = useRef<number>(1);
      const totalPagesRef = useRef<number>(totalPages);
      const loader = useRef<HTMLDivElement>(null);

      totalPagesRef.current = useMemo(() => totalPages, [totalPages]);

      const toShowLoader = useMemo(
            () => totalPagesRef.current !== 0 && pageNumber < totalPagesRef.current,
            [pageNumber, totalPagesRef.current]
      );

      useEffect(() => {
            const observer = new IntersectionObserver(
                  (entries) => {
                        if (entries[0].isIntersecting && pageNumberRef.current < totalPagesRef.current) {
                              if (pageNumber === 0) return;

                              setPageNumber((prev) => {
                                    pageNumberRef.current = prev + 1;

                                    return prev + 1;
                              });
                        }
                  },
                  { threshold: 1.0 }
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

      return {
            pageNumber: pageNumber,
            totalPages: totalPagesRef.current,
            loader,
            toShowLoader,
      } as const;
}

export default useInfiniteScroll