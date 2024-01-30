import { useAppDispatch } from '@/app/hooks';
import { IAttachment } from '@/models/file/fileModel';
import { fetchFile } from '@/service/file/feature/fileRequest';

function useFileApi() {
      const dispatch = useAppDispatch()

      const getFile = async (file: IAttachment) => {

            return await dispatch(fetchFile(file))
                  .unwrap()
                  .then((message) => {

                        // converting blob file into url
                        return window.URL.createObjectURL(message);
                  })
                  .catch(({ errorMessage }) => {

                        throw new Error(errorMessage)
                  });
      }

      return { getFile } as const;

}

export default useFileApi