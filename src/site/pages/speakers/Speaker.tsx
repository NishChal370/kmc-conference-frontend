import SpeakerList from "./components/SpeakerList";
import SpeakerFilter from "./components/SpeakerFilter";
import SpeakerDetail from "./components/SpeakerDetail";
import SpeakerHeader from "./components/SpeakerHeader";

function Speaker() {
      return (
            <span
                  className="flex flex-col w-full h-full justify-center items-center gap-44
                        [&>span>.speaker-detail--width]:w-[90%]
                        [&>span>.speaker-detail--width]:sm:w-[96%]
                        [&>span>.speaker-detail--width]:md:w-[90%]
                        [&>span>.speaker-detail--width]:lg:w-[92%]
                        [&>span>.speaker-detail--width]:xl:w-[88%] [&>span>.speaker-detail--width]:xl:max-w-[81rem]
                        [&>span>.speaker-detail--width]:2xl:w-[90%]
                  "
            >
                  <span className="flex flex-col w-full h-full justify-center items-center gap-14">
                        <SpeakerHeader />

                        <SpeakerDetail />
                  </span>

                  <span className="flex flex-col items-center gap-6 w-full h-full ">
                        <SpeakerFilter />

                        <SpeakerList />
                  </span>
            </span>
      );
}

export default Speaker;
