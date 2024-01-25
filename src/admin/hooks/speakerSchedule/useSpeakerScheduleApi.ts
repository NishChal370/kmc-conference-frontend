import { useAppDispatch } from '@/app/hooks';
import { fetchSpeakerScheduleBasic, putSpeakerScheduleApprovalStatus } from '@/admin/pages/speakerSchedule/feature/speakerScheduleRequest';
import { ISpeakerScheduleBasicSearch, ISpeakerScheduleApprovalStatusChangeReq } from '@/admin/model/speakerSchedule/speakerScheduleModel';
import { errorToastMessage, loadingAlertWithMessage, successMessage, swalAlertClose } from '@/utils/alert';

function useSpeakerScheduleApi() {
      const dispatch = useAppDispatch();

      const getSpeakerScheduleBasic = (searchDetail: ISpeakerScheduleBasicSearch) => {
            dispatch(fetchSpeakerScheduleBasic(searchDetail))
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



      return { getSpeakerScheduleBasic, updateSpeakerApprovalStatus } as const;
}

export default useSpeakerScheduleApi