import Header from "@/admin/shared/header/Header";
import AdminSpeakerTableContainer from "./container/AdminSpeakerTableContainer";
import AdminSpeakerViewModalContainer from "./container/AdminSpeakerViewModalContainer";
import AdminSpeakerPaginationContainer from "./container/AdminSpeakerPaginationContainer";
import useModal from "@/admin/hooks/modal/useModal";
import { FieldStatus } from "@/admin/enum/modal/modalEnum";
import { IModal } from "@/admin/model/modal/useModalModel";
import { ISpeakerViewModal } from "@/admin/model/speaker/speakerModel";

function AdminSpeakers() {
      const { modalState, openViewModal, closeModal } = useModal<IModal<ISpeakerViewModal>>();

      return (
            <>
                  <Header />

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AdminSpeakerTableContainer openViewModal={openViewModal} />

                        <AdminSpeakerPaginationContainer />
                  </section>

                  {[FieldStatus.View].includes(modalState.modalStatus) &&
                        modalState.modalData?.view?.speakerId && (
                              <AdminSpeakerViewModalContainer
                                    selectedSpeakerId={modalState.modalData.view.speakerId}
                                    closeModalHandler={closeModal}
                              />
                        )}
            </>
      );
}

export default AdminSpeakers;
