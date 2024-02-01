import { INewsDetailResponse } from "@/admin/model/news/newsModel";
import { Modal, ModalSanitizedText, ModalSectionHeader, ModalText } from "@/shared/modal";
import ServerImage from "@/shared/serverImage/ServerImage";
import convertBytesToMB from "@/utils/converter/convertBytesToMB";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";

interface IAdminNewsViewModal {
      closeModalHandler: () => void;
      newsDetail: INewsDetailResponse;
}
function AdminNewsViewModal({ newsDetail, closeModalHandler }: IAdminNewsViewModal) {
      return (
            <Modal
                  title="View News and Update Detail"
                  size="w-full lg:!max-w-[56rem]"
                  closeHandler={closeModalHandler}
            >
                  <span
                        className="mb-6 w-full flex flex-col gap-y-10 tracking-wide
                              sm:px-2
                        "
                  >
                        <section
                              className="flex flex-col justify-start items-start gap-6 w-full
                                    sm:flex-row
                              "
                        >
                              <ServerImage
                                    imageType="news"
                                    className="w-[8.5rem] h-[8.5rem] object-cover rounded-sm "
                                    image={newsDetail.bannerImage}
                                    alt="news-update-img"
                              />

                              <span className="flex flex-col gap-2 self-end w-full">
                                    <ModalText
                                          title="Image Name"
                                          data={
                                                newsDetail.bannerImage
                                                      ? atob(newsDetail.bannerImage.originalName)
                                                      : undefined
                                          }
                                    />
                                    <ModalText
                                          title="Size (in mb)"
                                          data={
                                                newsDetail.bannerImage
                                                      ? convertBytesToMB(newsDetail.bannerImage.sizeBytes)
                                                      : undefined
                                          }
                                    />
                              </span>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="News and Updates Detail" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText
                                          title="Created Date"
                                          data={changeDateFormat(newsDetail.createdDate)}
                                    />

                                    <ModalText title="Created By" data={newsDetail.createdBy} />

                                    <ModalText
                                          containerClassName="sm:col-span-2"
                                          title="Title"
                                          data={newsDetail.title}
                                    />

                                    <ModalSanitizedText
                                          containerClassName="sm:col-span-2"
                                          htmlContent={newsDetail.content}
                                          title="Content"
                                    />
                              </article>
                        </section>
                  </span>
            </Modal>
      );
}

export default AdminNewsViewModal;
