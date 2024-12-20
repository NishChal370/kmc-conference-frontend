import { useAppSelector } from "@/app/hooks";
import Pagination from "@/shared/pagination/Pagination";
import { Status } from "@/enum/commonEnum";
import useAfterMount from "@/hooks/lifeCycle/useAfterMount";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import { conferenceDaysState } from "../feature/conferenceDaySlice";

function ConferenceDayPaginationContainer() {
      const {
            status,
            isToRefetch,
            data: { totalPages },
      } = useAppSelector(conferenceDaysState);

      const { changeQueryPageNumber, getSearchParmaValues, clearAllSearchParam, resetSearchParam } =
            useURLQueryHandler();

      const { currentPageNumber } = getSearchParmaValues();

      useAfterMount(() => {
            if (window.location.search === "?pageNumber=1") {
                  resetSearchParam();
            } else {
                  clearAllSearchParam();
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
