import { useAppDispatch } from '@/app/hooks';
import { fetchUserLogout, fetchVeryLogin } from '@/protectedRoute/feature/verifyLoginRequest';
import { errorToastMessage } from '@/utils/alert';

function useAuthApi() {
      const dispatch = useAppDispatch();

      const logout = () => {
            dispatch(fetchUserLogout())
                  .unwrap()
                  .catch(({ detail }) => {
                        errorToastMessage(detail);
                  })
      }

      const verifyLogin = () => {
            dispatch(fetchVeryLogin());
      }

      return { logout, verifyLogin } as const;
}

export default useAuthApi