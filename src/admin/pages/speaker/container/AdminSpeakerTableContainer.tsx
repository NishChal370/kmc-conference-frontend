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
import { ISpeakerDeleteRequest, ISpeakerViewOrEditModal } from "@/admin/model/speaker/speakerModel";
import { speakerBasicInfoSliceState, speakerSliceAction } from "../feature/speakerSlice";

interface IAdminSpeakerTableContainer {
      openEditModal: ({ editingData }: { editingData: ISpeakerViewOrEditModal }) => void;
      openViewModal: ({ viewingData }: { viewingData: ISpeakerViewOrEditModal }) => void;
}

function AdminSpeakerTableContainer({ openViewModal, openEditModal }: IAdminSpeakerTableContainer) {
      const { search } = useLocation();

      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(speakerBasicInfoSliceState);

      const { getSpeakerBasicInfo, deleteSpeakerDetail } = useSpeakerApi();

      const { getSearchParmaValues, clearAllSearchParam } = useURLQueryHandler();

      const { currentPageNumber } = getSearchParmaValues();

      const fetchData = () => {
            getSpeakerBasicInfo({ pageNumber: currentPageNumber });
      };

      const openViewModalHandler = (viewingData: ISpeakerViewOrEditModal) => () => {
            openViewModal({ viewingData });
      };

      const openEditModalHandler = (editingData: ISpeakerViewOrEditModal) => () => {
            openEditModal({ editingData });
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
                        currentPageNumber={currentPageNumber}
                        speakersBasicInfo={data.speakers}
                        openViewModalHandler={openViewModalHandler}
                        openEditModalHandler={openEditModalHandler}
                        deleteSpeakerDetailHandler={deleteSpeakerDetailHandler}
                  />

                  {status === Status.FAILED && (
                        <ErrorMessage title={error?.title} detail={error?.detail} traceId={error?.traceId} />
                  )}

                  {status === Status.DATA_NOT_FOUND && (
                        <NotFoundMessage viewAllHandler={clearAllSearchParam} buttonTitle="Reload" />
                  )}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AdminSpeakerTableContainer;
