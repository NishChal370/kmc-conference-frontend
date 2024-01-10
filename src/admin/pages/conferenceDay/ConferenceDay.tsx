import Header from "@/admin/shared/header/Header";
import ConferenceDayTableContainer from "./containers/ConferenceDayTableContainer";
import ConferenceDayPaginationContainer from "./containers/ConferenceDayPaginationContainer";

function ConferenceDay() {
      return (
            <>
                  <Header pageHeaderName="Conference Day" />

                  <span className="flex flex-col gap-6">
                        <ConferenceDayTableContainer />

                        <ConferenceDayPaginationContainer />
                  </span>
            </>
      );
}

export default ConferenceDay;
