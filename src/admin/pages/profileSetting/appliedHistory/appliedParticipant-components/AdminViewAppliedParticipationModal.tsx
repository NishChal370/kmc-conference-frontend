import { Modal, ModalSectionHeader, ModalText } from "@/shared/modal";
import { IAppliedParticipationSessionDetailedModel } from "@/admin/model/appliedHistory/appliedHistoryModel";

interface IAdminViewAppliedParticipationModal {
      participationDetail: IAppliedParticipationSessionDetailedModel;
      closeModalHandler: () => void;
}
function AdminViewAppliedParticipationModal({
      participationDetail,
      closeModalHandler,
}: IAdminViewAppliedParticipationModal) {
      return (
            <Modal
                  title="View Participation Detail"
                  size="w-full lg:!max-w-[56rem]"
                  closeHandler={closeModalHandler}
            >
                  <section className="flex flex-col gap-6 w-full">
                        <ModalSectionHeader title="Session Information" />

                        <article
                              className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                    sm:grid-cols-2 sm:px-2
                              "
                        >
                              <ModalText title="Session Title" data={participationDetail.title} />

                              <ModalText title="Session Location" data={participationDetail.location} />

                              <ModalText
                                    title="Session Time"
                                    data={participationDetail.startTime + " " + participationDetail.endTime}
                              />
                        </article>
                  </section>
            </Modal>
      );
}

export default AdminViewAppliedParticipationModal;
