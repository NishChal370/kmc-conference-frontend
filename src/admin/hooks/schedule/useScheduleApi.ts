import { useAppDispatch } from "@/app/hooks";
import { IScheduleDeleteRequest, ISchedulePostRequest, ISchedulePutRequest, IScheduleSearch } from "@/admin/model/schedule/scheduleModel";
import { deleteSchedule, getSchedules as getSchedulesReq, postSchedule, putSchedule, } from "@/admin/pages/schedule/feature/scheduleRequest";
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from "@/utils/alert";




function useScheduleApi() {
      const dispatch = useAppDispatch();

      const getSchedules = (searchDetail: IScheduleSearch) => {
            dispatch(getSchedulesReq(searchDetail))
      }


      const addAdminSchedule = async (newScheduleDetail: ISchedulePostRequest) => {
            loadingAlertWithMessage();

            await dispatch(postSchedule(newScheduleDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Success", message: "New Session has been created." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      const updateAdminSchedule = async (scheduleUpdatedDetail: ISchedulePutRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putSchedule(scheduleUpdatedDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "Session detail has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      const deleteAdminSchedule = async (deletingDetail: IScheduleDeleteRequest) => {
            await showSuccessfulConfirmation({ buttonText: "Delete", showCancelButton: true }).then(() => {
                  loadingAlertWithMessage({ title: "Deleting", text: "Please wait while deleting" });

                  dispatch(deleteSchedule(deletingDetail))
                        .unwrap()
                        .then(() => {

                              successMessage({ title: "Deleted", message: "Session has been deleted." });
                        })
                        .catch((error) => {
                              errorToastMessage(error.detail);

                              throw new Error(error);
                        })
                        .finally(swalAlertClose)
            })
      }


      return { getSchedules, addAdminSchedule, updateAdminSchedule, deleteAdminSchedule } as const;
}

export default useScheduleApi