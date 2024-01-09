import Header from "@/admin/shared/header/Header";
import AdminSpeakerTableContainer from "./container/AdminSpeakerTableContainer";
import AdminSpeakerEditFormContainer from "./container/AdminSpeakerEditFormContainer";
import useModal from "@/admin/hooks/modal/useModal";
import { IModal } from "@/admin/model/modal/useModalModel";
import { FieldStatus } from "@/admin/enum/modal/modalEnum";
import { IAdminSpeakerEditModal } from "@/admin/model/speaker/adminSpeakerModel";

function AdminSpeakers() {
      const {
            modalState: applicationModalState,
            openEditModal: openApplicationEditModalState,
            closeModal: closeApplicationModal,
      } = useModal<IModal<IAdminSpeakerEditModal>>();

      return (
            <>
                  <Header />

                  <section className="w-full h-full flex flex-col items-center justify-center">
                        <AdminSpeakerTableContainer openEditModal={openApplicationEditModalState} />
                  </section>

                  {[FieldStatus.Edit].includes(applicationModalState.modalStatus) &&
                        applicationModalState.modalData?.edit?.speakerId && (
                              <AdminSpeakerEditFormContainer
                                    selectedSpeakerId={applicationModalState.modalData?.edit?.speakerId}
                                    closeModalHandler={closeApplicationModal}
                              />
                        )}
            </>
      );
}

export default AdminSpeakers;
