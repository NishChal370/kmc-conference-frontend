import { useAppDispatch } from '@/app/hooks';
import { fetchSpeakerScheduleBasic } from '@/admin/pages/speakerSchedule/feature/speakerScheduleRequest';
import { ISpeakerScheduleBasicSearch } from '@/admin/model/speakerSchedule/speakerScheduleModel';

function useSpeakerScheduleApi() {
      const dispatch = useAppDispatch();

      const getSpeakerScheduleBasic = (searchDetail: ISpeakerScheduleBasicSearch) => {
            dispatch(fetchSpeakerScheduleBasic(searchDetail))
      }


      return { getSpeakerScheduleBasic } as const;
}

export default useSpeakerScheduleApi