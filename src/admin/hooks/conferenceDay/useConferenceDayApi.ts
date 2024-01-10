import { useAppDispatch } from '@/app/hooks';
import { getConferenceDayDetail as getConferenceDayDetailReq } from '@/admin/pages/conferenceDay/feature/conferenceDayRequest';
import { IConferenceDaySearch } from '@/admin/model/conferenceDay/conferenceDayModel';

function useConferenceDayApi() {
      const dispatch = useAppDispatch();


      const getConferenceDayDetail = (searchDetail: IConferenceDaySearch) => {
            dispatch(getConferenceDayDetailReq(searchDetail))
      }


      return { getConferenceDayDetail } as const;
}

export default useConferenceDayApi