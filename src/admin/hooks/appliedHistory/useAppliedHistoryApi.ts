import { useAppDispatch } from '@/app/hooks';
import {
      getApplicationSpeakerSession as getApplicationSpeakerSessionReq,
      getApplicationParticipationSessions as getApplicationParticipationSessionsReq,
      getApplicationCallForPaperSession as getApplicationCallForPaperSessionReq,
      getApplicationParticipationSessionDetailed as getApplicationParticipationSessionDetailedReq,
      getApplicationSpeakerSessionDetailed as getApplicationSpeakerSessionDetailedReq,
      getApplicationCallForPaperSessionDetailed as getApplicationCallForPaperSessionDetailedReq,
      deleteApplicationCallForPaperSchedule as deleteApplicationCallForPaperScheduleReq,
      deleteApplicationParticipationSchedule as deleteApplicationParticipationScheduleReq,
      deleteApplicationSpeakerSchedule as deleteApplicationSpeakerScheduleReq,
      getApplicationSpeakerBasicInfo as getApplicationSpeakerBasicInfoReq,
      getApplicationCallForPaperBasicInfo as getApplicationCallForPaperBasicInfoReq,
      getApplicationParticipationBasicInfo as getApplicationParticipationBasicInfoReq,
      putAppliedSpeakerBasicInfo,
      putAppliedCallForPaperBasicInfo,
      putAppliedParticipationBasicInfo,
} from '@/admin/pages/profileSetting/appliedHistory/feature/appliedHistoryRequest';
import { IAppliedCallForPaperSessionDetailSearch, IAppliedCallForPaperScheduleDeleteReq, IAppliedParticipationSessionDetailSearch, IAppliedParticipationScheduleDeleteReq, IAppliedSpeakerBasicPutRequest, IAppliedSpeakerSessionDetailSearch, IAppliedSpeakerScheduleDeleteReq, IAppliedCallForPaperPutRequest, IAppliedParticipationBasicPutRequest } from '@/admin/model/appliedHistory/appliedHistoryModel';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';

function useAppliedHistoryApi() {
      const dispatch = useAppDispatch();

      const getApplicationSpeakerBasicInfo = () => {
            dispatch(getApplicationSpeakerBasicInfoReq())
      }

      const getApplicationSpeakerSession = () => {
            dispatch(getApplicationSpeakerSessionReq())
      }


      const getApplicationParticipationBasicInfo = () => {
            dispatch(getApplicationParticipationBasicInfoReq())
      }

      const getApplicationParticipationSessions = () => {
            dispatch(getApplicationParticipationSessionsReq())
      }


      const getApplicationCallForPaperBasicInfo = () => {
            dispatch(getApplicationCallForPaperBasicInfoReq())
      }

      const getApplicationCallForPaperSession = () => {
            dispatch(getApplicationCallForPaperSessionReq())
      }


      const getApplicationParticipationSessionDetailed = (searchDetail: IAppliedParticipationSessionDetailSearch) => {
            loadingAlertWithMessage({ title: "Loading", text: "Please wait while getting data" });

            dispatch(getApplicationParticipationSessionDetailedReq(searchDetail))
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

      const getApplicationCallForPaperSessionDetailed = (searchDetail: IAppliedCallForPaperSessionDetailSearch) => {
            loadingAlertWithMessage({ title: "Loading", text: "Please wait while getting data" });

            dispatch(getApplicationCallForPaperSessionDetailedReq(searchDetail))
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



      const updateAppliedCallForPaperBasic = async (updatedDetail: IAppliedCallForPaperPutRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putAppliedCallForPaperBasicInfo(updatedDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "Applied Call For Paper has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }

      const updateAppliedParticipationBasic = async (updatedDetail: IAppliedParticipationBasicPutRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putAppliedParticipationBasicInfo(updatedDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "Applied Participation has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }



      return {
            getApplicationSpeakerBasicInfo,
            getApplicationSpeakerSession, getApplicationParticipationSessions,
            getApplicationCallForPaperSession, getApplicationParticipationSessionDetailed,
            getApplicationSpeakerSessionDetailed, getApplicationCallForPaperSessionDetailed,
            deleteApplicationCallForPaperSchedule, deleteApplicationParticipationSchedule, deleteApplicationSpeakerSchedule,
            getApplicationCallForPaperBasicInfo, getApplicationParticipationBasicInfo,
            updateApplicationSpeakerBasic, updateAppliedCallForPaperBasic, updateAppliedParticipationBasic,
      } as const;
}

export default useAppliedHistoryApi