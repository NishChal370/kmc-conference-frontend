import { ISpeakerBasicModel } from "@/admin/model/speaker/speakerModel";
import SpeakerScheduleTableContainer from "./container/SpeakerScheduleTableContainer";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import { ISpeakerScheduleApprovalStatusChangeModal } from "@/admin/model/speakerSchedule/speakerScheduleModel";
import SpeakerScheduleStatusUpdateModalContainer from "./container/SpeakerScheduleStatusUpdateModalContainer";

interface ISpeakerSchedule {
      isVisible: boolean;
      speakerName: ISpeakerBasicModel["name"];
      speakerId: ISpeakerBasicModel["id"];
}

function SpeakerSchedule({ isVisible, speakerId, speakerName }: ISpeakerSchedule) {
      const [changeApprovalStatus, openApprovalStatusModal, closeApprovalStatusModal] =
            useExtraModal<ISpeakerScheduleApprovalStatusChangeModal>();
      return (
            <>
                  <SpeakerScheduleTableContainer
                        isVisible={isVisible}
                        speakerId={speakerId}
                        openApprovalStatusModal={openApprovalStatusModal}
                  />

                  {changeApprovalStatus?.isOpen && changeApprovalStatus.data && (
                        <SpeakerScheduleStatusUpdateModalContainer
                              speakerStatusDetail={{
                                    ...changeApprovalStatus.data,
                                    id: speakerId,
                                    speakerName: speakerName,
                              }}
                              closeModalHandler={closeApprovalStatusModal}
                        />
                  )}
            </>
      );
}

export default SpeakerSchedule;
