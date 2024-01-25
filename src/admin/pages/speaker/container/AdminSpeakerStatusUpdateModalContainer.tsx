import { useState } from "react";
import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";
import { ISpeakerApprovalStatusChangeModal } from "@/admin/model/speaker/speakerModel";
import AdminSpeakerStatusUpdateModal from "../components/AdminSpeakerStatusUpdateModal";

interface IAdminSpeakerStatusUpdateModalContainer {
      speakerStatusDetail: ISpeakerApprovalStatusChangeModal;
      closeModalHandler: () => void;
}

//FIXME: NOT in use
function AdminSpeakerStatusUpdateModalContainer({
      speakerStatusDetail,
      closeModalHandler,
}: IAdminSpeakerStatusUpdateModalContainer) {
      const { updateSpeakerApprovalStatus } = useSpeakerApi();

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

export default AdminSpeakerStatusUpdateModalContainer;
