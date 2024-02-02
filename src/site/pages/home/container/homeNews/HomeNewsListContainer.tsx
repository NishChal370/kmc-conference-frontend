import { useEffect } from "react";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import HomeNewsList from "../../components/homeNews/HomeNewsList";
import useNewsApi from "@/admin/hooks/news/useNewsApi";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { newsAction, newsBasicSliceState } from "@/admin/pages/news/feature/newsSlice";
import { Status } from "@/enum/commonEnum";

function HomeNewsListContainer() {
      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(newsBasicSliceState);

      const { getNewsBasicInfo } = useNewsApi();

      const fetchData = () => {
            getNewsBasicInfo({ pageNumber: 1, pageSize: 6 });
      };

      useEffect(() => {
            fetchData();

            return () => {
                  dispatch(newsAction.resetNewsBasicSlice());
            };
      }, []);

      return (
            <>
                  {status === Status.SUCCEEDED ? <HomeNewsList newsList={data.news} /> : undefined}

                  {status === Status.FAILED ? (
                        <ErrorMessage
                              title={error?.title}
                              detail={error?.detail}
                              needTopPadding={false}
                              traceId={error?.traceId}
                        />
                  ) : undefined}

                  {status === Status.LOADING ? <LoadingMessage /> : undefined}

                  {status === Status.DATA_NOT_FOUND ? <NotFoundMessage needTopPadding={false} /> : undefined}
            </>
      );
}

export default HomeNewsListContainer;
