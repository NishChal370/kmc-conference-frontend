import ScheduleScheduleCard from "../ScheduleScheduleCard";
import ScheduleArticleHeader from "./ScheduleArticleHeader";
import ScheduleTopicDetail from "../scheduleTopic/ScheduleTopicDetail";
import ScheduleSpeakerBanner from "../scheduleSpeaker/ScheduleSpeakerBanner";
import { IScheduleContentBriefDetailModel } from "@/admin/model/schedule/scheduleContentModel";

interface IScheduleArticle {
      scheduleDetail: IScheduleContentBriefDetailModel;
}
function ScheduleArticle({ scheduleDetail }: IScheduleArticle) {
      return (
            <span
                  className="flex justify-center items-start gap-32 px-6 w-full 
                        lg:w-[90%]
                        xl:w-[70%]
                  "
            >
                  <article
                        className="w-full flex flex-col gap-14 text-sm
                              [&>span]:flex [&>span]:flex-col [&>span]:justify-center [&>span]:gap-1.5
                              [&>span>*]:leading-loose
                              [&>span>h5]:text-xl [&>span>h5]:font-semibold
                        "
                  >
                        <ScheduleArticleHeader scheduleDetail={scheduleDetail} />

                        <ScheduleTopicDetail topic={scheduleDetail.sessionTopics} />

                        <ScheduleSpeakerBanner speakers={scheduleDetail.speakers} />
                  </article>

                  <ScheduleScheduleCard scheduleDetail={scheduleDetail} />
            </span>
      );
}

export default ScheduleArticle;
