import Header from "@/admin/shared/header/Header";
import AdminContactUsTableContainer from "./container/AdminContactUsTableContainer";
import AdminContactUsPaginationContainer from "./container/AdminContactUsPaginationContainer";
import { IModalOption } from "@/admin/model/modal/useModalModel";
import useModal from "@/admin/hooks/modal/useModal";
import { IContactUsUpdateForm, IContactUsViewModal } from "@/admin/model/contactUs/contactUsModel";
import { FieldStatus } from "@/admin/enum/modal/modalEnum";
import AdminContactUsViewModal from "./components/AdminContactUsViewModal";
import AdminContactUsEditStatusModalContainer from "./container/AdminContactUsEditStatusModalContainer";

function AdminContactUs() {
      const { modalState, openEditModal, openViewModal, closeModal } =
            useModal<IModalOption<IContactUsViewModal, IContactUsUpdateForm>>();

      return (
            <>
                  <Header pageHeaderName="Contact us" />

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AdminContactUsTableContainer
                              openViewModal={openViewModal}
                              openEditStatusModal={openEditModal}
                        />

                        <AdminContactUsPaginationContainer />
                  </section>

                  {[FieldStatus.View].includes(modalState.modalStatus) && modalState.modalData?.view && (
                        <AdminContactUsViewModal
                              closeModal={closeModal}
                              contactUs={modalState.modalData.view}
                        />
                  )}

                  {[FieldStatus.Edit].includes(modalState.modalStatus) && modalState.modalData?.edit && (
                        <AdminContactUsEditStatusModalContainer
                              closeModal={closeModal}
                              contactUsStatusDetail={modalState.modalData.edit}
                        />
                  )}
            </>
      );
}

export default AdminContactUs;
