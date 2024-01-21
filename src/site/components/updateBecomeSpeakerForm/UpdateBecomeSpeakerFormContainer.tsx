import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import UpdateBecomeSpeakerForm from "./UpdateBecomeSpeakerForm";
import { IParticipationAddModal } from "@/admin/model/participant/participantModel";

interface IUpdateBecomeSpeakerFormContainer {
      closeModal: () => void;
      selectedSessionDetail: IParticipationAddModal;
}
function UpdateBecomeSpeakerFormContainer({
      selectedSessionDetail,
      closeModal,
}: IUpdateBecomeSpeakerFormContainer) {
      const { addSpeakerNewSession } = useSpeakerApi();

      const confirmUpdateHandler = () => {
            addSpeakerNewSession({ sessionId: selectedSessionDetail.sessionChoice.sessionId }).then(
                  closeModal
            );
      };

      return (
            <UpdateBecomeSpeakerForm
                  closeForm={closeModal}
                  confirmHandler={confirmUpdateHandler}
                  selectedSessionDetail={selectedSessionDetail}
            />
      );
}

export default UpdateBecomeSpeakerFormContainer;
