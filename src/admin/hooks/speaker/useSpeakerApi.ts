import { store } from '@/app/store';
import { useAppDispatch } from '@/app/hooks';
import { scheduleSliceAction } from '@/admin/pages/schedule/feature/scheduleSlice';
import { postSpeakerDetail, postSpeakerNewSession } from '@/admin/pages/speaker/feature/becomeSpeakerRequest';
import { getSpeakerBasicInfo as getSpeakerBasicInfoReq, deleteSpeakerDetail as deleteSpeakerDetailReq, getSpeakerDetailedById } from '@/admin/pages/speaker/feature/speakerRequest';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';
import { ISpeakerNewSessionPostRequest, ISpeakerPostRequest } from '@/admin/model/speaker/becomeSpeakerModel';
import { ISpeakerBasicSearch, ISpeakerByIdSearch, ISpeakerDeleteRequest, } from '@/admin/model/speaker/speakerModel';


function useSpeakerApi() {
      const dispatch = useAppDispatch();

      const getSpeakerBasicInfo = (searchDetail: ISpeakerBasicSearch) => {
            dispatch(getSpeakerBasicInfoReq(searchDetail))
      }


      const getSpeakerDetailedInfo = (speakerDetail: ISpeakerByIdSearch) => {
            loadingAlertWithMessage({ title: "Loading", text: "Please wait while getting data" });

            dispatch(getSpeakerDetailedById(speakerDetail))
                  .unwrap()
                  .catch((error) => {
                        errorToastMessage(error.detail);
                  })
                  .finally(swalAlertClose)
      }



      const addSpeakerDetail = async (speakerUpdateDetail: ISpeakerPostRequest) => {
            loadingAlertWithMessage();

            await dispatch(postSpeakerDetail(speakerUpdateDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Success", message: "Your request for speaker has been placed." });

                        store.dispatch(scheduleSliceAction.refetchScheduleContentDetails())
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }



      const deleteSpeakerDetail = async (deletingDetail: ISpeakerDeleteRequest) => {
            await showSuccessfulConfirmation({ buttonText: "Delete", showCancelButton: true }).then(() => {
                  loadingAlertWithMessage({ title: "Deleting", text: "Please wait while deleting" });

                  dispatch(deleteSpeakerDetailReq(deletingDetail))
                        .unwrap()
                        .then(() => {

                              successMessage({ title: "Deleted", message: "Speaker has been deleted." });
                        })
                        .catch((error) => {
                              errorToastMessage(error.detail);

                              throw new Error(error);
                        })
                        .finally(swalAlertClose)
            })
      }


      const addSpeakerNewSession = async (sessionDetail: ISpeakerNewSessionPostRequest) => {
            loadingAlertWithMessage({ title: "Submitting", text: "Please wait while submitting the form." });

            await dispatch(postSpeakerNewSession(sessionDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Success", message: "Your request for speaker has been placed." });

                        store.dispatch(scheduleSliceAction.refetchScheduleContentDetails())
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }



      return { getSpeakerBasicInfo, getSpeakerDetailedInfo, deleteSpeakerDetail, addSpeakerDetail, addSpeakerNewSession } as const;
}

export default useSpeakerApi