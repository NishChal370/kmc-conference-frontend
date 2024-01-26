import { useState } from "react";
import AdminCallForPaperStatusUpdateModal from "../component/AdminCallForPaperStatusUpdateModal";
import useCallForPaperScheduleApi from "@/admin/hooks/callForPaperSchedule/useCallForPaperScheduleApi";
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";
import { ICallForPaperScheduleApprovalStatusChangeModal } from "@/admin/model/callForPaperSchedule/callForPaperScheduleModel";

interface IAdminCallForPaperStatusUpdateModalContainer {
      closeModalHandler: () => void;
      callForPaperStatusDetail: ICallForPaperScheduleApprovalStatusChangeModal;
}
function AdminCallForPaperStatusUpdateModalContainer({
      closeModalHandler,
      callForPaperStatusDetail,
}: IAdminCallForPaperStatusUpdateModalContainer) {
      const { updateCallForPaperScheduleApprovalStatus } = useCallForPaperScheduleApi();

      const [approvalStatus, setApprovalStatus] = useState<CallForPaperApprovalStatus>(
            callForPaperStatusDetail.approvalStatus
      );

      const inputChangeHandler = (status: CallForPaperApprovalStatus) => {
            setApprovalStatus(status);
      };

      const formSubmitHandler = () => {
            updateCallForPaperScheduleApprovalStatus({
                  callId: callForPaperStatusDetail.callId,
                  sessionId: callForPaperStatusDetail.sessionId,
                  approvalStatus: approvalStatus,
            }).then(closeModalHandler);
      };

      return (
            <AdminCallForPaperStatusUpdateModal
                  value={approvalStatus}
                  submitHandler={formSubmitHandler}
                  onChangeHandler={inputChangeHandler}
                  closeModalHandler={closeModalHandler}
                  sessionTitle={callForPaperStatusDetail.sessionTitle}
                  callForPaperName={callForPaperStatusDetail.callForPaperName}
                  currentStatus={callForPaperStatusDetail.approvalStatus}
            />
      );
}

export default AdminCallForPaperStatusUpdateModalContainer;
