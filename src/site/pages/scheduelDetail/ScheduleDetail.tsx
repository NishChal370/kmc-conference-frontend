import ScheduleArticleContainer from "./container/ScheduleArticleContainer";
import ScheduleDetailHeader from "./components/scheduleArticle/ScheduleDetailHeader";
import ScheduleActionHeader from "./components/scheduleActionHeader/ScheduleActionHeader";

function ScheduleDetail() {
      return (
            <span className="flex flex-col w-full h-full justify-center items-center gap-10 !mb-0">
                  <ScheduleDetailHeader />

                  <ScheduleArticleContainer />

                  <ScheduleActionHeader />
            </span>
      );
}

export default ScheduleDetail;
