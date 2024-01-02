import SpeakerList from "./components/SpeakerList";
import SpeakerHeader from "./components/SpeakerHeader";
import SpeakerDetail from "./components/SpeakerDetail";

function Speaker() {
      return (
            <span className="flex flex-col w-full h-full justify-center items-center gap-48">
                  <span className="flex flex-col w-full h-full justify-center items-center gap-14">
                        <SpeakerHeader />

                        <SpeakerDetail />
                  </span>

                  <SpeakerList />
            </span>
      );
}

export default Speaker;
