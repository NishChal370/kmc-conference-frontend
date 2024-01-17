import { useAppSelector } from "@/app/hooks";
import { dayThemesState } from "../feature/dayThemeSlice";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import { Status } from "@/enum/commonEnum";
import Pagination from "@/shared/pagination/Pagination";
import useAfterMount from "@/hooks/lifeCycle/useAfterMount";

function AdminDayThemePaginationContainer() {
      const {
            status,
            isToRefetch,
            data: { totalPages },
      } = useAppSelector(dayThemesState);

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

export default AdminDayThemePaginationContainer;
