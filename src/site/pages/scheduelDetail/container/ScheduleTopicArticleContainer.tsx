import { useEffect } from "react";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import ScheduleTopicArticle from "../components/scheduleTopic/ScheduleTopicArticle";
import { scheduleTopicContentSliceState } from "@/admin/pages/scheduleTopic/feature/scheduleTopicSlice";
import { Status } from "@/enum/commonEnum";
import { useAppSelector } from "@/app/hooks";
import useScheduleTopicApi from "@/admin/hooks/scheduleTopic/useScheduleTopicApi";

interface IScheduleTopicArticleContainer {
      selectedTitleId: number;
}
function ScheduleTopicArticleContainer({ selectedTitleId }: IScheduleTopicArticleContainer) {
      const { getScheduleTopicContent } = useScheduleTopicApi();

      const { status, error, data } = useAppSelector(scheduleTopicContentSliceState);

      useEffect(() => {
            getScheduleTopicContent({ sessionTopicId: selectedTitleId });
      }, [selectedTitleId]);

      return (
            <>
                  {status === Status.SUCCEEDED && data && <ScheduleTopicArticle topicDetails={data} />}

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default ScheduleTopicArticleContainer;
