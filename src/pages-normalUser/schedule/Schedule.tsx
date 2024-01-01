import ScheduleBody from "./components/ScheduleBody";
import ScheduleHeader from "./components/ScheduleHeader";

function Schedule() {
      return (
            <span className="flex flex-col w-full h-full justify-center items-center gap-10">
                  <ScheduleHeader />

                  <ScheduleBody />
            </span>
      );
}

export default Schedule;
