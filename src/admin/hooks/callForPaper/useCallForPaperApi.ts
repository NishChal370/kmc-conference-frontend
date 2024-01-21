import { store } from '@/app/store';
import { useAppDispatch } from '@/app/hooks';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';
import { ICallForPaperAddNewSessionPostRequest, ICallForPaperPostRequest } from '@/admin/model/callForPaper/callForPaperApplyModel';
import { IAdminCallForPaperDeleteRequest, IAdminCallForPaperPutRequest, IAdminCallForPaperStatusChangeReq, ICallForPaperBasicSearch, ICallForPaperByIdSearch } from '@/admin/model/callForPaper/callForPaperModel';
import { scheduleSliceAction } from '@/admin/pages/schedule/feature/scheduleSlice';
import { getCallForPaperBasicInfo as getCallForPaperBasicInfoReq, getCallForPaperDetailedById, putAdminCallForPaperApprovalStatus, putAdminCallForPaperFullDetail, deleteCallForPaperDetail as deleteCallForPaperDetailReq, postCallForPaperDetail, postCallForPaperNewSession } from '@/admin/pages/callForPaper/feature/callForPaperRequest';

function useCallForPaperApi() {
      const dispatch = useAppDispatch();

      const getCallForPaperBasicInfo = (searchDetail: ICallForPaperBasicSearch) => {
            dispatch(getCallForPaperBasicInfoReq(searchDetail))
      }


      const getCallForPaperDetailedInfo = (callForPaperDetail: ICallForPaperByIdSearch) => {
            loadingAlertWithMessage({ title: "Loading", text: "Please wait while getting data" });

            dispatch(getCallForPaperDetailedById(callForPaperDetail))
                  .unwrap()
                  .catch((error) => {
                        errorToastMessage(error.detail);
                  })
                  .finally(swalAlertClose)
      }



      const addCallForPaperDetail = async (speakerUpdateDetail: ICallForPaperPostRequest) => {
            loadingAlertWithMessage();

            await dispatch(postCallForPaperDetail(speakerUpdateDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Success", message: "Your request for proposal has been placed." });

                        store.dispatch(scheduleSliceAction.refetchScheduleContentDetails())
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }




      const updateAdminCallForPaperFullDetail = async (callForPaperUpdateDetail: IAdminCallForPaperPutRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putAdminCallForPaperFullDetail(callForPaperUpdateDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "Call For Paper detail has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      const updateCallForPaperApprovalStatus = async (approvalDetail: IAdminCallForPaperStatusChangeReq) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putAdminCallForPaperApprovalStatus(approvalDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "Call For Paper approval has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      const deleteCallForPaperDetail = async (deletingDetail: IAdminCallForPaperDeleteRequest) => {
            await showSuccessfulConfirmation({ buttonText: "Delete", showCancelButton: true }).then(() => {
                  loadingAlertWithMessage({ title: "Deleting", text: "Please wait while deleting" });

                  dispatch(deleteCallForPaperDetailReq(deletingDetail))
                        .unwrap()
                        .then(() => {

                              successMessage({ title: "Deleted", message: "Call For Paper has been deleted." });
                        })
                        .catch((error) => {
                              errorToastMessage(error.detail);

                              throw new Error(error);
                        })
                        .finally(swalAlertClose)
            })
      }



      const addCallForPaperNewSession = async (sessionDetail: ICallForPaperAddNewSessionPostRequest) => {
            loadingAlertWithMessage({ title: "Submitting", text: "Please wait while submitting the form." });

            await dispatch(postCallForPaperNewSession(sessionDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Success", message: "Your request for proposal has been placed." });

                        store.dispatch(scheduleSliceAction.refetchScheduleContentDetails())
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      return { getCallForPaperBasicInfo, getCallForPaperDetailedInfo, updateAdminCallForPaperFullDetail, updateCallForPaperApprovalStatus, deleteCallForPaperDetail, addCallForPaperDetail, addCallForPaperNewSession } as const;
}

export default useCallForPaperApi