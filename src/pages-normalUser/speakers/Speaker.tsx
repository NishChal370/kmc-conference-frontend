import SpeakerList from "./components/SpeakerList";
import SpeakerFilter from "./components/SpeakerFilter";
import SpeakerDetail from "./components/SpeakerDetail";
import SpeakerHeader from "./components/SpeakerHeader";

function Speaker() {
      return (
            <span className="flex flex-col w-full h-full justify-center items-center gap-44">
                  <span className="flex flex-col w-full h-full justify-center items-center gap-14">
                        <SpeakerHeader />

                        <SpeakerDetail />
                  </span>

                  <span className="flex flex-col items-center gap-6 w-fit h-full px-10">
                        <SpeakerFilter />

                        <SpeakerList />
                  </span>
            </span>
      );
}

export default Speaker;
