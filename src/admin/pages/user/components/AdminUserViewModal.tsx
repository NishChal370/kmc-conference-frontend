import { IUserModel } from "@/admin/model/user/userModel";
import { Modal, ModalSectionHeader, ModalText } from "@/shared/modal";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";

interface IAdminUserViewModal {
      user: IUserModel;
      closeModalHandler: () => void;
}
function AdminUserViewModal({ user, closeModalHandler }: IAdminUserViewModal) {
      return (
            <Modal title="View User Detail" size="w-full sm:!max-w-[60rem]" closeHandler={closeModalHandler}>
                  <span
                        className="mb-6 w-full flex flex-col gap-y-10 tracking-wide
                              sm:px-2
                        "
                  >
                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Personal Information" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText title="Title Name" data={user.title} />

                                    <ModalText title="Full Name" data={user.fullName} />

                                    <ModalText
                                          title="Date of Birth"
                                          data={changeDateFormat(user.dateOfBirth)}
                                    />

                                    <ModalText title="Gender" data={user.gender} />

                                    <ModalText title="Email" data={user.email} />

                                    <ModalText title="Phone Number" data={user.phoneNumber} />

                                    <ModalText title="Job Title" data={user.jobTitle} />

                                    <ModalText title="Affiliation" data={user.affiliation} />

                                    <ModalText title="User Role" data={user.userRole} />
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Conference Participation" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText title="As speaker" data={user.isSpeaker ? "YES" : "NO"} />

                                    <ModalText
                                          title="As call for paper"
                                          data={user.isCallForPaper ? "YES" : "NO"}
                                    />

                                    <ModalText
                                          title="As participant"
                                          data={user.isParticipant ? "YES" : "NO"}
                                    />
                              </article>
                        </section>
                  </span>
            </Modal>
      );
}

export default AdminUserViewModal;
