import Header from "@/admin/shared/header/Header";
import AdminUserActionBar from "./components/AdminUserActionBar";
import AdminUserViewModal from "./components/AdminUserViewModal";
import AdminUserTableContainer from "./container/AdminUserTableContainer";
import AdminUserAddModalContainer from "./container/AdminUserAddModalContainer";
import AdminUserPaginationContainer from "./container/AdminUserPaginationContainer";
import useModal from "@/admin/hooks/modal/useModal";
import { FieldStatus } from "@/admin/enum/modal/modalEnum";
import { IModal } from "@/admin/model/modal/useModalModel";
import { IUserViewOrEditModal } from "@/admin/model/user/userModel";

function AdminUser() {
      const { modalState, openAddModal, openEditModal, openViewModal, closeModal } =
            useModal<IModal<IUserViewOrEditModal>>();

      return (
            <>
                  <span className="flex justify-between items-end">
                        <Header />

                        <AdminUserActionBar addButtonHandler={openAddModal} />
                  </span>

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AdminUserTableContainer
                              openViewModal={openViewModal}
                              openEditModal={openEditModal}
                        />

                        <AdminUserPaginationContainer />
                  </section>

                  {[FieldStatus.View].includes(modalState.modalStatus) && modalState.modalData?.view && (
                        <AdminUserViewModal user={modalState.modalData.view} closeModalHandler={closeModal} />
                  )}

                  {[FieldStatus.Add].includes(modalState.modalStatus) && (
                        <AdminUserAddModalContainer closeModal={closeModal} />
                  )}
            </>
      );
}

export default AdminUser;
