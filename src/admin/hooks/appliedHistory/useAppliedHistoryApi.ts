import { useAppDispatch } from '@/app/hooks';
import {
      getApplicationSpeakerSession as getApplicationSpeakerSessionReq,
      getApplicationParticipation as getApplicationParticipationReq,
      getApplicationCallForPaper as getApplicationCallForPaperReq,
      getApplicationParticipationDetailed as getApplicationParticipationDetailedReq,
      getApplicationSpeakerSessionDetailed as getApplicationSpeakerSessionDetailedReq,
      getApplicationCallForPaperDetailed as getApplicationCallForPaperDetailedReq,
      deleteApplicationCallForPaperSchedule as deleteApplicationCallForPaperScheduleReq,
      deleteApplicationParticipationSchedule as deleteApplicationParticipationScheduleReq,
      deleteApplicationSpeakerSchedule as deleteApplicationSpeakerScheduleReq,
      getApplicationSpeakerBasicInfo as getApplicationSpeakerBasicInfoReq,
      putAppliedSpeakerBasicInfo,
} from '@/admin/pages/profileSetting/appliedHistory/feature/appliedHistoryRequest';
import { IAppliedCallForPaperDetailSearch, IAppliedCallForPaperScheduleDeleteReq, IAppliedParticipationDetailSearch, IAppliedParticipationScheduleDeleteReq, IAppliedSpeakerBasicPutRequest, IAppliedSpeakerSessionDetailSearch, IAppliedSpeakerScheduleDeleteReq } from '@/admin/model/appliedHistory/appliedHistoryModel';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';

function useAppliedHistoryApi() {
      const dispatch = useAppDispatch();

      const getApplicationSpeakerBasicInfo = () => {
            dispatch(getApplicationSpeakerBasicInfoReq())
      }

      const getApplicationSpeakerSession = () => {
            dispatch(getApplicationSpeakerSessionReq())
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

      const getApplicationSpeakerSessionDetailed = (searchDetail: IAppliedSpeakerSessionDetailSearch) => {
            loadingAlertWithMessage({ title: "Loading", text: "Please wait while getting data" });

            dispatch(getApplicationSpeakerSessionDetailedReq(searchDetail))
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


      const updateApplicationSpeakerBasic = async (updatedDetail: IAppliedSpeakerBasicPutRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putAppliedSpeakerBasicInfo(updatedDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "Applied Speaker has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }



      return {
            getApplicationSpeakerBasicInfo,
            getApplicationSpeakerSession, getApplicationParticipation,
            getApplicationCallForPaper, getApplicationParticipationDetailed,
            getApplicationSpeakerSessionDetailed, getApplicationCallForPaperDetailed,
            deleteApplicationCallForPaperSchedule, deleteApplicationParticipationSchedule, deleteApplicationSpeakerSchedule,
            updateApplicationSpeakerBasic,
      } as const;
}

export default useAppliedHistoryApi