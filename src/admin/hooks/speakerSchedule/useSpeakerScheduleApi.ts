import { useAppDispatch } from '@/app/hooks';
import { deleteSpeakerScheduleByAdmin as deleteSpeakerScheduleByAdminReq, fetchSpeakerSchedule, putSpeakerScheduleApprovalStatus } from '@/admin/pages/speakerSchedule/feature/speakerScheduleRequest';
import { ISpeakerScheduleSearch, ISpeakerScheduleApprovalStatusChangeReq, ISpeakerScheduleDeleteAdminReq } from '@/admin/model/speakerSchedule/speakerScheduleModel';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';

function useSpeakerScheduleApi() {
      const dispatch = useAppDispatch();

      const getSpeakerSchedule = (searchDetail: ISpeakerScheduleSearch) => {
            dispatch(fetchSpeakerSchedule(searchDetail))
      }


      const updateSpeakerApprovalStatus = async (approvalDetail: ISpeakerScheduleApprovalStatusChangeReq) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putSpeakerScheduleApprovalStatus(approvalDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "Speaker Session approval has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      const deleteSpeakerScheduleByAdmin = async (deletingDetail: ISpeakerScheduleDeleteAdminReq) => {
            await showSuccessfulConfirmation({ buttonText: "Delete", showCancelButton: true }).then(() => {
                  loadingAlertWithMessage({ title: "Deleting", text: "Please wait while deleting" });

                  dispatch(deleteSpeakerScheduleByAdminReq(deletingDetail))
                        .unwrap()
                        .then(() => {

                              successMessage({ title: "Deleted", message: "Speaker session has been deleted." });
                        })
                        .catch((error) => {
                              errorToastMessage(error.detail);

                              throw new Error(error);
                        })
                        .finally(swalAlertClose)
            })
      }




      return { getSpeakerSchedule, updateSpeakerApprovalStatus, deleteSpeakerScheduleByAdmin } as const;
}

export default useSpeakerScheduleApi