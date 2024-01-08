import PageHeader from "@site/shared/pageHeader/PageHeader";
import "../style/scheduleDetailHeader.css";

function ScheduleDetailHeader() {
      return (
            <PageHeader
                  id="schedule-detail-header"
                  heightClasses="h-[24rem] pt-10 
                        sm:h-[22rem] sm:pt-20 
                        md:h-[20rem] md:pt-10
                        lg:h-[24rem] lg:pt-0
                  "
            >
                  <h1 className="text-4xl font-bold tracking-wider">
                        Your Selected Session: Discover the Details & Dive Deeper
                  </h1>
            </PageHeader>
      );
}

export default ScheduleDetailHeader;
