import { useState } from "react";
import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";
import AdminSpeakerStatusUpdateModal from "../component/SpeakerScheduleStatusUpdateModal";
import useSpeakerScheduleApi from "@/admin/hooks/speakerSchedule/useSpeakerScheduleApi";
import { ISpeakerScheduleApprovalStatusChangeModal } from "@/admin/model/speakerSchedule/speakerScheduleModel";

interface ISpeakerScheduleStatusUpdateModalContainer {
      speakerStatusDetail: ISpeakerScheduleApprovalStatusChangeModal;
      closeModalHandler: () => void;
}

function SpeakerScheduleStatusUpdateModalContainer({
      speakerStatusDetail,
      closeModalHandler,
}: ISpeakerScheduleStatusUpdateModalContainer) {
      const { updateSpeakerApprovalStatus } = useSpeakerScheduleApi();

      const [approvalStatus, setApprovalStatus] = useState<SpeakerApprovalStatus>(
            speakerStatusDetail.approvalStatus
      );

      const inputChangeHandler = (status: SpeakerApprovalStatus) => {
            setApprovalStatus(status);
      };

      const formSubmitHandler = () => {
            updateSpeakerApprovalStatus({
                  sessionId: speakerStatusDetail.sessionId,
                  approvalStatus: approvalStatus,
                  speakerId: speakerStatusDetail.id,
            }).then(closeModalHandler);
      };

      return (
            <AdminSpeakerStatusUpdateModal
                  value={approvalStatus}
                  submitHandler={formSubmitHandler}
                  onChangeHandler={inputChangeHandler}
                  closeModalHandler={closeModalHandler}
                  speakerName={speakerStatusDetail.speakerName}
                  currentStatus={speakerStatusDetail.approvalStatus}
            />
      );
}

export default SpeakerScheduleStatusUpdateModalContainer;
