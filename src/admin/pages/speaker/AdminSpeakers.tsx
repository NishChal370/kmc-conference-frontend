import Header from "@/admin/shared/header/Header";
import AdminSpeakerTableContainer from "./container/AdminSpeakerTableContainer";
import AdminSpeakerEditFormContainer from "./container/AdminSpeakerEditFormContainer";
import AdminSpeakerViewModalContainer from "./container/AdminSpeakerViewModalContainer";
import AdminSpeakerPaginationContainer from "./container/AdminSpeakerPaginationContainer";
import AdminSpeakerStatusUpdateModalContainer from "./container/AdminSpeakerStatusUpdateModalContainer";
import useModal from "@/admin/hooks/modal/useModal";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import {
      IAdminSpeakerViewOrEditModal,
      IAdminSpeakerStatusChangeModal,
} from "@/admin/model/speaker/speakerModel";
import { IModal } from "@/admin/model/modal/useModalModel";
import { FieldStatus } from "@/admin/enum/modal/modalEnum";

function AdminSpeakers() {
      const { modalState, openEditModal, openViewModal, closeModal } =
            useModal<IModal<IAdminSpeakerViewOrEditModal>>();

      const [statusChangeModal, openStatusChangeModal, closeStatusChangeModal] =
            useExtraModal<IAdminSpeakerStatusChangeModal>();

      return (
            <>
                  <Header />

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AdminSpeakerTableContainer
                              openStatusChangeModal={openStatusChangeModal}
                              openViewModal={openViewModal}
                              openEditModal={openEditModal}
                        />

                        <AdminSpeakerPaginationContainer />
                  </section>

                  {[FieldStatus.Edit].includes(modalState.modalStatus) && modalState.modalData?.edit?.id && (
                        <AdminSpeakerEditFormContainer
                              selectedSpeakerId={modalState.modalData?.edit?.id}
                              closeModalHandler={closeModal}
                        />
                  )}

                  {[FieldStatus.View].includes(modalState.modalStatus) && modalState.modalData?.view?.id && (
                        <AdminSpeakerViewModalContainer
                              selectedSpeakerId={modalState.modalData?.view?.id}
                              closeModalHandler={closeModal}
                        />
                  )}

                  {statusChangeModal?.isOpen && statusChangeModal?.data?.id && (
                        <AdminSpeakerStatusUpdateModalContainer
                              speakerStatusDetail={statusChangeModal.data}
                              closeModalHandler={closeStatusChangeModal}
                        />
                  )}
            </>
      );
}

export default AdminSpeakers;
