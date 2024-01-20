import { useAppDispatch } from "@/app/hooks";
import { deleteSchedule, getScheduleContentDetail as getScheduleContentDetailReq, getSchedules as getSchedulesReq, postSchedule, putSchedule, getScheduleContentBriefDetail as getScheduleContentBriefDetailReq, getScheduleContentPrivateDetail as getScheduleContentPrivateDetailReq } from "@/admin/pages/schedule/feature/scheduleRequest";
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from "@/utils/alert";
import { IScheduleDeleteRequest, ISchedulePostRequest, ISchedulePutRequest, IScheduleSearch } from "@/admin/model/schedule/scheduleModel";
import { IScheduleContentDetailSearch, IScheduleContentBriefDetailSearch } from "@/admin/model/schedule/scheduleContentModel";




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


      const getScheduleContentDetail = (searchDetail: IScheduleContentDetailSearch) => {
            dispatch(getScheduleContentDetailReq(searchDetail))
      }

      const getScheduleContentPrivateDetail = (searchDetail: IScheduleContentDetailSearch) => {
            dispatch(getScheduleContentPrivateDetailReq(searchDetail))
      }

      const getScheduleContentBriefDetail = (searchDetail: IScheduleContentBriefDetailSearch) => {
            dispatch(getScheduleContentBriefDetailReq(searchDetail))
      }


      return { getSchedules, addAdminSchedule, updateAdminSchedule, deleteAdminSchedule, getScheduleContentDetail, getScheduleContentPrivateDetail, getScheduleContentBriefDetail } as const;
}

export default useScheduleApi