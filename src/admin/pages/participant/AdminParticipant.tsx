import Header from "@/admin/shared/header/Header";
import AdminParticipantTableContainer from "./container/AdminParticipantTableContainer";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import { IAdminParticipantViewModal } from "@/admin/model/participant/participantModel";
import AdminParticipantPaginationContainer from "./container/AdminParticipantPaginationContainer";
import AdminParticipantViewModalContainer from "./container/AdminParticipantViewModalContainer";

function AdminParticipant() {
      const [viewModal, openViewModal, closeViewModal] = useExtraModal<IAdminParticipantViewModal>();

      return (
            <>
                  <Header />

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AdminParticipantTableContainer openViewModal={openViewModal} />

                        <AdminParticipantPaginationContainer />
                  </section>

                  {viewModal?.isOpen && viewModal.data && (
                        <AdminParticipantViewModalContainer
                              closeModalHandler={closeViewModal}
                              selectedParticipantId={viewModal.data.id}
                        />
                  )}
            </>
      );
}

export default AdminParticipant;
