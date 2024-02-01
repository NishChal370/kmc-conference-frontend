
import { useState } from "react";

function useSitePagination() {
      const [pageNumber, setPageNumber] = useState<number>(1);

      const changePageNumber = (pageNumber: number) => {
            setPageNumber(pageNumber)
      };

      return { pageNumber, changePageNumber } as const;
}

export default useSitePagination