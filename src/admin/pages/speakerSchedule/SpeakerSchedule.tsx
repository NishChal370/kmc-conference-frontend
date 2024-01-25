import { ISpeakerBasicModel } from "@/admin/model/speaker/speakerModel";
import SpeakerScheduleTableContainer from "./container/SpeakerScheduleTableContainer";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import {
      ISpeakerScheduleApprovalStatusChangeModal,
      ISpeakerScheduleViewModal,
} from "@/admin/model/speakerSchedule/speakerScheduleModel";
import SpeakerScheduleStatusUpdateModalContainer from "./container/SpeakerScheduleStatusUpdateModalContainer";
import SpeakerScheduleViewModal from "./component/SpeakerScheduleViewModal";

interface ISpeakerSchedule {
      isVisible: boolean;
      speakerName: ISpeakerBasicModel["name"];
      speakerId: ISpeakerBasicModel["id"];
}

function SpeakerSchedule({ isVisible, speakerId, speakerName }: ISpeakerSchedule) {
      const [viewModal, openViewModal, closeViewModal] = useExtraModal<ISpeakerScheduleViewModal>();

      const [changeApprovalStatus, openApprovalStatusModal, closeApprovalStatusModal] =
            useExtraModal<ISpeakerScheduleApprovalStatusChangeModal>();

      return (
            <>
                  <SpeakerScheduleTableContainer
                        isVisible={isVisible}
                        speakerId={speakerId}
                        openViewModal={openViewModal}
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

                  {viewModal?.data && viewModal.isOpen && (
                        <SpeakerScheduleViewModal
                              speakerSession={viewModal.data}
                              closeViewModal={closeViewModal}
                        />
                  )}
            </>
      );
}

export default SpeakerSchedule;
