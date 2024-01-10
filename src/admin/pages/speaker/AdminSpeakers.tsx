import { useState } from "react";
import Header from "@/admin/shared/header/Header";
import AdminSpeakerTableContainer from "./container/AdminSpeakerTableContainer";
import AdminSpeakerEditFormContainer from "./container/AdminSpeakerEditFormContainer";
import AdminSpeakerViewModalContainer from "./container/AdminSpeakerViewModalContainer";
import AdminSpeakerPaginationContainer from "./container/AdminSpeakerPaginationContainer";
import AdminSpeakerStatusUpdateModalContainer from "./container/AdminSpeakerStatusUpdateModalContainer";
import useModal from "@/admin/hooks/modal/useModal";
import {
      IAdminSpeakerEditModal,
      IAdminSpeakerStatusChangeModal,
} from "@/admin/model/speaker/adminSpeakerModel";
import { IModal } from "@/admin/model/modal/useModalModel";
import { FieldStatus } from "@/admin/enum/modal/modalEnum";

function AdminSpeakers() {
      const {
            modalState: applicationModalState,
            openEditModal: openApplicationEditModalState,
            openViewModal: openApplicationViewModalState,
            closeModal: closeApplicationModal,
      } = useModal<IModal<IAdminSpeakerEditModal>>();

      const [approvalStatusDetail, setSpeakerStatusDetail] = useState<IAdminSpeakerStatusChangeModal>();

      return (
            <>
                  <Header />

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AdminSpeakerTableContainer
                              openStatusChangeModal={(speakerDetail) => setSpeakerStatusDetail(speakerDetail)}
                              openViewModal={openApplicationViewModalState}
                              openEditModal={openApplicationEditModalState}
                        />

                        <AdminSpeakerPaginationContainer />
                  </section>

                  {[FieldStatus.Edit].includes(applicationModalState.modalStatus) &&
                        applicationModalState.modalData?.edit?.speakerId && (
                              <AdminSpeakerEditFormContainer
                                    selectedSpeakerId={applicationModalState.modalData?.edit?.speakerId}
                                    closeModalHandler={closeApplicationModal}
                              />
                        )}

                  {[FieldStatus.View].includes(applicationModalState.modalStatus) &&
                        applicationModalState.modalData?.view?.speakerId && (
                              <AdminSpeakerViewModalContainer
                                    selectedSpeakerId={applicationModalState.modalData?.view?.speakerId}
                                    closeModalHandler={closeApplicationModal}
                              />
                        )}

                  {approvalStatusDetail?.id && (
                        <AdminSpeakerStatusUpdateModalContainer
                              speakerStatusDetail={approvalStatusDetail}
                              closeModalHandler={() => setSpeakerStatusDetail(undefined)}
                        />
                  )}
            </>
      );
}

export default AdminSpeakers;
