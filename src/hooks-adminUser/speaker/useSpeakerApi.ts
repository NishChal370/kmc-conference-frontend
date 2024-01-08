import { useAppDispatch } from '@/app/hooks';
import { getSpeakerBasicInfo as getSpeakerBasicInfoReq } from '@/pages-adminUser/speakers/feature/speakerRequest';

function useSpeakerApi() {
      const dispatch = useAppDispatch();

      const getSpeakerBasicInfo = () => {

            dispatch(getSpeakerBasicInfoReq())
      }

      return { getSpeakerBasicInfo } as const;
}

export default useSpeakerApi