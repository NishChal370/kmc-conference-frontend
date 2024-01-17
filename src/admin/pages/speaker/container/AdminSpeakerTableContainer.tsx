import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import ErrorMessage from "@/shared/errorMessage/ErrorMessage";
import AdminSpeakerTable from "../components/AdminSpeakerTable";
import NotFoundMessage from "@/shared/errorMessage/NotFoundMessage";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import { Status } from "@/enum/commonEnum";
import {
      ISpeakerDeleteRequest,
      IAdminSpeakerViewOrEditModal,
      IAdminSpeakerStatusChangeModal,
} from "@/admin/model/speaker/adminSpeakerModel";
import { speakerBasicInfoSliceState, speakerSliceAction } from "../feature/speakerSlice";

interface IAdminSpeakerTableContainer {
      openStatusChangeModal: (speakerDetail: IAdminSpeakerStatusChangeModal) => void;
      openEditModal: ({ editingData }: { editingData: IAdminSpeakerViewOrEditModal }) => void;
      openViewModal: ({ viewingData }: { viewingData: IAdminSpeakerViewOrEditModal }) => void;
}

function AdminSpeakerTableContainer({
      openEditModal,
      openViewModal,
      openStatusChangeModal,
}: IAdminSpeakerTableContainer) {
      const { search } = useLocation();

      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(speakerBasicInfoSliceState);

      const { getSpeakerBasicInfo, deleteSpeakerDetail } = useSpeakerApi();

      const { getSearchParmaValues, clearAllSearchParam } = useURLQueryHandler();

      const { currentPageNumber } = getSearchParmaValues();

      const fetchData = () => {
            getSpeakerBasicInfo({ pageNumber: currentPageNumber });
      };

      const openViewModalHandler = (viewingData: IAdminSpeakerViewOrEditModal) => () => {
            openViewModal({ viewingData });
      };

      const openEditModalHandler = (editingData: IAdminSpeakerViewOrEditModal) => () => {
            openEditModal({ editingData });
      };

      const openStatusChangeModalHandler = (speakerDetail: IAdminSpeakerStatusChangeModal) => () => {
            openStatusChangeModal(speakerDetail);
      };

      const deleteSpeakerDetailHandler = (deletingDetail: ISpeakerDeleteRequest) => () => {
            deleteSpeakerDetail(deletingDetail);
      };

      useEffect(() => {
            fetchData();
      }, [search]);

      useEffect(() => {
            return () => {
                  dispatch(speakerSliceAction.resetSpeakerBasicInfoSlice());
            };
      }, []);

      return (
            <>
                  <AdminSpeakerTable
                        status={status}
                        speakersBasicInfo={data.speakers}
                        openViewModalHandler={openViewModalHandler}
                        openEditModalHandler={openEditModalHandler}
                        openStatusChangeModalHandler={openStatusChangeModalHandler}
                        deleteSpeakerDetailHandler={deleteSpeakerDetailHandler}
                  />

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && (
                        <NotFoundMessage viewAllHandler={clearAllSearchParam} buttonTitle="Reload" />
                  )}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AdminSpeakerTableContainer;
