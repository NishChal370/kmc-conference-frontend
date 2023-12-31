import "../style/scheduleDetailHeader.css";

function ScheduleDetailHeader() {
      return (
            <header id="schedule-detail-header" className="w-full flex flex-col justify-center items-center">
                  <span
                        className="flex flex-col justify-center items-center bg-black/90 w-full h-[24rem] px-4 pt-2 text-white
                              sm:h-[20rem]
                        "
                  >
                        <h1 className="text-4xl font-bold tracking-wider">
                              Your Selected Session: Discover the Details & Dive Deeper
                        </h1>
                  </span>
            </header>
      );
}

export default ScheduleDetailHeader;
