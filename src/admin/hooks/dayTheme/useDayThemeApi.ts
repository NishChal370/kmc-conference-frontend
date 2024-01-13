import { deleteDayTheme as deleteDayThemeReq, getDayThemesMin as getDayThemesMinReq, getDayThemes as getDayThemesReq, postDayTheme, putDayTheme } from '@/admin/pages/dayTheme/feature/dayThemeRequest';
import { IDayThemeDeleteRequest, IDayThemePostRequest, IDayThemePutRequest, IDayThemeSearch } from '@/admin/model/dayTheme/dayThemeModel';
import { useAppDispatch } from '@/app/hooks';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';


function useDayThemeApi() {
      const dispatch = useAppDispatch();

      const getDayThemes = (searchDetail: IDayThemeSearch) => {
            dispatch(getDayThemesReq(searchDetail))
      }

      const getDayThemesMin = () => {
            dispatch(getDayThemesMinReq())
      }

      const addAdminDayTheme = async (dayThemeDetail: IDayThemePostRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(postDayTheme(dayThemeDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "New Theme has been created." });
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


      return { getDayThemes, getDayThemesMin, addAdminDayTheme, updateAdminDayTheme, deleteAdminDayTheme } as const;

}

export default useDayThemeApi