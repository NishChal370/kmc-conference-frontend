import EllipsisButton from "./components/EllipsisButton";
import PaginationInput from "./components/PaginationInput";
import PageNumberButton from "./components/PageNumberButton";
import PageNavigatorButton from "./components/PageNavigatorButton";
import usePagination from "@/hooks/pagination/usePagination";

interface IPagination {
      currentPageNumber: number;
      totalPages: number;
      updatePageNumber: (newPageNumber: number) => void;
}

function Pagination({ currentPageNumber, totalPages, updatePageNumber }: IPagination) {
      const {
            pageNumberList,
            pageChangeHandler,
            nextButtonHandler,
            previousButtonHandler,
            ellipsisBackHandler,
            ellipsisFrontHandler,
      } = usePagination({
            totalPages: totalPages,
            currentPageNumber,
            updatePageNumber,
      });

      return (
            <section
                  className="flex justify-center w-full
                        sm:justify-between px-4
                  "
            >
                  <PaginationInput {...{ currentPageNumber, totalPages, updatePageNumber }} />

                  <aside
                        className="flex flex-col gap-3 justify-center items-center text-xs text-primary 
                              [&>*]:rounded-md
                              sm:gap-1 sm:flex-row
                        "
                  >
                        <PageNavigatorButton
                              title="Prev"
                              clickHandler={previousButtonHandler}
                              isDisabled={currentPageNumber === 1}
                        />

                        <span
                              className="flex gap-0.5
                                    [&>*]:border-0
                                    [&>*]:px-3 [&>*]:py-1 [&>*]:rounded-md
                                    
                              "
                        >
                              {pageNumberList[0] > 1 && <EllipsisButton clickHandler={ellipsisBackHandler} />}

                              {pageNumberList.map((pageNumber) => (
                                    <PageNumberButton
                                          key={pageNumber}
                                          pageNumber={pageNumber}
                                          clickHandler={pageChangeHandler}
                                          isSelected={currentPageNumber === pageNumber}
                                    />
                              ))}

                              {pageNumberList.at(-1) !== totalPages && (
                                    <EllipsisButton clickHandler={ellipsisFrontHandler} />
                              )}
                        </span>

                        <PageNavigatorButton
                              title="Next"
                              clickHandler={nextButtonHandler}
                              isDisabled={currentPageNumber === totalPages}
                        />
                  </aside>
            </section>
      );
}

export default Pagination;
