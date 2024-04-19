import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useLocation } from "react-router-dom";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import AdminCallForPaperTable from "../components/AdminCallForPaperTable";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import useCallForPaperApi from "@/admin/hooks/callForPaper/useCallForPaperApi";
import { Status } from "@/enum/commonEnum";
import {
      IAdminCallForPaperDeleteRequest,
      IAdminCallForPaperViewModal,
} from "@/admin/model/callForPaper/callForPaperModel";
import { callForPaperBasicInfoSliceState, callForPaperSliceAction } from "../feature/callForPaperSlice";
import { CALL_FOR_PAPER_SORT_VALUE } from "../data/callForPaperSortValue";

interface IAdminCallForPaperTableContainer {
      openViewModal: (data: IAdminCallForPaperViewModal) => void;
}

function AdminCallForPaperTableContainer({ openViewModal }: IAdminCallForPaperTableContainer) {
      const { search } = useLocation();

      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(callForPaperBasicInfoSliceState);

      const { getCallForPaperBasicInfo, deleteCallForPaperDetail } = useCallForPaperApi();

      const { getSearchParmaValues, changeQuerySortBy } = useURLQueryHandler();
      const { currentPageNumber, getCurrentOrderBy, getSearchParamSortBy } = getSearchParmaValues({
            sortingValueList: CALL_FOR_PAPER_SORT_VALUE,
      });

      const fetchData = () => {
            getCallForPaperBasicInfo({
                  pageNumber: currentPageNumber,
                  sortBy: getSearchParamSortBy(),
                  order: getCurrentOrderBy(),
            });
      };

      const openViewModalHandler = (viewingData: IAdminCallForPaperViewModal) => () => {
            openViewModal(viewingData);
      };

      const deleteCallForPaperDetailHandler = (deletingDetail: IAdminCallForPaperDeleteRequest) => () => {
            deleteCallForPaperDetail(deletingDetail);
      };

      const sortHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            const currentSortValue = e.currentTarget.dataset.value;

            if (currentSortValue) changeQuerySortBy({ sortBy: currentSortValue });
      };

      useEffect(() => {
            fetchData();
      }, [search]);

      useEffect(() => {
            return () => {
                  dispatch(callForPaperSliceAction.resetCallForPaperBasicInfoSlice());
            };
      }, []);

      return (
            <>
                  <AdminCallForPaperTable
                        status={status}
                        sortHandler={sortHandler}
                        sortDetail={{ getOrderBy: getCurrentOrderBy, getSort: getSearchParamSortBy }}
                        currentPageNumber={currentPageNumber}
                        callForPaperBasicInfo={data.calls}
                        openViewModalHandler={openViewModalHandler}
                        deleteCallForPaperDetailHandler={deleteCallForPaperDetailHandler}
                  />

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AdminCallForPaperTableContainer;
