import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import AdminNewsTable from "../components/AdminNewsTable";
import useNewsApi from "@/admin/hooks/news/useNewsApi";
import { useURLQueryValues } from "@/hooks/urlQueryHandler";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { newsAction, newsBasicSliceState } from "../feature/newsSlice";
import { Status } from "@/enum/commonEnum";
import { INewsDeleteRequest, INewsViewOrEditModal } from "@/admin/model/news/newsModel";

interface IAdminNewsTableContainer {
      openViewModal: ({ viewingData }: { viewingData: INewsViewOrEditModal }) => void;
      openEditModal: ({ editingData }: { editingData: INewsViewOrEditModal }) => void;
}

function AdminNewsTableContainer({ openEditModal, openViewModal }: IAdminNewsTableContainer) {
      const dispatch = useAppDispatch();

      const { search } = useLocation();

      const { status, error, data } = useAppSelector(newsBasicSliceState);

      const { getNewsBasicInfo, deleteNewsDetail } = useNewsApi();

      const { currentPageNumber } = useURLQueryValues();

      const fetchData = () => {
            getNewsBasicInfo({ pageNumber: currentPageNumber });
      };

      const openEditModalHandler = (editingData: INewsViewOrEditModal) => () => {
            openEditModal({ editingData });
      };

      const openViewModalHandler = (viewingData: INewsViewOrEditModal) => () => {
            openViewModal({ viewingData });
      };

      const deleteNewsHandler = (deletingDetail: INewsDeleteRequest) => () => {
            deleteNewsDetail(deletingDetail);
      };

      useEffect(() => {
            fetchData();
      }, [search]);

      useEffect(() => {
            return () => {
                  dispatch(newsAction.resetNewsBasicSlice());
            };
      }, []);

      return (
            <>
                  <AdminNewsTable
                        status={status}
                        currentPageNumber={currentPageNumber}
                        news={data.news}
                        openEditModalHandler={openEditModalHandler}
                        openViewModalHandler={openViewModalHandler}
                        deleteNewsHandler={deleteNewsHandler}
                  />

                  {status === Status.FAILED && (
                        <ErrorMessage title={error?.title} detail={error?.detail} traceId={error?.traceId} />
                  )}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AdminNewsTableContainer;
