import PageHeader from "@/shared-normalUser/pageHeader/PageHeader";
import "../style/scheduleHeader.css";

function ScheduleHeader() {
      return (
            <PageHeader id="schedule-header" heightClasses="h-[20rem]">
                  <h1 className="text-4xl font-bold tracking-wider">
                        Explore the Kathmandu IT Conference 2024 Sessions
                  </h1>
            </PageHeader>
      );
}

export default ScheduleHeader;
