import useContactUsApi from "@/admin/hooks/contactUs/useContactUsApi";
import { IContactUsUpdateForm } from "@/admin/model/contactUs/contactUsModel";
import { ContactReplyStatus } from "@/enum/contactUs/contactUsEnum";
import { useState } from "react";
import AdminContactUsEditStatusModal from "../components/AdminContactUsEditStatusModal";

interface IAdminContactUsEditStatusModalContainer {
      closeModal: () => void;
      contactUsStatusDetail: IContactUsUpdateForm;
}
function AdminContactUsEditStatusModalContainer({
      closeModal,
      contactUsStatusDetail,
}: IAdminContactUsEditStatusModalContainer) {
      const { updateContactUsStatus } = useContactUsApi();

      const [replyStatus, setReplyStatus] = useState<ContactReplyStatus>(contactUsStatusDetail.status);

      const inputChangeHandler = (status: ContactReplyStatus) => {
            setReplyStatus(status);
      };

      const formSubmitHandler = () => {
            updateContactUsStatus({
                  id: contactUsStatusDetail.id,
                  status: replyStatus,
            }).then(closeModal);
      };

      return (
            <AdminContactUsEditStatusModal
                  value={replyStatus}
                  submitHandler={formSubmitHandler}
                  onChangeHandler={inputChangeHandler}
                  closeModalHandler={closeModal}
                  contactUsStatusDetail={contactUsStatusDetail}
            />
      );
}

export default AdminContactUsEditStatusModalContainer;
