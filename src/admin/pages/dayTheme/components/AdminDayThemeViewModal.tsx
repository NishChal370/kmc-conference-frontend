import { IDayThemeModel } from "@/admin/model/dayTheme/dayThemeModel";
import { Modal, ModalSectionHeader, ModalSanitizedText, ModalText } from "@/shared/modal";

interface IAdminDayThemeViewModal {
      closeModalHandler: () => void;
      dayThemeDetail: IDayThemeModel;
}
function AdminDayThemeViewModal({ closeModalHandler, dayThemeDetail }: IAdminDayThemeViewModal) {
      return (
            <Modal
                  title="View Theme Detail"
                  size="w-full lg:!w-[60rem] lg:!max-w-[60rem]"
                  closeHandler={closeModalHandler}
            >
                  <main
                        className="mb-6 flex flex-col gap-9 tracking-wide
                              sm:px-2
                        "
                  >
                        <section className="flex flex-col gap-6">
                              <ModalSectionHeader title="Theme Detail" />

                              <article
                                    className="grid grid-cols-1 gap-4
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText title="Title" data={dayThemeDetail.title} />

                                    <ModalText title="Date" data={dayThemeDetail.day.date} />
                              </article>
                        </section>

                        <section className="flex flex-col gap-6">
                              <ModalSectionHeader title="Plenary Session" />

                              <article
                                    className="grid grid-cols-1 gap-4
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText
                                          title="Title"
                                          data={dayThemeDetail.plenarySession.title}
                                          containerClassName="col-span-2"
                                    />

                                    <span
                                          className="col-span-2 w-full flex flex-col gap-4
                                                sm:flex-row
                                          "
                                    >
                                          <ModalText
                                                containerClassName="w-full"
                                                title="Starting Time"
                                                data={dayThemeDetail.plenarySession.startTime}
                                          />

                                          <ModalText
                                                containerClassName="w-full"
                                                title="Endings Time"
                                                data={dayThemeDetail.plenarySession.endTime}
                                          />
                                    </span>

                                    <ModalSanitizedText
                                          title="Description"
                                          htmlContent={dayThemeDetail.plenarySession.description}
                                          containerClassName="col-span-2"
                                    />
                              </article>
                        </section>
                  </main>
            </Modal>
      );
}

export default AdminDayThemeViewModal;
