import PageHeader from "@/shared-normalUser/pageHeader/PageHeader";
import "../style/scheduleHeader.css";

function ScheduleHeader() {
      return (
            <PageHeader
                  id="schedule-header"
                  heightClasses="h-[20rem] pt-10 
                        md:pt-14
                        xl:pt-0
                  "
            >
                  <h1 className="text-4xl font-bold tracking-wider sm:text-center">
                        Explore the Kathmandu IT Conference 2080 Sessions
                  </h1>
            </PageHeader>
      );
}

export default ScheduleHeader;
