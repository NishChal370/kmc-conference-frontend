import Pagination from "@/shared/pagination/Pagination";
import { useAppSelector } from "@/app/hooks";
import useAfterMount from "@/hooks/lifeCycle/useAfterMount";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import { Status } from "@/enum/commonEnum";
import { schedulesSliceState } from "../feature/scheduleSlice";

function AdminSchedulePaginationContainer() {
      const {
            status,
            isToRefetch,
            data: { totalPages },
      } = useAppSelector(schedulesSliceState);

      const { changeQueryPageNumber, getSearchParmaValues, resetSearchParam, clearAllSearchParam } =
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

export default AdminSchedulePaginationContainer;