import { useAppDispatch } from '@/app/hooks';
import { getSpeakerBasicInfo as getSpeakerBasicInfoReq, putAdminSpeakerFullDetail, getAdminSpeakerFullDetailedInfo as getAdminSpeakerFullDetailedInfoReq, putAdminSpeakerApprovalStatus, deleteSpeakerDetail as deleteSpeakerDetailReq } from '@/admin/pages/speaker/feature/speakerRequest';
import { IAdminSpeakerBasicInfoSearch, IAdminSpeakerFullDetailedInfoById, IAdminSpeakerPutRequest, IAdminSpeakerStatusChangeReq, ISpeakerDetailDeleteRequest } from '@/admin/model/speaker/adminSpeakerModel';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';

function useSpeakerApi() {
      const dispatch = useAppDispatch();

      const getSpeakerBasicInfo = (searchDetail: IAdminSpeakerBasicInfoSearch) => {
            dispatch(getSpeakerBasicInfoReq(searchDetail))
      }


      const getAdminSpeakerFullDetailedInfo = (speakerDetail: IAdminSpeakerFullDetailedInfoById) => {
            loadingAlertWithMessage({ title: "Loading", text: "Please wait while getting data" });

            dispatch(getAdminSpeakerFullDetailedInfoReq(speakerDetail))
                  .unwrap()
                  .catch((error) => {
                        errorToastMessage(error.detail);
                  })
                  .finally(swalAlertClose)
      }



      const updateAdminSpeakerFullDetail = async (speakerUpdateDetail: IAdminSpeakerPutRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putAdminSpeakerFullDetail(speakerUpdateDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "Speaker detail has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      const updateSpeakerApprovalStatus = async (approvalDetail: IAdminSpeakerStatusChangeReq) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putAdminSpeakerApprovalStatus(approvalDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "Speaker approval has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      const deleteSpeakerDetail = async (deletingDetail: ISpeakerDetailDeleteRequest) => {
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

      return { getSpeakerBasicInfo, updateAdminSpeakerFullDetail, getAdminSpeakerFullDetailedInfo, updateSpeakerApprovalStatus, deleteSpeakerDetail } as const;
}

export default useSpeakerApi