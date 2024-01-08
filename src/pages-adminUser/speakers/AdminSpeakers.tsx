import Header from "@/shared-adminUser/header/Header";
import AdminAddOrEditSpeakerForm from "./components/AdminSpeakerAddOrEditForm";
import AdminSpeakerTableContainer from "./container/AdminSpeakerTableContainer";
import useModal from "@/hooks-adminUser/modal/useModal";
import { IModal } from "@/model-adminUser/modal/useModalModel";
import { FieldStatus } from "@/enum-adminUser/modal/modalEnum";

function AdminSpeakers() {
      const {
            modalState: applicationModalState,
            openEditModal: openApplicationEditModalState,
            closeModal: closeApplicationModal,
      } = useModal<IModal<string>>();

      return (
            <>
                  <Header />

                  <section className="w-full h-full flex flex-col items-center justify-center">
                        <AdminSpeakerTableContainer openEditModal={openApplicationEditModalState} />
                  </section>

                  {[FieldStatus.Edit].includes(applicationModalState.modalStatus) && (
                        <AdminAddOrEditSpeakerForm
                              modalType="Edit"
                              closeModalHandler={closeApplicationModal}
                        />
                  )}
            </>
      );
}

export default AdminSpeakers;
