import { useAppDispatch } from '@/app/hooks';
import { IContactUsDeleteRequest, IContactUsPostRequest, IContactUsPutRequest, IContactUsSearch } from '@/admin/model/contactUs/contactUsModel';
import { deleteContactUs as deleteContactUsReq, fetchContactUs, postContactUs, putContactUs } from '@/admin/pages/contactUs/feature/contactUsRequest';
import { errorToastMessage, loadingAlertWithMessage, showSuccessfulConfirmation, successMessage, swalAlertClose } from '@/utils/alert';

function useContactUsApi() {
      const dispatch = useAppDispatch();

      const getContactUs = (searchDetail: IContactUsSearch) => {
            dispatch(fetchContactUs(searchDetail))
      }


      const addContactUs = async (contactUsDetail: IContactUsPostRequest) => {
            loadingAlertWithMessage();

            await dispatch(postContactUs(contactUsDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Success", message: "Your request has been placed." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      const updateContactUsStatus = async (contactUsDetail: IContactUsPutRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putContactUs(contactUsDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "Contact Us status has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }



      const deleteContactUs = async (contactUsDetail: IContactUsDeleteRequest) => {
            await showSuccessfulConfirmation({ buttonText: "Delete", showCancelButton: true }).then(() => {
                  loadingAlertWithMessage({ title: "Deleting", text: "Please wait while deleting" });

                  dispatch(deleteContactUsReq(contactUsDetail))
                        .unwrap()
                        .then(() => {

                              successMessage({ title: "Deleted", message: "Contact Us has been deleted." });
                        })
                        .catch((error) => {
                              errorToastMessage(error.detail);

                              throw new Error(error);
                        })
                        .finally(swalAlertClose)
            })
      }


      return { getContactUs, addContactUs, updateContactUsStatus, deleteContactUs } as const;
}

export default useContactUsApi