import { useAppDispatch } from '@/app/hooks';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';
import { IAdminCallForPaperDeleteRequest, IAdminCallForPaperPutRequest, IAdminCallForPaperStatusChangeReq, ICallForPaperBasicSearch, ICallForPaperByIdSearch } from '@/admin/model/callForPaper/callForPaperModel';
import { getCallForPaperBasicInfo as getCallForPaperBasicInfoReq, getCallForPaperDetailedById, putAdminCallForPaperApprovalStatus, putAdminCallForPaperFullDetail, deleteCallForPaperDetail as deleteCallForPaperDetailReq } from '@/admin/pages/callForPaper/feature/callForPaperRequest';

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

      return { getCallForPaperBasicInfo, getCallForPaperDetailedInfo, updateAdminCallForPaperFullDetail, updateCallForPaperApprovalStatus, deleteCallForPaperDetail } as const;
}

export default useCallForPaperApi