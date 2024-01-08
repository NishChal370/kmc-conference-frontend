import { Modal } from "@/shared/modal";
import ModalFooter from "@/shared/modal/ModalFooter";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";
import ModalActionButtons from "@/shared/modal/ModalActionButtons";
import Button from "@/shared/button/Button";

interface IAdminAddOrEditSpeakerForm {
      modalType?: "Add" | "Edit";
      closeModalHandler: () => void;
}

function AdminAddOrEditSpeakerForm({ modalType = "Add", closeModalHandler }: IAdminAddOrEditSpeakerForm) {
      return (
            <>
                  <Modal
                        title={`${modalType} Speaker Detail`}
                        size="w-[90%]"
                        closeHandler={closeModalHandler}
                  >
                        <form className="flex flex-col gap-12">
                              <div
                                    className="flex flex-col gap-20 justify-center w-full
                                          [&>section]:flex [&>section]:flex-col  [&>section]:gap-8
                                          [&>section>h5]:text-md [&>section>h5]:font-semibold [&>section>h5]:bg-primary/5 [&>section>h5]:py-2 [&>section>h5]:px-4 [&>section>h5]:rounded-sm
                                          [&>section>span]:grid [&>section>span]:sm:grid-cols-2 [&>section>span]:gap-x-10  [&>section>span]:gap-y-12
                                    "
                              >
                                    <section>
                                          <h5>Profile Information</h5>

                                          <figure
                                                className="flex flex-col items-center gap-5 border-b pb-2 px-4
                                                      sm:flex-row sm:items-end
                                                "
                                          >
                                                <img
                                                      className="w-32 h-32 object-cover"
                                                      src="http://localhost:5173/src/assets/image/speakers/balen-shah.jpg"
                                                      alt="speaker-img"
                                                />

                                                <aside className="flex flex-col justify-end gap-3">
                                                      <Button
                                                            title="Upload New Photo"
                                                            type="button"
                                                            onClickHandler={() => console.log("")}
                                                            extraClassName="!w-fit"
                                                      />
                                                      <p className="text-xs">
                                                            Allowed JPG, GIF or PNG. Max size of 800K
                                                      </p>
                                                </aside>
                                          </figure>
                                          <span>
                                                <SecondaryInput label="First Name" />
                                                <SecondaryInput label="Middle Name" />
                                                <SecondaryInput label="Last Name" />
                                                <SecondaryInput label="Phone" />
                                                <SecondaryInput label="Email" />
                                          </span>
                                    </section>
                                    <section>
                                          <h5>Professional Information</h5>
                                          <span>
                                                <SecondaryInput label="Title" />
                                                <SecondaryInput label="Affiliation" />
                                                <SecondaryInput label="Designation" />
                                                <SecondaryInput label="LinkedIn" />
                                                <SecondaryInput label="Twitter" />
                                                <SecondaryInput label="Personal website" />
                                          </span>
                                    </section>

                                    <section>
                                          <h5>Biographical Information</h5>
                                          <div className="sm:col-span-3">
                                                <span className="sm:col-span-3">
                                                      <RichTextEditor label="Add a Biography" />
                                                </span>
                                          </div>
                                    </section>

                                    <section>
                                          <h5>Professional Background</h5>
                                          <span>
                                                <SecondaryInput label="Expertise in Field" />
                                                <SecondaryInput label="Publications" />
                                                <SecondaryInput label="Previous Conference" />
                                                <SecondaryInput label="Previous Speaking Engagements" />
                                                <span className="sm:col-span-2">
                                                      <RichTextEditor label="Previous Experience" />
                                                </span>
                                          </span>
                                    </section>

                                    <section>
                                          <h5>Session Detail</h5>
                                          <span>
                                                <SecondaryInput label="Willing to travel" />
                                                <SecondaryInput label="Audio/View Requirement" />
                                                <SecondaryInput type="file" label="Accommodation Needs" />
                                          </span>
                                    </section>

                                    <section>
                                          <h5>Additional Information</h5>
                                          <span>
                                                <SecondaryInput type="file" label="Session Proposal" />
                                                <SecondaryInput type="file" label="Reference Contact" />
                                          </span>
                                    </section>
                              </div>

                              <ModalFooter>
                                    <ModalActionButtons />
                              </ModalFooter>
                        </form>
                  </Modal>
            </>
      );
}

export default AdminAddOrEditSpeakerForm;
