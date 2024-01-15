import { useAppDispatch } from '@/app/hooks';
import { deleteParticipantDetail as deleteParticipantDetailReq, getParticipantBasicInfo as getParticipantBasicInfoReq, getParticipantDetailedById } from '@/admin/pages/participant/feature/participantRequest';
import { IAdminParticipantDeleteRequest, IParticipantBasicSearch, IParticipantByIdSearch } from '@/admin/model/participant/participantModel';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';

function useParticipantApi() {
      const dispatch = useAppDispatch();

      const getParticipantBasicInfo = (searchDetail: IParticipantBasicSearch) => {
            dispatch(getParticipantBasicInfoReq(searchDetail))
      }


      const getParticipantDetailedInfo = (participantDetail: IParticipantByIdSearch) => {
            loadingAlertWithMessage({ title: "Loading", text: "Please wait while getting data" });

            dispatch(getParticipantDetailedById(participantDetail))
                  .unwrap()
                  .catch((error) => {
                        errorToastMessage(error.detail);
                  })
                  .finally(swalAlertClose)
      }



      const deleteParticipantDetail = async (deletingDetail: IAdminParticipantDeleteRequest) => {
            await showSuccessfulConfirmation({ buttonText: "Delete", showCancelButton: true }).then(() => {
                  loadingAlertWithMessage({ title: "Deleting", text: "Please wait while deleting" });

                  dispatch(deleteParticipantDetailReq(deletingDetail))
                        .unwrap()
                        .then(() => {

                              successMessage({ title: "Deleted", message: "Participant has been deleted." });
                        })
                        .catch((error) => {
                              errorToastMessage(error.detail);

                              throw new Error(error);
                        })
                        .finally(swalAlertClose)
            })
      }

      return { getParticipantBasicInfo, getParticipantDetailedInfo, deleteParticipantDetail } as const;
}

export default useParticipantApi