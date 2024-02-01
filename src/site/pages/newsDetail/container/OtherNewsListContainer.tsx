import { useEffect } from "react";
import OtherNewsList from "../components/OtherNewsList";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useNewsApi from "@/admin/hooks/news/useNewsApi";
import { newsAction, newsBasicSliceState } from "@/admin/pages/news/feature/newsSlice";
import { Status } from "@/enum/commonEnum";
import { ErrorMessage } from "@/shared/errorMessage";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import useSitePagination from "@/hooks/pagination/useSitePagination";
import SitePagination from "@/shared/pagination/SitePagination";

function OtherNewsListContainer() {
      const dispatch = useAppDispatch();
      const { status, data, error } = useAppSelector(newsBasicSliceState);
      const { getNewsBasicInfo } = useNewsApi();

      const { pageNumber, changePageNumber } = useSitePagination();

      const fetchData = () => {
            getNewsBasicInfo({ pageNumber: pageNumber, pageSize: 8 });
      };

      useEffect(() => {
            fetchData();
      }, [pageNumber]);

      useEffect(() => {
            return () => {
                  dispatch(newsAction.resetNewsBasicSlice());
            };
      }, []);

      return (
            <>
                  {status === Status.SUCCEEDED ? (
                        <>
                              <OtherNewsList newsList={data} />

                              <SitePagination
                                    totalPages={data.totalPages}
                                    currentPageNumber={pageNumber}
                                    updatePageNumber={changePageNumber}
                              />
                        </>
                  ) : undefined}

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default OtherNewsListContainer;
