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
import { SPEAKER_SORT_VALUE } from "../data/speakerSortValue";

interface IAdminSpeakerTableContainer {
      openEditModal: ({ editingData }: { editingData: ISpeakerViewOrEditModal }) => void;
      openViewModal: ({ viewingData }: { viewingData: ISpeakerViewOrEditModal }) => void;
}

function AdminSpeakerTableContainer({ openViewModal, openEditModal }: IAdminSpeakerTableContainer) {
      const { search } = useLocation();

      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(speakerBasicInfoSliceState);

      const { getSpeakerBasicInfo, deleteSpeakerDetail } = useSpeakerApi();

      const { getSearchParmaValues, changeQuerySortBy } = useURLQueryHandler();

      const { currentPageNumber, getCurrentOrderBy, getSearchParamSortBy } = getSearchParmaValues({
            sortingValueList: SPEAKER_SORT_VALUE,
      });

      const fetchData = () => {
            getSpeakerBasicInfo({
                  pageNumber: currentPageNumber,
                  sortBy: getSearchParamSortBy(),
                  order: getCurrentOrderBy(),
            });
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

      const sortHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            const currentSortValue = e.currentTarget.dataset.value;

            if (currentSortValue) changeQuerySortBy({ sortBy: currentSortValue });
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
                        sortHandler={sortHandler}
                        sortDetail={{ getOrderBy: getCurrentOrderBy, getSort: getSearchParamSortBy }}
                        currentPageNumber={currentPageNumber}
                        speakersBasicInfo={data.speakers}
                        openViewModalHandler={openViewModalHandler}
                        openEditModalHandler={openEditModalHandler}
                        deleteSpeakerDetailHandler={deleteSpeakerDetailHandler}
                  />

                  {status === Status.FAILED && (
                        <ErrorMessage title={error?.title} detail={error?.detail} traceId={error?.traceId} />
                  )}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AdminSpeakerTableContainer;
