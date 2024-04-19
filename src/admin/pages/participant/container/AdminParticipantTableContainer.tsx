import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import AdminParticipantTable from "../components/AdminParticipantTable";
import { useURLQueryHandler, useURLQueryValues } from "@/hooks/urlQueryHandler";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useParticipantApi from "@/admin/hooks/participant/useParticipant";
import { Status } from "@/enum/commonEnum";
import {
      IAdminParticipantDeleteRequest,
      IAdminParticipantViewModal,
} from "@/admin/model/participant/participantModel";
import { participantBasicInfoSliceState, participantSliceAction } from "../feature/participantSlice";
import { ADMIN_PARTICIPANT_SORT_VALUE } from "../data/adminParticipationSortValue";

interface IAdminParticipantTableContainer {
      openViewModal: (viewingData: IAdminParticipantViewModal) => void;
}

function AdminParticipantTableContainer({ openViewModal }: IAdminParticipantTableContainer) {
      const { search } = useLocation();

      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(participantBasicInfoSliceState);

      const { getParticipantBasicInfo, deleteParticipantDetail } = useParticipantApi();

      const { getSearchParmaValues, changeQuerySortBy } = useURLQueryHandler();
      const { currentPageNumber, getCurrentOrderBy, getSearchParamSortBy } = getSearchParmaValues({
            sortingValueList: ADMIN_PARTICIPANT_SORT_VALUE,
      });

      const fetchData = () => {
            getParticipantBasicInfo({
                  pageNumber: currentPageNumber,
                  sortBy: getSearchParamSortBy(),
                  order: getCurrentOrderBy(),
            });
      };

      const openViewModalHandler = (viewingData: IAdminParticipantViewModal) => () => {
            openViewModal(viewingData);
      };

      const deleteParticipantDetailHandler = (deletingDetail: IAdminParticipantDeleteRequest) => () => {
            deleteParticipantDetail(deletingDetail);
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
                  dispatch(participantSliceAction.resetParticipantBasicInfoSlice());
            };
      }, []);

      return (
            <>
                  <AdminParticipantTable
                        status={status}
                        sortHandler={sortHandler}
                        sortDetail={{ getOrderBy: getCurrentOrderBy, getSort: getSearchParamSortBy }}
                        currentPageNumber={currentPageNumber}
                        participantBasicInfo={data.participants}
                        openViewModalHandler={openViewModalHandler}
                        deleteParticipantDetailHandler={deleteParticipantDetailHandler}
                  />

                  {status === Status.FAILED && (
                        <ErrorMessage title={error?.title} detail={error?.detail} traceId={error?.traceId} />
                  )}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AdminParticipantTableContainer;
