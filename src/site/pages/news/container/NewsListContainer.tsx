import { useAppDispatch, useAppSelector } from "@/app/hooks";
import NewsList from "../components/NewsList";
import { newsAction, newsBasicSliceState } from "@/admin/pages/news/feature/newsSlice";
import useNewsApi from "@/admin/hooks/news/useNewsApi";
import { useEffect, useState } from "react";
import { Status } from "@/enum/commonEnum";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import useInfiniteScroll from "@/hooks/infiniteScroll/useInfiniteScroll";
import LoadingAnimation from "@/shared/loading/LoadingAnimation";
import { INewsBasicResponse } from "@/admin/model/news/newsModel";

function NewsListContainer() {
      const dispatch = useAppDispatch();
      const [newsInfiniteList, setNewsInfiniteList] = useState<INewsBasicResponse["news"]>();

      const { status, data, error } = useAppSelector(newsBasicSliceState);

      const { pageNumber, loader } = useInfiniteScroll({
            totalPages: data.totalPages,
      });

      const { getNewsBasicInfo } = useNewsApi();

      const fetchData = () => {
            getNewsBasicInfo({ pageNumber: pageNumber });
      };

      useEffect(() => {
            fetchData();
      }, [pageNumber]);

      useEffect(() => {
            return () => {
                  dispatch(newsAction.resetNewsBasicSlice());
                  setNewsInfiniteList(undefined);
            };
      }, []);

      useEffect(() => {
            setNewsInfiniteList((prev) => (prev ? [...prev, ...data.news] : data.news));
      }, [data]);

      return (
            <>
                  {newsInfiniteList ? <NewsList newsList={newsInfiniteList} /> : undefined}

                  {status === Status.FAILED ? (
                        <ErrorMessage title={error?.title} detail={error?.detail} needTopPadding={false} />
                  ) : undefined}

                  {status === Status.DATA_NOT_FOUND ? <NotFoundMessage needTopPadding={false} /> : undefined}

                  {data.totalPages === 0
                        ? (status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />
                        : undefined}

                  <div
                        ref={loader}
                        className="flex flex-col items-center justify-center w-full gap-4 text-center"
                  >
                        {pageNumber <= data.totalPages &&
                              [Status.IDEL, Status.LOADING].includes(status) &&
                              (data.totalPages !== 0 ? (
                                    <span className="flex flex-col gap-2 font-medium w-[30%]">
                                          Loading More Data
                                          <LoadingAnimation />
                                    </span>
                              ) : undefined)}
                  </div>
            </>
      );
}

export default NewsListContainer;
