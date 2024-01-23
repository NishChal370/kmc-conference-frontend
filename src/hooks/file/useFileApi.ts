import { useAppDispatch } from '@/app/hooks';
import { errorToastMessage } from '@/utils/alert';
import { IAttachment } from '@/models/file/fileModel';
import { fetchImageFile } from '@/service/file/feature/speakerFileRequest';

function useFileApi() {
      const dispatch = useAppDispatch()

      const getImageFile = async (fileName: IAttachment) => {

            return await dispatch(fetchImageFile(fileName))
                  .unwrap()
                  .then((message) => {

                        // converting blob file into url
                        return window.URL.createObjectURL(message);
                  })
                  .catch((errorMessage) => {
                        errorToastMessage(errorMessage);

                        throw new Error(errorMessage)
                  });
      }

      return { getImageFile } as const;

}

export default useFileApi