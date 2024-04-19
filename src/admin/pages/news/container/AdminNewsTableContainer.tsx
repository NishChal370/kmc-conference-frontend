import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import AdminNewsTable from "../components/AdminNewsTable";
import useNewsApi from "@/admin/hooks/news/useNewsApi";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { newsAction, newsBasicSliceState } from "../feature/newsSlice";
import { Status } from "@/enum/commonEnum";
import { INewsDeleteRequest, INewsViewOrEditModal } from "@/admin/model/news/newsModel";
import { NEWS_SORT_VALUE } from "../data/newsSortValue";

interface IAdminNewsTableContainer {
      openViewModal: ({ viewingData }: { viewingData: INewsViewOrEditModal }) => void;
      openEditModal: ({ editingData }: { editingData: INewsViewOrEditModal }) => void;
}

function AdminNewsTableContainer({ openEditModal, openViewModal }: IAdminNewsTableContainer) {
      const dispatch = useAppDispatch();

      const { search } = useLocation();

      const { status, error, data } = useAppSelector(newsBasicSliceState);

      const { getNewsBasicInfo, deleteNewsDetail } = useNewsApi();

      const { getSearchParmaValues, changeQuerySortBy } = useURLQueryHandler();
      const { currentPageNumber, getCurrentOrderBy, getSearchParamSortBy } = getSearchParmaValues({
            sortingValueList: NEWS_SORT_VALUE,
      });

      const fetchData = () => {
            getNewsBasicInfo({
                  pageNumber: currentPageNumber,
                  sortBy: getSearchParamSortBy(),
                  order: getCurrentOrderBy(),
            });
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

      const sortHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            const currentSortValue = e.currentTarget.dataset.value;

            if (currentSortValue) changeQuerySortBy({ sortBy: currentSortValue });
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
                        sortHandler={sortHandler}
                        sortDetail={{ getOrderBy: getCurrentOrderBy, getSort: getSearchParamSortBy }}
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
