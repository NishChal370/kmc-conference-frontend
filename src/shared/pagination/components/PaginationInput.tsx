import { STARTING_PAGE_NUMBER } from "@/shared/pagination/constants/pagination";
import usePaginationInput from "@/hooks/pagination/usePaginationInput";

interface IPaginationInput {
      currentPageNumber: number;
      totalPages: number;
      updatePageNumber: (newPageNumber: number) => void;
}

function PaginationInput({ currentPageNumber, totalPages, updatePageNumber }: IPaginationInput) {
      const { pageNumber, inputChangeHandler, inputSubmitHandler } = usePaginationInput({
            currentPageNumber,
            updatePageNumber,
      });

      return (
            <form
                  onSubmit={inputSubmitHandler}
                  className="hidden gap-1 text-sm text-mute justify-center items-end
                        sm:flex
                  "
            >
                  <p>View</p>
                  <input
                        type="number"
                        value={pageNumber}
                        onChange={inputChangeHandler}
                        min={STARTING_PAGE_NUMBER}
                        max={totalPages}
                        className="border border-primary/20 w-fit max-w-[2.5rem] pl-1 py-0.5 text-xs"
                  />
                  <p>of {totalPages} pages</p>
            </form>
      );
}

export default PaginationInput;
