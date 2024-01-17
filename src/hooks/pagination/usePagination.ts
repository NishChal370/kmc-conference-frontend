import { useEffect, useState } from 'react'
import { STARTING_PAGE_NUMBER, TOTAL_PAGE_TO_SHOW } from '@/shared/pagination/constants/pagination';



interface IUsePagination {
      totalPages: number;
      currentPageNumber: number;
      updatePageNumber: (newPageNumber: number) => void;
}

function usePagination({ totalPages, currentPageNumber, updatePageNumber }: IUsePagination) {
      const [pageNumberList, setPageNumberList] = useState<number[]>([]);

      const generateNewPageList = (selectedPageNumber: number) => {
            const halfToShow = Math.floor(TOTAL_PAGE_TO_SHOW / 2);

            const firstPageNumber = Math.max(
                  STARTING_PAGE_NUMBER,
                  selectedPageNumber === totalPages
                        ? selectedPageNumber - TOTAL_PAGE_TO_SHOW + 1
                        : selectedPageNumber - halfToShow
            );

            const lastPageNumber = Math.min(
                  totalPages,
                  selectedPageNumber === STARTING_PAGE_NUMBER
                        ? selectedPageNumber + TOTAL_PAGE_TO_SHOW - 1
                        : selectedPageNumber + 1
            );

            const initialShowingPageList = Array
                  .from(
                        { length: lastPageNumber - firstPageNumber + 1 },
                        (_, index) => firstPageNumber + index
                  );

            setPageNumberList(initialShowingPageList);
      }


      const updatePageList = (requestedPageNumber: number) => {
            setPageNumberList((showingPageList) => {
                  if (
                        requestedPageNumber === showingPageList.at(-1) &&
                        requestedPageNumber < totalPages
                  ) {
                        showingPageList = showingPageList.slice(1).concat(requestedPageNumber + 1);
                  } else if (requestedPageNumber === showingPageList.at(0) && requestedPageNumber > 1) {
                        showingPageList = [requestedPageNumber - 1, ...showingPageList.slice(0, -1)];
                  }

                  return showingPageList;
            });
      }

      const createShowingPageList = () => {
            const newSelectedPageNumber = currentPageNumber || STARTING_PAGE_NUMBER;

            if (pageNumberList.includes(newSelectedPageNumber)) {
                  updatePageList(newSelectedPageNumber);

                  return;
            }

            generateNewPageList(newSelectedPageNumber);
      };


      const pageChangeHandler = (event: any) => {
            updatePageNumber(parseInt(event.target.dataset.value))
      };


      const handleButton = (offset: number) => {
            const newPageNumber = currentPageNumber + offset;

            if (newPageNumber >= STARTING_PAGE_NUMBER && newPageNumber <= totalPages) {
                  updatePageNumber(newPageNumber);
            }
      };

      const ellipsisHandler = (offset: number) => {
            const targetPageNumber = pageNumberList[offset];

            if (targetPageNumber >= STARTING_PAGE_NUMBER && targetPageNumber <= totalPages) {
                  // user click ellipsis forward button add 1 in targetedPageNumber
                  // else subtract 1 in targeted PageNumber.
                  const nextPageNumber = pageNumberList.indexOf(targetPageNumber) === pageNumberList.length - 1
                        ? targetPageNumber + 1
                        : targetPageNumber - 1;


                  updatePageNumber(nextPageNumber);
            }
      };

      useEffect(() => {
            createShowingPageList();
      }, [currentPageNumber, totalPages])


      return {
            pageNumberList,
            pageChangeHandler,
            nextButtonHandler: () => handleButton(1),
            previousButtonHandler: () => handleButton(-1),
            ellipsisBackHandler: () => ellipsisHandler(0),
            ellipsisFrontHandler: () => ellipsisHandler(pageNumberList.length - 1),
      } as const;
}

export default usePagination
