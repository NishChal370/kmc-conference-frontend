import useUserApi from "@/admin/hooks/user/useUserApi";
import { IAdminUserRoleChangeModal } from "@/admin/model/user/userModel";
import { UserRole } from "@/enum/commonEnum";
import { useState } from "react";
import AdminUserRoleUpdateModal from "../components/AdminUserRoleUpdateModal";

interface IAdminUserRoleUpdateModalContainer {
      userRoleDetail: IAdminUserRoleChangeModal;
      closeModalHandler: () => void;
}
function AdminUserRoleUpdateModalContainer({
      userRoleDetail,
      closeModalHandler,
}: IAdminUserRoleUpdateModalContainer) {
      const { updateUserRole } = useUserApi();

      const [userRole, setUserRole] = useState<UserRole>(userRoleDetail.userRole);

      const inputChangeHandler = (status: UserRole) => {
            setUserRole(status);
      };

      const formSubmitHandler = () => {
            if (!userRole) return;

            updateUserRole({ userId: userRoleDetail.id, newRole: userRole }).then(closeModalHandler);
      };

      return (
            <AdminUserRoleUpdateModal
                  value={userRole || userRoleDetail.userRole}
                  submitHandler={formSubmitHandler}
                  onChangeHandler={inputChangeHandler}
                  closeModalHandler={closeModalHandler}
                  userName={userRoleDetail.fullName}
                  currentRole={userRoleDetail.userRole}
            />
      );
}

export default AdminUserRoleUpdateModalContainer;
