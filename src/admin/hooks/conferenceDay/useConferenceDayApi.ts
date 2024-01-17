import { useAppDispatch } from '@/app/hooks';
import { deleteConferenceDay, getConferenceDayDetail as getConferenceDayDetailReq, postConferenceDay, putConferenceDay, getConferenceDayBasicInfo as getConferenceDayBasicInfoReq } from '@/admin/pages/conferenceDay/feature/conferenceDayRequest';
import { IConferenceDayDeleteRequest, IConferenceDayPostRequest, IConferenceDayPutRequest, IConferenceDaySearch } from '@/admin/model/conferenceDay/conferenceDayModel';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';

function useConferenceDayApi() {
      const dispatch = useAppDispatch();


      const getConferenceDayDetail = (searchDetail: IConferenceDaySearch) => {
            dispatch(getConferenceDayDetailReq(searchDetail))
      }

      const getConferenceDaysBasicInfo = () => {
            dispatch(getConferenceDayBasicInfoReq())
      }


      const addConferenceDayDetail = async (conferenceDayDetail: IConferenceDayPostRequest) => {
            loadingAlertWithMessage();

            await dispatch(postConferenceDay(conferenceDayDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Success", message: "New Conference Day has been created." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      const updateConferenceDayDetail = async (conferenceDayDetail: IConferenceDayPutRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putConferenceDay(conferenceDayDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "Conference Day detail has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }

      const deleteConferenceDayDetail = async (conferenceDayDetail: IConferenceDayDeleteRequest) => {
            await showSuccessfulConfirmation({ buttonText: "Delete", showCancelButton: true }).then(() => {
                  loadingAlertWithMessage({ title: "Deleting", text: "Please wait while deleting" });

                  dispatch(deleteConferenceDay(conferenceDayDetail))
                        .unwrap()
                        .then(() => {

                              successMessage({ title: "Deleted", message: "Conference day has been deleted." });
                        })
                        .catch((error) => {
                              errorToastMessage(error.detail);

                              throw new Error(error);
                        })
                        .finally(swalAlertClose)
            })
      }


      return { getConferenceDayDetail, getConferenceDaysBasicInfo, addConferenceDayDetail, updateConferenceDayDetail, deleteConferenceDayDetail } as const;
}

export default useConferenceDayApi