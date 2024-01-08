import { useAppDispatch } from '@/app/hooks';
import { getSpeakerBasicInfo as getSpeakerBasicInfoReq } from '@/admin/pages/speaker/feature/speakerRequest';

function useSpeakerApi() {
      const dispatch = useAppDispatch();

      const getSpeakerBasicInfo = () => {

            dispatch(getSpeakerBasicInfoReq())
      }

      return { getSpeakerBasicInfo } as const;
}

export default useSpeakerApi