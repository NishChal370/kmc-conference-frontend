import ScheduleArticleText from "../scheduleArticle/ScheduleArticleText";
import { IScheduleTopicModel } from "@/admin/model/scheduleTopic/scheduleTopicModel";

interface IScheduleTopicArticle {
      topicDetails: IScheduleTopicModel;
}
function ScheduleTopicArticle({ topicDetails }: IScheduleTopicArticle) {
      return (
            <>
                  <ScheduleArticleText title="About" article={topicDetails.description} />

                  <ScheduleArticleText title="KMC Highlights" article={topicDetails.kmcHighlights} />

                  <ScheduleArticleText title="Keynotes" article={topicDetails.keyNote} />

                  <ScheduleArticleText
                        title="International cases"
                        article={topicDetails.internationalCases}
                  />

                  <ScheduleArticleText title="Workshop" article={topicDetails.workshop} />
            </>
      );
}

export default ScheduleTopicArticle;
