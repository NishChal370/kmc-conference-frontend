import ScheduleTopicArticleContainer from "../../container/ScheduleTopicArticleContainer";
import ScheduleTopicSelectInputContainer from "../../container/ScheduleTopicSelectInputContainer";
import { IScheduleContentBriefDetailModel } from "@/admin/model/schedule/scheduleContentModel";

interface IScheduleTopicDetail {
      topic: IScheduleContentBriefDetailModel["sessionTopics"];
}

function ScheduleTopicDetail({ topic }: IScheduleTopicDetail) {
      return (
            <>
                  <ScheduleTopicSelectInputContainer options={topic}>
                        {(selectedTitleId) => (
                              <ScheduleTopicArticleContainer selectedTitleId={selectedTitleId} />
                        )}
                  </ScheduleTopicSelectInputContainer>
            </>
      );
}

export default ScheduleTopicDetail;
