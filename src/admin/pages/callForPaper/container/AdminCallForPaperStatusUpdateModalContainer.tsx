import { useState } from "react";
import { IAdminCallForPaperStatusChangeModal } from "@/admin/model/callForPaper/callForPaperModel";
import useCallForPaperApi from "@/admin/hooks/callForPaper/useCallForPaperApi";
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";
import AdminCallForPaperStatusUpdateModal from "../components/AdminCallForPaperStatusUpdateModal";

interface IAdminCallForPaperStatusUpdateModalContainer {
      closeModalHandler: () => void;
      callForPaperStatusDetail: IAdminCallForPaperStatusChangeModal;
}
function AdminCallForPaperStatusUpdateModalContainer({
      closeModalHandler,
      callForPaperStatusDetail,
}: IAdminCallForPaperStatusUpdateModalContainer) {
      const { updateCallForPaperApprovalStatus } = useCallForPaperApi();

      const [approvalStatus, setApprovalStatus] = useState<CallForPaperApprovalStatus>(
            callForPaperStatusDetail.approvalStatus
      );

      const inputChangeHandler = (status: CallForPaperApprovalStatus) => {
            setApprovalStatus(status);
      };

      const formSubmitHandler = () => {
            updateCallForPaperApprovalStatus({
                  id: callForPaperStatusDetail.id,
                  approvalStatus: approvalStatus,
            }).then(closeModalHandler);
      };

      return (
            <AdminCallForPaperStatusUpdateModal
                  value={approvalStatus}
                  submitHandler={formSubmitHandler}
                  onChangeHandler={inputChangeHandler}
                  closeModalHandler={closeModalHandler}
                  callForPaperName={callForPaperStatusDetail.callForPaperName}
                  currentStatus={callForPaperStatusDetail.approvalStatus}
            />
      );
}

export default AdminCallForPaperStatusUpdateModalContainer;
