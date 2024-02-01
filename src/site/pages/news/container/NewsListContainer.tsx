import { useEffect } from "react";
import NewsList from "../components/NewsList";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import SitePagination from "@/shared/pagination/SitePagination";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import { newsAction, newsBasicSliceState } from "@/admin/pages/news/feature/newsSlice";
import useNewsApi from "@/admin/hooks/news/useNewsApi";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useSitePagination from "@/hooks/pagination/useSitePagination";
import { Status } from "@/enum/commonEnum";

function NewsListContainer() {
      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(newsBasicSliceState);

      const { getNewsBasicInfo } = useNewsApi();

      const { pageNumber, changePageNumber } = useSitePagination();

      const fetchData = () => {
            getNewsBasicInfo({ pageNumber: pageNumber });
      };

      useEffect(() => {
            window.scroll({ top: 0, behavior: "smooth" });

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
                              <NewsList newsList={data.news} />

                              <SitePagination
                                    totalPages={data.totalPages}
                                    currentPageNumber={pageNumber}
                                    updatePageNumber={changePageNumber}
                              />
                        </>
                  ) : undefined}

                  {status === Status.FAILED ? (
                        <ErrorMessage title={error?.title} detail={error?.detail} needTopPadding={false} />
                  ) : undefined}

                  {status === Status.DATA_NOT_FOUND ? <NotFoundMessage needTopPadding={false} /> : undefined}

                  {status === Status.IDEL || status === Status.LOADING ? <LoadingMessage /> : undefined}
            </>
      );
}

export default NewsListContainer;
