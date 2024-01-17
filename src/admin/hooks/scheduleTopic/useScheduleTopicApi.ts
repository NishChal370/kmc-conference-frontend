import { deleteScheduleTopic, getScheduleTopics as getScheduleTopicsReq, postScheduleTopic, putScheduleTopic } from "@/admin/pages/scheduleTopic/feature/scheduleTopicRequest";
import { useAppDispatch } from "@/app/hooks";
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from "@/utils/alert";
import { IScheduleTopicDeleteRequest, IScheduleTopicPostRequest, IScheduleTopicPutRequest, IScheduleTopicsSearch } from "@/admin/model/scheduleTopic/scheduleTopicModel";




function useScheduleTopicApi() {
      const dispatch = useAppDispatch();

      const getScheduleTopics = (searchDetail: IScheduleTopicsSearch) => {
            dispatch(getScheduleTopicsReq(searchDetail))
      }



      const addAdminScheduleTopic = async (newScheduleTopicDetail: IScheduleTopicPostRequest) => {
            loadingAlertWithMessage();

            await dispatch(postScheduleTopic(newScheduleTopicDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Success", message: "New Session Topic has been created." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      const updateAdminScheduleTopic = async (scheduleUpdatedDetail: IScheduleTopicPutRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putScheduleTopic(scheduleUpdatedDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "Session topic detail has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      const deleteAdminScheduleTopic = async (deletingDetail: IScheduleTopicDeleteRequest) => {
            await showSuccessfulConfirmation({ buttonText: "Delete", showCancelButton: true }).then(() => {
                  loadingAlertWithMessage({ title: "Deleting", text: "Please wait while deleting" });

                  dispatch(deleteScheduleTopic(deletingDetail))
                        .unwrap()
                        .then(() => {

                              successMessage({ title: "Deleted", message: "Session topic has been deleted." });
                        })
                        .catch((error) => {
                              errorToastMessage(error.detail);

                              throw new Error(error);
                        })
                        .finally(swalAlertClose)
            })
      }


      return { getScheduleTopics, addAdminScheduleTopic, updateAdminScheduleTopic, deleteAdminScheduleTopic } as const;
}

export default useScheduleTopicApi