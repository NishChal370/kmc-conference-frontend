import UpdateBecomeCallForPaperForm from "../UpdateBecomeCallForPaperForm";
import useCallForPaperApi from "@/admin/hooks/callForPaper/useCallForPaperApi";
import { ICallForPaperAddModal } from "@/admin/model/callForPaper/callForPaperApplyModel";

interface IUpdateBecomeCallForPaperFormContainer {
      closeModal: () => void;
      selectedSessionDetail: ICallForPaperAddModal;
}
function UpdateBecomeCallForPaperFormContainer({
      closeModal,
      selectedSessionDetail,
}: IUpdateBecomeCallForPaperFormContainer) {
      const { addCallForPaperNewSession } = useCallForPaperApi();

      const confirmUpdateHandler = () => {
            addCallForPaperNewSession({
                  sessionId: selectedSessionDetail.sessionChoice.sessionId,
            }).then(closeModal);
      };

      return (
            <UpdateBecomeCallForPaperForm
                  closeForm={closeModal}
                  confirmHandler={confirmUpdateHandler}
                  selectedSessionDetail={selectedSessionDetail}
            />
      );
}

export default UpdateBecomeCallForPaperFormContainer;
