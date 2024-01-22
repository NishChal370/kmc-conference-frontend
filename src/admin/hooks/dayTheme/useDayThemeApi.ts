import { useAppDispatch } from '@/app/hooks';
import { deleteDayTheme as deleteDayThemeReq, getDayThemesMin as getDayThemesMinReq, getDayThemes as getDayThemesReq, postDayTheme, putDayTheme, getDayThemeById as getDayThemeByIdReq } from '@/admin/pages/dayTheme/feature/dayThemeRequest';
import { IDayThemeByIdSearch, IDayThemeDeleteRequest, IDayThemeMinSearch, IDayThemePostRequest, IDayThemePutRequest, IDayThemeSearch } from '@/admin/model/dayTheme/dayThemeModel';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';


function useDayThemeApi() {
      const dispatch = useAppDispatch();

      const getDayThemes = (searchDetail: IDayThemeSearch) => {
            dispatch(getDayThemesReq(searchDetail))
      }


      const getDayThemeById = (searchDetail: IDayThemeByIdSearch) => {
            dispatch(getDayThemeByIdReq(searchDetail))
      }


      const getDayThemesMin = (searchDetail: IDayThemeMinSearch = {}) => {
            dispatch(getDayThemesMinReq(searchDetail))
      }

      const addAdminDayTheme = async (dayThemeDetail: IDayThemePostRequest) => {
            loadingAlertWithMessage();

            await dispatch(postDayTheme(dayThemeDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Success", message: "New Theme has been created." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      const updateAdminDayTheme = async (dayThemeDetail: IDayThemePutRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putDayTheme(dayThemeDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "Theme detail has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      const deleteAdminDayTheme = async (deletingDetail: IDayThemeDeleteRequest) => {
            await showSuccessfulConfirmation({ buttonText: "Delete", showCancelButton: true }).then(() => {
                  loadingAlertWithMessage({ title: "Deleting", text: "Please wait while deleting" });

                  dispatch(deleteDayThemeReq(deletingDetail))
                        .unwrap()
                        .then(() => {
                              successMessage({ title: "Deleted", message: "Theme has been deleted." });
                        })
                        .catch((error) => {
                              errorToastMessage(error.detail);

                              throw new Error(error);
                        })
                        .finally(swalAlertClose)
            })
      }


      return { getDayThemes, getDayThemesMin, getDayThemeById, addAdminDayTheme, updateAdminDayTheme, deleteAdminDayTheme } as const;

}

export default useDayThemeApi