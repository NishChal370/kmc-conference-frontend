import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NewsDetailArticle from "../components/NewsDetailArticle";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import useNewsApi from "@/admin/hooks/news/useNewsApi";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { newsAction, newsDetailSliceState } from "@/admin/pages/news/feature/newsSlice";
import { Status } from "@/enum/commonEnum";

function NewsDetailArticleContainer() {
      const dispatch = useAppDispatch();
      const { newsId } = useParams();

      const { status, data, error } = useAppSelector(newsDetailSliceState);
      const { getNewsDetailedInfoContent } = useNewsApi();

      const fetchData = () => {
            if (!newsId) return;

            getNewsDetailedInfoContent({ id: +newsId });
      };
      useEffect(() => {
            window.scroll({ top: 0, behavior: "smooth" });

            fetchData();
      }, [newsId]);

      useEffect(() => {
            return () => {
                  dispatch(newsAction.resetNewsDetailSlice());
            };
      }, []);
      return (
            <>
                  {status === Status.SUCCEEDED && data ? <NewsDetailArticle newsDetail={data} /> : undefined}

                  {status === Status.FAILED ? (
                        <ErrorMessage title={error?.title} detail={error?.detail} traceId={error?.traceId} />
                  ) : undefined}

                  {status === Status.DATA_NOT_FOUND ? <NotFoundMessage /> : undefined}

                  {status === Status.IDEL || status === Status.LOADING ? <LoadingMessage /> : undefined}
            </>
      );
}

export default NewsDetailArticleContainer;
