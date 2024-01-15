import Header from "@/admin/shared/header/Header";
import AdminUserViewModal from "./components/AdminUserViewModal";
import AdminUserTableContainer from "./container/AdminUserTableContainer";
import AdminUserPaginationContainer from "./container/AdminUserPaginationContainer";
import useModal from "@/admin/hooks/modal/useModal";
import { FieldStatus } from "@/admin/enum/modal/modalEnum";
import { IModal } from "@/admin/model/modal/useModalModel";
import { IUserViewOrEditModal } from "@/admin/model/user/userModel";

function AdminUser() {
      const { modalState, openEditModal, openViewModal, closeModal } =
            useModal<IModal<IUserViewOrEditModal>>();

      return (
            <>
                  <Header />

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
            </>
      );
}

export default AdminUser;
