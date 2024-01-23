import { useAppDispatch } from '@/app/hooks';
import { ISpeakerContentDetailSearch } from '@/admin/model/speaker/speakerContentModel';
import { getSpeakersContent as getSpeakersContentReq, getSpeakerContentDetail as getSpeakerContentDetailReq } from '@/admin/pages/speaker/feature/speakerContentRequest';


function useSpeakerContentApi() {
      const dispatch = useAppDispatch();

      const getSpeakersContent = () => {
            dispatch(getSpeakersContentReq())
      }


      const getSpeakerContentDetail = (searchDetail: ISpeakerContentDetailSearch) => {
            dispatch(getSpeakerContentDetailReq(searchDetail))
      }


      return { getSpeakersContent, getSpeakerContentDetail } as const;
}

export default useSpeakerContentApi