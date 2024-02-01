import Pagination from "@/shared/pagination/Pagination";
import { useAppSelector } from "@/app/hooks";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import useAfterMount from "@/hooks/lifeCycle/useAfterMount";
import { Status } from "@/enum/commonEnum";
import { newsBasicSliceState } from "../feature/newsSlice";

function AdminNewsPaginationContainer() {
      const {
            status,
            isToRefetch,
            data: { totalPages },
      } = useAppSelector(newsBasicSliceState);

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

export default AdminNewsPaginationContainer;
