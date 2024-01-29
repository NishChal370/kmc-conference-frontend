import SpeakerHeader from "./components/SpeakerHeader";
import SpeakerListContainer from "./container/SpeakerListContainer";

function Speaker() {
      return (
            <span
                  className="flex flex-col w-full h-full justify-start items-center gap-44
                        [&>span>.speaker-detail--width]:w-[90%]
                        [&>span>.speaker-detail--width]:sm:w-[96%]
                        [&>span>.speaker-detail--width]:md:w-[90%]
                        [&>span>.speaker-detail--width]:lg:w-[92%]
                        [&>span>.speaker-detail--width]:xl:w-[88%] [&>span>.speaker-detail--width]:xl:max-w-[81rem]
                        [&>span>.speaker-detail--width]:2xl:w-[90%]
                        min-h-[80vh]
                  "
            >
                  <SpeakerHeader />

                  <span className="flex flex-col items-center w-full h-full ">
                        <SpeakerListContainer />
                  </span>
            </span>
      );
}

export default Speaker;
