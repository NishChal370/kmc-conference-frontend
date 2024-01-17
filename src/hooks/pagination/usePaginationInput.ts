import { useState } from 'react'

interface IUsePaginationInput {
      currentPageNumber: number;
      updatePageNumber: (newPageNumber: number) => void;
}

function usePaginationInput({ currentPageNumber, updatePageNumber }: IUsePaginationInput) {
      const [pageNumber, setPageNumber] = useState<number>(currentPageNumber);

      const inputChangeHandler = (event: any) => {
            const value: string = event.target.value;

            setPageNumber(parseInt(value));
      };

      const inputSubmitHandler = (e: any) => {
            e.preventDefault();

            updatePageNumber(pageNumber);
      };

      return { pageNumber, inputChangeHandler, inputSubmitHandler } as const;
}

export default usePaginationInput