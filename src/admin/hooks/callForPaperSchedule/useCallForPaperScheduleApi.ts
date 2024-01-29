import { useAppDispatch } from '@/app/hooks';
import { ICallForPaperDeleteRequest, ICallForPaperScheduleApprovalStatusChangeReq, ICallForPaperScheduleSearch } from '@/admin/model/callForPaperSchedule/callForPaperScheduleModel';
import { deleteCallForPaperSchedule as deleteCallForPaperScheduleReq, fetchCallForPaperSchedule, putCallForPaperScheduleApprovalStatus } from '@/admin/pages/callForPaperSchedule/feature/callForPaperScheduleRequest';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';

function useCallForPaperScheduleApi() {
      const dispatch = useAppDispatch();

      const getCallForPaperSchedule = (searchDetail: ICallForPaperScheduleSearch) => {
            dispatch(fetchCallForPaperSchedule(searchDetail))
      }


      const updateCallForPaperScheduleApprovalStatus = async (approvalDetail: ICallForPaperScheduleApprovalStatusChangeReq) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putCallForPaperScheduleApprovalStatus(approvalDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "Call For Paper session approval has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      const deleteCallForPaperSchedule = async (detail: ICallForPaperDeleteRequest) => {
            await showSuccessfulConfirmation({ buttonText: "Delete", showCancelButton: true }).then(() => {
                  loadingAlertWithMessage({ title: "Deleting", text: "Please wait while deleting" });

                  dispatch(deleteCallForPaperScheduleReq(detail))
                        .unwrap()
                        .then(() => {

                              successMessage({ title: "Deleted", message: "Call For Paper session has been deleted." });
                        })
                        .catch((error) => {
                              errorToastMessage(error.detail);

                              throw new Error(error);
                        })
                        .finally(swalAlertClose)
            })
      }



      return { getCallForPaperSchedule, updateCallForPaperScheduleApprovalStatus, deleteCallForPaperSchedule } as const;
}

export default useCallForPaperScheduleApi
