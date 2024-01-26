import { store } from '@/app/store';
import { useAppDispatch } from '@/app/hooks';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';
import { ICallForPaperAddNewSessionPutRequest, ICallForPaperPostRequest } from '@/admin/model/callForPaper/callForPaperApplyModel';
import { IAdminCallForPaperDeleteRequest, ICallForPaperBasicSearch, ICallForPaperByIdSearch } from '@/admin/model/callForPaper/callForPaperModel';
import { scheduleSliceAction } from '@/admin/pages/schedule/feature/scheduleSlice';
import { getCallForPaperBasicInfo as getCallForPaperBasicInfoReq, getCallForPaperDetailedById, deleteCallForPaperDetail as deleteCallForPaperDetailReq, postCallForPaperDetail, putCallForPaperNewSession } from '@/admin/pages/callForPaper/feature/callForPaperRequest';

function useCallForPaperApi() {
      const dispatch = useAppDispatch();

      const getCallForPaperBasicInfo = (searchDetail: ICallForPaperBasicSearch) => {
            dispatch(getCallForPaperBasicInfoReq(searchDetail))
      }


      const getCallForPaperDetailedInfo = async (callForPaperDetail: ICallForPaperByIdSearch) => {
            loadingAlertWithMessage({ title: "Loading", text: "Please wait while getting data" });

            await dispatch(getCallForPaperDetailedById(callForPaperDetail))
                  .unwrap()
                  .catch((error) => {
                        errorToastMessage(error.detail);

                        throw new Error(error.detail)
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



      const addCallForPaperNewSession = async (sessionDetail: ICallForPaperAddNewSessionPutRequest) => {
            loadingAlertWithMessage({ title: "Submitting", text: "Please wait while submitting the form." });

            await dispatch(putCallForPaperNewSession(sessionDetail))
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


      return { getCallForPaperBasicInfo, getCallForPaperDetailedInfo, deleteCallForPaperDetail, addCallForPaperDetail, addCallForPaperNewSession } as const;
}

export default useCallForPaperApi