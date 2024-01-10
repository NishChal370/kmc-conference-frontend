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
import { speakerSliceAction, speakerState } from "../feature/speakerSlice";
import {
      IAdminSpeakerEditModal,
      IAdminSpeakerStatusChangeModal,
} from "@/admin/model/speaker/adminSpeakerModel";

interface IAdminSpeakerTableContainer {
      openStatusChangeModal: (speakerDetail: IAdminSpeakerStatusChangeModal) => void;
      openEditModal: ({ editingData }: { editingData: IAdminSpeakerEditModal }) => void;
      openViewModal: ({ viewingData }: { viewingData: IAdminSpeakerEditModal }) => void;
}

function AdminSpeakerTableContainer({
      openStatusChangeModal,
      openEditModal,
      openViewModal,
}: IAdminSpeakerTableContainer) {
      const { search } = useLocation();

      const dispatch = useAppDispatch();

      const { status, data, isToRefetch, error } = useAppSelector(speakerState).speakerBasicInfo;

      const { getSpeakerBasicInfo } = useSpeakerApi();

      const { getSearchParmaValues, clearAllSearchParam } = useURLQueryHandler();

      const { currentPageNumber } = getSearchParmaValues();

      const fetchData = () => {
            getSpeakerBasicInfo({ pageNumber: currentPageNumber });
      };

      useEffect(() => {
            fetchData();
      }, [search, isToRefetch]);

      useEffect(() => {
            return () => {
                  dispatch(speakerSliceAction.resetSpeakerBasicInfoSlice());
            };
      }, []);

      return (
            <>
                  <AdminSpeakerTable
                        openViewModal={openViewModal}
                        openEditModal={openEditModal}
                        openStatusChangeModal={openStatusChangeModal}
                        status={status}
                        speakersBasicInfo={data.speakers}
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
