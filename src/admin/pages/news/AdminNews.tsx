import Header from "@/admin/shared/header/Header";
import AdminNewsActionBar from "./components/AdminNewsActionBar";
import AdminNewsTableContainer from "./container/AdminNewsTableContainer";
import AdminNewsEditModalContainer from "./container/AdminNewsEditModalContainer";
import AdminNewsViewModalContainer from "./container/AdminNewsViewModalContainer";
import AdminNewsPaginationContainer from "./container/AdminNewsPaginationContainer";
import { UserRole } from "@/enum/commonEnum";
import useModal from "@/admin/hooks/modal/useModal";
import { FieldStatus } from "@/admin/enum/modal/modalEnum";
import { IModal } from "@/admin/model/modal/useModalModel";
import { INewsViewOrEditModal } from "@/admin/model/news/newsModel";
import RoleBasedAccess from "@/helper/RoleBasedAccess";
import AdminNewsAddModalContainer from "./container/AdminNewsAddModalContainer";

function AdminNews() {
      const { modalState, openEditModal, openViewModal, openAddModal, closeModal } =
            useModal<IModal<INewsViewOrEditModal>>();
      return (
            <>
                  <span className="flex justify-between items-end">
                        <Header pageHeaderName="News And Updates" />

                        <RoleBasedAccess notAllowedRoles={[UserRole.REVIEWER, UserRole.READ_ONLY]}>
                              <AdminNewsActionBar addButtonHandler={openAddModal} />
                        </RoleBasedAccess>
                  </span>

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AdminNewsTableContainer
                              openViewModal={openViewModal}
                              openEditModal={openEditModal}
                        />

                        <AdminNewsPaginationContainer />
                  </section>

                  {[FieldStatus.View].includes(modalState.modalStatus) &&
                        modalState.modalData?.view?.newsId && (
                              <AdminNewsViewModalContainer
                                    closeModal={closeModal}
                                    selectedNewsId={modalState.modalData.view.newsId}
                              />
                        )}

                  {[FieldStatus.Edit].includes(modalState.modalStatus) &&
                        modalState.modalData?.edit?.newsId && (
                              <AdminNewsEditModalContainer
                                    editingDetail={modalState.modalData.edit}
                                    closeNewsEditForm={closeModal}
                              />
                        )}

                  {[FieldStatus.Add].includes(modalState.modalStatus) && (
                        <AdminNewsAddModalContainer closeModal={closeModal} />
                  )}
            </>
      );
}

export default AdminNews;
