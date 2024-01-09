import { useAppDispatch } from '@/app/hooks';
import { getSpeakerBasicInfo as getSpeakerBasicInfoReq, putAdminSpeakerFullDetail, getAdminSpeakerFullDetailedInfo as getAdminSpeakerFullDetailedInfoReq } from '@/admin/pages/speaker/feature/speakerRequest';
import { IAdminSpeakerFullDetailedInfoById, IAdminSpeakerPutRequest } from '@/admin/model/speaker/adminSpeakerModel';
import { errorToastMessage, loadingAlertWithMessage, successMessage, swalAlertClose } from '@/utils/alert';

function useSpeakerApi() {
      const dispatch = useAppDispatch();

      const getSpeakerBasicInfo = () => {
            dispatch(getSpeakerBasicInfoReq())
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
                        successMessage({ title: "Updated", message: "Cheque request has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }

      return { getSpeakerBasicInfo, updateAdminSpeakerFullDetail, getAdminSpeakerFullDetailedInfo } as const;
}

export default useSpeakerApi