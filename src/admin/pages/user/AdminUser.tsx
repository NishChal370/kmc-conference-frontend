import Header from "@/admin/shared/header/Header";
import AdminUserActionBar from "./components/AdminUserActionBar";
import AdminUserViewModal from "./components/AdminUserViewModal";
import AdminUserTableContainer from "./container/AdminUserTableContainer";
import AdminUserAddModalContainer from "./container/AdminUserAddModalContainer";
import AdminUserPaginationContainer from "./container/AdminUserPaginationContainer";
import AdminUserRoleUpdateModalContainer from "./container/AdminUserRoleUpdateModalContainer";
import useModal from "@/admin/hooks/modal/useModal";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import RoleBasedAccess from "@/helper/RoleBasedAccess";
import { UserRole } from "@/enum/commonEnum";
import { FieldStatus } from "@/admin/enum/modal/modalEnum";
import { IModal } from "@/admin/model/modal/useModalModel";
import {
      IAdminUserRoleChangeModal,
      IAdminUserStatusChangeModal,
      IUserViewOrEditModal,
} from "@/admin/model/user/userModel";
import AdminUserStatusUpdateModalContainer from "./container/AdminUserStatusUpdateModalContainer";

function AdminUser() {
      const { modalState, openAddModal, openViewModal, closeModal } =
            useModal<IModal<IUserViewOrEditModal>>();

      const [roleChangeModal, openRoleChangeModal, closeRoleChangeModal] =
            useExtraModal<IAdminUserRoleChangeModal>();

      const [statusChangeModal, openStatusChangeModal, closeStatusChangeModal] =
            useExtraModal<IAdminUserStatusChangeModal>();

      return (
            <>
                  <span className="flex justify-between items-end">
                        <Header />

                        <RoleBasedAccess notAllowedRoles={[UserRole.REVIEWER, UserRole.READ_ONLY]}>
                              <AdminUserActionBar addButtonHandler={openAddModal} />
                        </RoleBasedAccess>
                  </span>

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AdminUserTableContainer
                              openViewModal={openViewModal}
                              openEditRoleModal={openRoleChangeModal}
                              openEditStatusModal={openStatusChangeModal}
                        />

                        <AdminUserPaginationContainer />
                  </section>

                  {[FieldStatus.View].includes(modalState.modalStatus) && modalState.modalData?.view && (
                        <AdminUserViewModal user={modalState.modalData.view} closeModalHandler={closeModal} />
                  )}

                  {[FieldStatus.Add].includes(modalState.modalStatus) && (
                        <AdminUserAddModalContainer closeModal={closeModal} />
                  )}

                  {roleChangeModal?.isOpen && roleChangeModal?.data?.id && (
                        <AdminUserRoleUpdateModalContainer
                              userRoleDetail={roleChangeModal.data}
                              closeModalHandler={closeRoleChangeModal}
                        />
                  )}

                  {statusChangeModal?.isOpen && statusChangeModal?.data?.id && (
                        <AdminUserStatusUpdateModalContainer
                              userStatusDetail={statusChangeModal.data}
                              closeModalHandler={closeStatusChangeModal}
                        />
                  )}
            </>
      );
}

export default AdminUser;
