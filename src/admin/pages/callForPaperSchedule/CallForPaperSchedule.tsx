import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import CallForPaperScheduleViewModal from "./component/CallForPaperScheduleViewModal";
import CallForPaperScheduleTableContainer from "./container/CallForPaperScheduleTableContainer";
import AdminCallForPaperStatusUpdateModalContainer from "./container/AdminCallForPaperStatusUpdateModalContainer";
import {
      ICallForPaperScheduleApprovalStatusChangeModal,
      ICallForPaperScheduleModel,
      ICallForPaperScheduleViewModal,
} from "@/admin/model/callForPaperSchedule/callForPaperScheduleModel";

interface ICallForPaperSchedule {
      isVisible: boolean;
      callForPaperName: ICallForPaperScheduleApprovalStatusChangeModal["callForPaperName"];
      callForPaperId: ICallForPaperScheduleModel["callForPaperId"];
}

function CallForPaperSchedule({ isVisible, callForPaperId, callForPaperName }: ICallForPaperSchedule) {
      const [viewModal, openViewModal, closeViewModal] = useExtraModal<ICallForPaperScheduleViewModal>();

      const [approvalModal, openApprovalModal, closeApprovalModal] =
            useExtraModal<ICallForPaperScheduleApprovalStatusChangeModal>();

      return (
            <>
                  <CallForPaperScheduleTableContainer
                        isVisible={isVisible}
                        callForPaperId={callForPaperId}
                        openViewModal={openViewModal}
                        openApprovalModal={openApprovalModal}
                  />

                  {viewModal?.data && viewModal.isOpen && (
                        <CallForPaperScheduleViewModal
                              callForPaperSchedule={viewModal.data}
                              closeViewModal={closeViewModal}
                        />
                  )}

                  {approvalModal?.data && approvalModal.isOpen && (
                        <AdminCallForPaperStatusUpdateModalContainer
                              closeModalHandler={closeApprovalModal}
                              callForPaperStatusDetail={{
                                    ...approvalModal.data,
                                    callId: callForPaperId,
                                    callForPaperName: callForPaperName,
                              }}
                        />
                  )}
            </>
      );
}

export default CallForPaperSchedule;
