import { useAppDispatch } from '@/app/hooks';
import { getConferenceDayDetail as getConferenceDayDetailReq, putConferenceDay } from '@/admin/pages/conferenceDay/feature/conferenceDayRequest';
import { IConferenceDayPutRequest, IConferenceDaySearch } from '@/admin/model/conferenceDay/conferenceDayModel';
import { errorToastMessage, loadingAlertWithMessage, successMessage, swalAlertClose } from '@/utils/alert';

function useConferenceDayApi() {
      const dispatch = useAppDispatch();


      const getConferenceDayDetail = (searchDetail: IConferenceDaySearch) => {
            dispatch(getConferenceDayDetailReq(searchDetail))
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


      return { getConferenceDayDetail, updateConferenceDayDetail } as const;
}

export default useConferenceDayApi