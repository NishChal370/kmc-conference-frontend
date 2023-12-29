import "../style/scheduleHeader.css";

function ScheduleHeader() {
      return (
            <header id="schedule-header" className="w-full flex flex-col justify-center items-center">
                  <span className="flex flex-col justify-center items-center bg-black/90 w-full h-[20rem] px-4 pt-2 text-white">
                        <h1 className="text-4xl font-bold tracking-wider">
                              Explore the Kathmandu IT Conference 2024 Sessions
                        </h1>
                  </span>
            </header>
      );
}

export default ScheduleHeader;
