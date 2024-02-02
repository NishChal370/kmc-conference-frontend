import { useAppDispatch } from '@/app/hooks';
import { fetchQR } from '@/service/qrModal/feature/qrRequest';

function useQRApi() {
      const dispatch = useAppDispatch();

      const getQR = () => {
            dispatch(fetchQR())
      }


      return { getQR } as const;

}

export default useQRApi