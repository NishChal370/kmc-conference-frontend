import { ISpeakerBasicModel } from "@/admin/model/speaker/speakerModel";
import SpeakerScheduleTableContainer from "./container/SpeakerScheduleTableContainer";

interface ISpeakerSchedule {
      isVisible: boolean;
      speakerId: ISpeakerBasicModel["id"];
}

function SpeakerSchedule({ isVisible, speakerId }: ISpeakerSchedule) {
      return (
            <>
                  <SpeakerScheduleTableContainer isVisible={isVisible} speakerId={speakerId} />
            </>
      );
}

export default SpeakerSchedule;
