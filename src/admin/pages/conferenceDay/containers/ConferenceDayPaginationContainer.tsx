import { useAppSelector } from "@/app/hooks";
import Pagination from "@/shared/pagination/Pagination";
import { Status } from "@/enum/commonEnum";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import { conferenceDayState } from "../feature/conferenceDaySlice";

function ConferenceDayPaginationContainer() {
      const {
            status,
            data: { totalPages },
      } = useAppSelector(conferenceDayState);

      const { changeQueryPageNumber, getSearchParmaValues } = useURLQueryHandler();
      const { currentPageNumber } = getSearchParmaValues();

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
