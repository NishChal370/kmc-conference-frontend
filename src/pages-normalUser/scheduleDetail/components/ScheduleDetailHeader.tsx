import PageHeader from "@/shared-normalUser/pageHeader/PageHeader";
import "../style/scheduleDetailHeader.css";

function ScheduleDetailHeader() {
      return (
            <PageHeader id="schedule-detail-header" heightClasses="h-[24rem] sm:h-[20rem]">
                  <h1 className="text-4xl font-bold tracking-wider">
                        Your Selected Session: Discover the Details & Dive Deeper
                  </h1>
            </PageHeader>
      );
}

export default ScheduleDetailHeader;
