import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import AdminParticipantTable from "../components/AdminParticipantTable";
import { useURLQueryValues } from "@/hooks/urlQueryHandler";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useParticipantApi from "@/admin/hooks/participant/useParticipant";
import { Status } from "@/enum/commonEnum";
import {
      IAdminParticipantDeleteRequest,
      IAdminParticipantViewModal,
} from "@/admin/model/participant/participantModel";
import { participantBasicInfoSliceState, participantSliceAction } from "../feature/participantSlice";

interface IAdminParticipantTableContainer {
      openViewModal: (viewingData: IAdminParticipantViewModal) => void;
}

function AdminParticipantTableContainer({ openViewModal }: IAdminParticipantTableContainer) {
      const { search } = useLocation();

      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(participantBasicInfoSliceState);

      const { getParticipantBasicInfo, deleteParticipantDetail } = useParticipantApi();

      const { currentPageNumber } = useURLQueryValues();

      const fetchData = () => {
            getParticipantBasicInfo({ pageNumber: currentPageNumber });
      };

      const openViewModalHandler = (viewingData: IAdminParticipantViewModal) => () => {
            openViewModal(viewingData);
      };

      const deleteParticipantDetailHandler = (deletingDetail: IAdminParticipantDeleteRequest) => () => {
            deleteParticipantDetail(deletingDetail);
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
                        participantBasicInfo={data.participants}
                        openViewModalHandler={openViewModalHandler}
                        deleteParticipantDetailHandler={deleteParticipantDetailHandler}
                  />

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AdminParticipantTableContainer;
