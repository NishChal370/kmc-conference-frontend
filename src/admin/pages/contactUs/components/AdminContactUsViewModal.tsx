import { IContactUsViewModal } from "@/admin/model/contactUs/contactUsModel";
import { ContactReplyStatus } from "@/enum/contactUs/contactUsEnum";
import { Modal, ModalSectionHeader, ModalText } from "@/shared/modal";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";

interface IAdminContactUsViewModal {
      closeModal: () => void;
      contactUs: IContactUsViewModal;
}
function AdminContactUsViewModal({ contactUs, closeModal }: IAdminContactUsViewModal) {
      return (
            <Modal title="View Contact us detail" size="w-full lg:!max-w-[56rem]" closeHandler={closeModal}>
                  <section className="flex flex-col gap-6 w-full">
                        <ModalSectionHeader title="Contact Us Detail" />

                        <article
                              className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                    sm:grid-cols-2 sm:px-2
                              "
                        >
                              <ModalText title="Full Name" data={contactUs.fullName} />

                              <ModalText title="Email" dataClassName="break-all" data={contactUs.email} />

                              <ModalText
                                    title="Requested Date"
                                    data={changeDateFormat(contactUs.requestedDate)}
                              />

                              <ModalText
                                    title="Reply Status"
                                    data={ContactReplyStatus[contactUs.replyStatus]}
                              />

                              <ModalText
                                    title="Subject"
                                    containerClassName="sm:col-span-2"
                                    data={contactUs.subject}
                              />

                              <ModalText
                                    containerClassName="sm:col-span-2 sm:flex-col"
                                    title="Message"
                                    data={contactUs.description}
                              />
                        </article>
                  </section>
            </Modal>
      );
}

export default AdminContactUsViewModal;
