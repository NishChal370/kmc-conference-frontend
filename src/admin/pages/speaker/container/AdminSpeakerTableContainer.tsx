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
import { ISpeakerDeleteRequest, ISpeakerViewModal } from "@/admin/model/speaker/speakerModel";
import { speakerBasicInfoSliceState, speakerSliceAction } from "../feature/speakerSlice";

interface IAdminSpeakerTableContainer {
      openViewModal: ({ viewingData }: { viewingData: ISpeakerViewModal }) => void;
}

function AdminSpeakerTableContainer({ openViewModal }: IAdminSpeakerTableContainer) {
      const { search } = useLocation();

      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(speakerBasicInfoSliceState);

      const { getSpeakerBasicInfo, deleteSpeakerDetail } = useSpeakerApi();

      const { getSearchParmaValues, clearAllSearchParam } = useURLQueryHandler();

      const { currentPageNumber } = getSearchParmaValues();

      const fetchData = () => {
            getSpeakerBasicInfo({ pageNumber: currentPageNumber });
      };

      const openViewModalHandler = (viewingData: ISpeakerViewModal) => () => {
            openViewModal({ viewingData });
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
