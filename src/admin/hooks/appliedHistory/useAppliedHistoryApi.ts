import { useAppDispatch } from '@/app/hooks';
import { getApplicationSpeaker as getApplicationSpeakerReq, getApplicationParticipation as getApplicationParticipationReq, getApplicationCallForPaper as getApplicationCallForPaperReq } from '@/admin/pages/profileSetting/appliedHistory/feature/appliedHistoryRequest';

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


      return { getApplicationSpeaker, getApplicationParticipation, getApplicationCallForPaper } as const;
}

export default useAppliedHistoryApi