import Header from "@/admin/shared/header/Header";
import AdminCallForPaperTableContainer from "./container/AdminCallForPaperTableContainer";
import AdminCallForPaperPaginationContainer from "./container/AdminCallForPaperPaginationContainer";
import {
      IAdminCallForPaperStatusChangeModal,
      IAdminCallForPaperViewOrEditModal,
} from "@/admin/model/callForPaper/callForPaperModel";
import { IModal } from "@/admin/model/modal/useModalModel";
import useModal from "@/admin/hooks/modal/useModal";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import AdminCallForPaperStatusUpdateModalContainer from "./container/AdminCallForPaperStatusUpdateModalContainer";

function AdminCallForPaper() {
      const { modalState, openEditModal, openViewModal, closeModal } =
            useModal<IModal<IAdminCallForPaperViewOrEditModal>>();

      const [statusChangeModal, openStatusChangeModal, closeStatusChangeModal] =
            useExtraModal<IAdminCallForPaperStatusChangeModal>();

      return (
            <>
                  <Header pageHeaderName="Call For Paper" />

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AdminCallForPaperTableContainer
                              openStatusChangeModal={openStatusChangeModal}
                              openViewModal={openViewModal}
                        />

                        <AdminCallForPaperPaginationContainer />
                  </section>

                  {statusChangeModal?.isOpen && statusChangeModal?.data?.id && (
                        <AdminCallForPaperStatusUpdateModalContainer
                              callForPaperStatusDetail={statusChangeModal.data}
                              closeModalHandler={closeStatusChangeModal}
                        />
                  )}
            </>
      );
}

export default AdminCallForPaper;
