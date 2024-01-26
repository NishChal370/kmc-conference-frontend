import { useAppDispatch } from '@/app/hooks';
import {
      getApplicationSpeaker as getApplicationSpeakerReq,
      getApplicationParticipation as getApplicationParticipationReq,
      getApplicationCallForPaper as getApplicationCallForPaperReq,
      getApplicationParticipationDetailed as getApplicationParticipationDetailedReq,
      getApplicationSpeakerDetailed as getApplicationSpeakerDetailedReq,
      getApplicationCallForPaperDetailed as getApplicationCallForPaperDetailedReq,
      deleteApplicationCallForPaperSchedule as deleteApplicationCallForPaperScheduleReq,
      deleteApplicationParticipationSchedule as deleteApplicationParticipationScheduleReq,
      deleteApplicationSpeakerSchedule as deleteApplicationSpeakerScheduleReq,
} from '@/admin/pages/profileSetting/appliedHistory/feature/appliedHistoryRequest';
import { IAppliedCallForPaperDetailSearch, IAppliedCallForPaperScheduleDeleteReq, IAppliedParticipationDetailSearch, IAppliedParticipationScheduleDeleteReq, IAppliedSpeakerDetailSearch, IAppliedSpeakerScheduleDeleteReq } from '@/admin/model/appliedHistory/appliedHistoryModel';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';

function useAppliedHistoryApi() {
      const dispatch = useAppDispatch();

      const getApplicationSpeaker = () => {
            dispatch(getApplicationSpeakerReq())
      }


      const getApplicationParticipation = () => {
            dispatch(getApplicationParticipationReq())
      }


      const getApplicationCallForPaper = () => {
            dispatch(getApplicationCallForPaperReq())
      }


      const getApplicationParticipationDetailed = (searchDetail: IAppliedParticipationDetailSearch) => {
            loadingAlertWithMessage({ title: "Loading", text: "Please wait while getting data" });

            dispatch(getApplicationParticipationDetailedReq(searchDetail))
                  .unwrap()
                  .catch((error) => {
                        errorToastMessage(error.detail);
                  })
                  .finally(swalAlertClose)
      }

      const getApplicationSpeakerDetailed = (searchDetail: IAppliedSpeakerDetailSearch) => {
            loadingAlertWithMessage({ title: "Loading", text: "Please wait while getting data" });

            dispatch(getApplicationSpeakerDetailedReq(searchDetail))
                  .unwrap()
                  .catch((error) => {
                        errorToastMessage(error.detail);
                  })
                  .finally(swalAlertClose)
      }

      const getApplicationCallForPaperDetailed = (searchDetail: IAppliedCallForPaperDetailSearch) => {
            loadingAlertWithMessage({ title: "Loading", text: "Please wait while getting data" });

            dispatch(getApplicationCallForPaperDetailedReq(searchDetail))
                  .unwrap()
                  .catch((error) => {
                        errorToastMessage(error.detail);
                  })
                  .finally(swalAlertClose)
      }


      const deleteApplicationCallForPaperSchedule = async (deletingDetail: IAppliedCallForPaperScheduleDeleteReq) => {
            await showSuccessfulConfirmation({ buttonText: "Delete", showCancelButton: true }).then(() => {
                  loadingAlertWithMessage({ title: "Deleting", text: "Please wait while deleting" });

                  dispatch(deleteApplicationCallForPaperScheduleReq(deletingDetail))
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


      const deleteApplicationParticipationSchedule = async (deletingDetail: IAppliedParticipationScheduleDeleteReq) => {
            await showSuccessfulConfirmation({ buttonText: "Delete", showCancelButton: true }).then(() => {
                  loadingAlertWithMessage({ title: "Deleting", text: "Please wait while deleting" });

                  dispatch(deleteApplicationParticipationScheduleReq(deletingDetail))
                        .unwrap()
                        .then(() => {

                              successMessage({ title: "Deleted", message: "Participation session has been deleted." });
                        })
                        .catch((error) => {
                              errorToastMessage(error.detail);

                              throw new Error(error);
                        })
                        .finally(swalAlertClose)
            })
      }


      const deleteApplicationSpeakerSchedule = async (deletingDetail: IAppliedSpeakerScheduleDeleteReq) => {
            await showSuccessfulConfirmation({ buttonText: "Delete", showCancelButton: true }).then(() => {
                  loadingAlertWithMessage({ title: "Deleting", text: "Please wait while deleting" });

                  dispatch(deleteApplicationSpeakerScheduleReq(deletingDetail))
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



      return {
            getApplicationSpeaker, getApplicationParticipation,
            getApplicationCallForPaper, getApplicationParticipationDetailed,
            getApplicationSpeakerDetailed, getApplicationCallForPaperDetailed,
            deleteApplicationCallForPaperSchedule, deleteApplicationParticipationSchedule, deleteApplicationSpeakerSchedule,
      } as const;
}

export default useAppliedHistoryApi