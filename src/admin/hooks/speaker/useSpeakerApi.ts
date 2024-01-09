import { useAppDispatch } from '@/app/hooks';
import { getSpeakerBasicInfo as getSpeakerBasicInfoReq, putAdminSpeakerFullDetail } from '@/admin/pages/speaker/feature/speakerRequest';
import { IAdminSpeakerPutRequest } from '@/admin/model/speaker/adminSpeakerModel';
import { errorToastMessage, loadingAlertWithMessage, successMessage, swalAlertClose } from '@/utils/alert';

function useSpeakerApi() {
      const dispatch = useAppDispatch();

      const getSpeakerBasicInfo = () => {

            dispatch(getSpeakerBasicInfoReq())
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

      return { getSpeakerBasicInfo, updateAdminSpeakerFullDetail } as const;
}

export default useSpeakerApi