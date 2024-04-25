import Header from "@/admin/shared/header/Header";
import ApplicationStatisticContainer from "../applicantsStatistic/container/ApplicationStatisticContainer";

function Dashboard() {
      return (
            <>
                  <Header pageHeaderName="Dashboard" />

                  <span className="w-full xl:w-[60%] lg:min-w-[40rem] h-full">
                        <ApplicationStatisticContainer />
                  </span>
            </>
      );
}

export default Dashboard;
