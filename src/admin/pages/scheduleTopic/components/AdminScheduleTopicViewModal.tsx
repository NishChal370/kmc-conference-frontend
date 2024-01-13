import { Modal, ModalSanitizedText, ModalText } from "@/shared/modal";
import { IScheduleTopicModel } from "@/admin/model/scheduleTopic/scheduleTopicModel";

interface IAdminScheduleTopicViewModal {
      selectedTopicDetail: IScheduleTopicModel;
      closeModalHandler: () => void;
}
function AdminScheduleTopicViewModal({
      selectedTopicDetail,
      closeModalHandler,
}: IAdminScheduleTopicViewModal) {
      return (
            <Modal
                  title="View Theme Topic Detail"
                  size="w-full lg:!w-[60rem] lg:!max-w-[60rem]"
                  closeHandler={closeModalHandler}
            >
                  <main
                        className="mb-6 flex flex-col gap-9 tracking-wide
                              sm:px-2
                        "
                  >
                        <ModalText
                              containerClassName="!flex-col !items-start"
                              title="Title"
                              data={selectedTopicDetail.title}
                        />

                        <ModalSanitizedText
                              title="Description"
                              htmlContent={selectedTopicDetail.description}
                        />

                        <ModalSanitizedText
                              title="KMC Highlights"
                              htmlContent={selectedTopicDetail.kmcHighlights}
                        />

                        <ModalSanitizedText title="Key Note" htmlContent={selectedTopicDetail.keyNote} />

                        <ModalSanitizedText
                              title="International Cases"
                              htmlContent={selectedTopicDetail.internationalCases}
                        />
                        <ModalSanitizedText title="Workshop" htmlContent={selectedTopicDetail.workshop} />
                  </main>
            </Modal>
      );
}

export default AdminScheduleTopicViewModal;
