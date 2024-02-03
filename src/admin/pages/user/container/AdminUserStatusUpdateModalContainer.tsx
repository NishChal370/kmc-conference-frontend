import { useState } from "react";
import AdminUserStatusUpdateModal from "../components/AdminUserStatusUpdateModal";
import useUserApi from "@/admin/hooks/user/useUserApi";
import { UserStatus } from "@/enum/user/userEnum";
import { IAdminUserStatusChangeModal } from "@/admin/model/user/userModel";

interface IAdminUserStatusUpdateModalContainer {
      userStatusDetail: IAdminUserStatusChangeModal;
      closeModalHandler: () => void;
}
function AdminUserStatusUpdateModalContainer({
      userStatusDetail,
      closeModalHandler,
}: IAdminUserStatusUpdateModalContainer) {
      const { updateUserStatus } = useUserApi();

      const [userStatus, setUserStatus] = useState<UserStatus>(userStatusDetail.userStatus);

      const inputChangeHandler = (status: UserStatus) => {
            setUserStatus(status);
      };

      const formSubmitHandler = () => {
            if (!userStatus.toString()) return;

            updateUserStatus({ userId: userStatusDetail.id, userStatus: userStatus }).then(closeModalHandler);
      };

      return (
            <AdminUserStatusUpdateModal
                  value={userStatus ?? userStatusDetail.userStatus}
                  submitHandler={formSubmitHandler}
                  onChangeHandler={inputChangeHandler}
                  closeModalHandler={closeModalHandler}
                  userName={userStatusDetail.fullName}
                  currentStatus={userStatusDetail.userStatus}
            />
      );
}

export default AdminUserStatusUpdateModalContainer;
