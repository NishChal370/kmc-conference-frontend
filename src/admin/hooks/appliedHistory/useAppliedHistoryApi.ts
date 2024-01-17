import { useAppDispatch } from '@/app/hooks';
import {
      getApplicationSpeaker as getApplicationSpeakerReq,
      getApplicationParticipation as getApplicationParticipationReq,
      getApplicationCallForPaper as getApplicationCallForPaperReq,
      getApplicationParticipationDetailed as getApplicationParticipationDetailedReq
} from '@/admin/pages/profileSetting/appliedHistory/feature/appliedHistoryRequest';
import { IAppliedParticipationDetailSearch } from '@/admin/model/appliedHistory/appliedHistoryModel';
import { errorToastMessage, loadingAlertWithMessage, swalAlertClose } from '@/utils/alert';

function useAppliedHistoryApi() {
      const dispatch = useAppDispatch();

      const getApplicationSpeaker = () => {
            dispatch(getApplicationSpeakerReq())
      }


      const getApplicationParticipation = () => {
            dispatch(getApplicationParticipationReq())
      }


      const getApplicationCallForPaper = () => {
            dispatch(getApplicationCallForPaperReq())
      }


      const getApplicationParticipationDetailed = (searchDetail: IAppliedParticipationDetailSearch) => {
            loadingAlertWithMessage({ title: "Loading", text: "Please wait while getting data" });

            dispatch(getApplicationParticipationDetailedReq(searchDetail))
                  .unwrap()
                  .catch((error) => {
                        errorToastMessage(error.detail);
                  })
                  .finally(swalAlertClose)
      }


      return { getApplicationSpeaker, getApplicationParticipation, getApplicationCallForPaper, getApplicationParticipationDetailed } as const;
}

export default useAppliedHistoryApi