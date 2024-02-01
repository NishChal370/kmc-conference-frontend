import { useAppDispatch } from '@/app/hooks';
import { deleteNews, fetchNewsBasicInfo, fetchNewsDetailById, postNews, putNews } from '@/admin/pages/news/feature/newsRequest';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';
import { INewsBasicSearch, INewsDeleteRequest, INewsDetailSearch, INewsPostRequest, INewsPutRequest } from '@/admin/model/news/newsModel';

function useNewsApi() {
      const dispatch = useAppDispatch();

      const getNewsBasicInfo = (searchDetail: INewsBasicSearch) => {
            dispatch(fetchNewsBasicInfo(searchDetail))
      }

      const getNewsDetailedInfo = async (searchDetail: INewsDetailSearch) => {
            loadingAlertWithMessage({ title: "Loading", text: "Please wait while getting data" });

            await dispatch(fetchNewsDetailById(searchDetail))
                  .unwrap()
                  .catch((error) => {
                        errorToastMessage(error.detail);

                        throw new Error(error.detail)
                  })
                  .finally(swalAlertClose)
      }

      const getNewsDetailedInfoContent = (searchDetail: INewsDetailSearch) => {
            dispatch(fetchNewsDetailById(searchDetail))
      }

      const addNewsDetail = async (newsDetail: INewsPostRequest) => {
            loadingAlertWithMessage();

            await dispatch(postNews(newsDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Success", message: "New News has been created." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }



      const updateNewsDetail = async (newsUpdatedDetail: INewsPutRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putNews(newsUpdatedDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "News detail has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }

      const deleteNewsDetail = async (newsDetail: INewsDeleteRequest) => {
            await showSuccessfulConfirmation({ buttonText: "Delete", showCancelButton: true }).then(() => {
                  loadingAlertWithMessage({ title: "Deleting", text: "Please wait while deleting" });

                  dispatch(deleteNews(newsDetail))
                        .unwrap()
                        .then(() => {

                              successMessage({ title: "Deleted", message: "News has been deleted." });
                        })
                        .catch((error) => {
                              errorToastMessage(error.detail);

                              throw new Error(error);
                        })
                        .finally(swalAlertClose)
            })
      }

      return { getNewsBasicInfo, getNewsDetailedInfo, getNewsDetailedInfoContent, addNewsDetail, updateNewsDetail, deleteNewsDetail } as const;
}

export default useNewsApi