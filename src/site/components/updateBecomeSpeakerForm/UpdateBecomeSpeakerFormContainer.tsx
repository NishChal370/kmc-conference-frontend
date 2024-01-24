import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import UpdateBecomeSpeakerForm from "./UpdateBecomeSpeakerForm";
import { ISpeakerAddModal } from "@/admin/model/speaker/becomeSpeakerModel";

interface IUpdateBecomeSpeakerFormContainer {
      closeModal: () => void;
      selectedSessionDetail: ISpeakerAddModal;
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
