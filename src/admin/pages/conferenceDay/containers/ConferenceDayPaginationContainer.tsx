import { useAppSelector } from "@/app/hooks";
import Pagination from "@/shared/pagination/Pagination";
import { Status } from "@/enum/commonEnum";
import useAfterMount from "@/hooks/lifeCycle/useAfterMount";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import { conferenceDayState } from "../feature/conferenceDaySlice";

function ConferenceDayPaginationContainer() {
      const {
            status,
            isToRefetch,
            data: { totalPages },
      } = useAppSelector(conferenceDayState);

      const { changeQueryPageNumber, getSearchParmaValues, clearAllSearchParam, resetSearchParam } =
            useURLQueryHandler();
      const { currentPageNumber } = getSearchParmaValues();

      useAfterMount(() => {
            if (currentPageNumber === 1) {
                  resetSearchParam();
            } else {
                  clearAllSearchParam({ pageNumber: 1 });
            }
      }, [isToRefetch]);

      if (status !== Status.SUCCEEDED) return;

      return (
            <Pagination
                  totalPages={totalPages}
                  currentPageNumber={currentPageNumber}
                  updatePageNumber={changeQueryPageNumber}
            />
      );
}

export default ConferenceDayPaginationContainer;
