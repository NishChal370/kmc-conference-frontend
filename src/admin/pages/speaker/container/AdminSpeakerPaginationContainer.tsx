import { useAppSelector } from "@/app/hooks";
import Pagination from "@/shared/pagination/Pagination";
import { speakerState } from "../feature/speakerSlice";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import { Status } from "@/enum/commonEnum";

function AdminSpeakerPaginationContainer() {
      const {
            status,
            data: { totalPages },
      } = useAppSelector(speakerState).speakerBasicInfo;

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

export default AdminSpeakerPaginationContainer;
