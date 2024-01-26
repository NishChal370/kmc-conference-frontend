import Header from "@/admin/shared/header/Header";
import AdminCallForPaperTableContainer from "./container/AdminCallForPaperTableContainer";
import AdminCallForPaperViewModalContainer from "./container/AdminCallForPaperViewModalContainer";
import AdminCallForPaperPaginationContainer from "./container/AdminCallForPaperPaginationContainer";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import { IAdminCallForPaperViewModal } from "@/admin/model/callForPaper/callForPaperModel";

function AdminCallForPaper() {
      const [viewModal, openViewModal, closeViewModal] = useExtraModal<IAdminCallForPaperViewModal>();

      return (
            <>
                  <Header pageHeaderName="Call For Paper" />

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AdminCallForPaperTableContainer openViewModal={openViewModal} />

                        <AdminCallForPaperPaginationContainer />
                  </section>

                  {viewModal?.isOpen && viewModal.data && (
                        <AdminCallForPaperViewModalContainer
                              closeModalHandler={closeViewModal}
                              selectedCallForPaperId={viewModal.data.id}
                        />
                  )}
            </>
      );
}

export default AdminCallForPaper;
