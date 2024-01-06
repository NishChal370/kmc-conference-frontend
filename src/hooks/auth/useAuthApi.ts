import { useAppDispatch } from '@/app/hooks';
import { fetchUserLogout, fetchVeryLogin } from '@/protectedRoute/feature/verifyLoginRequest';
import { errorToastMessage } from '@/utils/alert';

function useAuthApi() {
      const dispatch = useAppDispatch();

      const logout = async () => {
            await dispatch(fetchUserLogout())
                  .unwrap()
                  .catch(({ detail }) => {
                        errorToastMessage(detail);

                        throw new Error(detail)
                  })
      }

      const verifyLogin = () => {
            dispatch(fetchVeryLogin());
      }

      return { logout, verifyLogin } as const;
}

export default useAuthApi