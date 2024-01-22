import { BaseSyntheticEvent } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import ToggleButton from "@/shared/button/ToggleButton";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";
import ImageSelectInput from "@/shared/fileInput/ImageSelectInput";
import MultiplePhoneInput from "@/shared/input/MultiplePhoneInput";
import MultipleSecondaryInput from "@/shared/input/MultipleSecondaryInput";
import FileDragDropContainer from "@/shared/fileInput/FileDragDropContainer";
import { Modal, ModalSectionHeader, ModalFooter, ModalActionButtons } from "@/shared/modal";
import { REGEX } from "@/helper/regex";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { IAdminSpeakerForm } from "@/admin/model/speaker/adminSpeakerModel";

interface IAdminAddOrEditSpeakerForm {
      modalType?: "Add" | "Edit";
      closeModalHandler: () => void;
      formResetHandler: () => void;
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
      speakerEditForm: UseFormReturn<IAdminSpeakerForm>;
}

function AdminAddOrEditSpeakerForm({
      modalType = "Add",
      closeModalHandler,
      formResetHandler,
      formSubmitHandler,
      speakerEditForm: {
            register,
            control,
            formState: { errors },
      },
}: IAdminAddOrEditSpeakerForm) {
      return (
            <>
                  <Modal
                        title={`${modalType} Speaker Detail`}
                        size="w-full lg:!max-w-[76rem]"
                        closeHandler={closeModalHandler}
                  >
                        <form className="flex flex-col gap-12 w-full" onSubmit={formSubmitHandler}>
                              <div
                                    className="flex flex-col gap-20 justify-center w-full
                                          [&>section]:flex [&>section]:flex-col  [&>section]:gap-10
                                          [&>section>span]:grid [&>section>span]:sm:grid-cols-2 [&>section>span]:gap-x-10  [&>section>span]:gap-y-12
                                    "
                              >
                                    <section>
                                          <ImageSelectInput name="photo" control={control} />

                                          <ModalSectionHeader title="Social Profile" />

                                          <span>
                                                <SecondaryInput
                                                      label="LinkedIn"
                                                      errorMessage={errors.linkedInProfile?.message}
                                                >
                                                      {register("linkedInProfile", {
                                                            pattern: {
                                                                  value: REGEX.URL,
                                                                  message: INPUT_ERROR_MESSAGE.invalidUrl,
                                                            },
                                                      })}
                                                </SecondaryInput>

                                                <SecondaryInput
                                                      label="Twitter"
                                                      errorMessage={errors.twitterHandle?.message}
                                                >
                                                      {register("twitterHandle", {
                                                            pattern: {
                                                                  value: REGEX.URL,
                                                                  message: INPUT_ERROR_MESSAGE.invalidUrl,
                                                            },
                                                      })}
                                                </SecondaryInput>

                                                <SecondaryInput
                                                      label="Personal website"
                                                      errorMessage={errors.professionalWebsite?.message}
                                                >
                                                      {register("professionalWebsite", {
                                                            pattern: {
                                                                  value: REGEX.URL,
                                                                  message: INPUT_ERROR_MESSAGE.invalidUrl,
                                                            },
                                                      })}
                                                </SecondaryInput>
                                          </span>
                                    </section>

                                    <section>
                                          <ModalSectionHeader title="Biographical Information" />

                                          <div className="sm:col-span-3">
                                                <Controller
                                                      name="bio"
                                                      control={control}
                                                      rules={{
                                                            required: {
                                                                  value: true,
                                                                  message: INPUT_ERROR_MESSAGE.empty,
                                                            },
                                                      }}
                                                      render={({ field, fieldState }) => (
                                                            <RichTextEditor
                                                                  isRequired
                                                                  label="Add a Biography"
                                                                  value={field.value}
                                                                  onChangeHandler={field.onChange}
                                                                  placeHolder="Write your biography"
                                                                  errorMessage={fieldState.error?.message}
                                                            />
                                                      )}
                                                />
                                          </div>
                                    </section>

                                    <section>
                                          <ModalSectionHeader title="Professional Background" />

                                          <span>
                                                <section className="flex flex-col gap-10">
                                                      <SecondaryInput
                                                            isRequired
                                                            label="Expertise in Field"
                                                            errorMessage={errors.expertiseInField?.message}
                                                      >
                                                            {register("expertiseInField", {
                                                                  required: {
                                                                        value: true,
                                                                        message: INPUT_ERROR_MESSAGE.empty,
                                                                  },
                                                            })}
                                                      </SecondaryInput>

                                                      <MultipleSecondaryInput
                                                            control={control}
                                                            name="previousSpeakingEngagements"
                                                            label="Previous Speaking Engagements"
                                                            placeholder="Previous speaking engagement link"
                                                            errorMessage={errors.previousSpeakingEngagements}
                                                            validation={{
                                                                  pattern: {
                                                                        value: REGEX.URL,
                                                                        message: INPUT_ERROR_MESSAGE.invalidUrl,
                                                                  },
                                                            }}
                                                      />
                                                </section>

                                                <MultipleSecondaryInput
                                                      control={control}
                                                      name="publications"
                                                      label="Publications"
                                                      placeholder="Publication link"
                                                      errorMessage={errors.publications}
                                                      validation={{
                                                            pattern: {
                                                                  value: REGEX.URL,
                                                                  message: INPUT_ERROR_MESSAGE.invalidUrl,
                                                            },
                                                      }}
                                                />

                                                <Controller
                                                      control={control}
                                                      name="previousExperience"
                                                      render={({ field }) => (
                                                            <RichTextEditor
                                                                  label="Previous Experience"
                                                                  value={field.value}
                                                                  onChangeHandler={field.onChange}
                                                                  placeHolder="Write about your previous experience"
                                                            />
                                                      )}
                                                />

                                                <Controller
                                                      control={control}
                                                      name="previousConferences"
                                                      render={({ field }) => (
                                                            <RichTextEditor
                                                                  label="Previous Conference"
                                                                  value={field.value}
                                                                  onChangeHandler={field.onChange}
                                                                  placeHolder="Write about your previous conference"
                                                            />
                                                      )}
                                                />
                                          </span>
                                    </section>

                                    <section>
                                          <ModalSectionHeader title="Session Detail" />

                                          <span>
                                                <Controller
                                                      name="willingToTravel"
                                                      control={control}
                                                      render={({ field }) => (
                                                            <ToggleButton
                                                                  label="Willing to travel"
                                                                  value={field.value}
                                                                  onChangeHandler={field.onChange}
                                                                  buttonName={{
                                                                        one: "Yes, I will",
                                                                        two: "No, I can not",
                                                                  }}
                                                            />
                                                      )}
                                                />

                                                <SecondaryInput
                                                      label="Audio/View Requirement"
                                                      errorMessage={errors.avRequirements?.message}
                                                >
                                                      {register("avRequirements")}
                                                </SecondaryInput>

                                                <SecondaryInput
                                                      isRequired
                                                      type="number"
                                                      label="Preferred session length (in minutes)"
                                                      errorMessage={
                                                            errors.preferredSessionLengthMinutes?.message
                                                      }
                                                >
                                                      {register("preferredSessionLengthMinutes", {
                                                            required: {
                                                                  value: true,
                                                                  message: INPUT_ERROR_MESSAGE.empty,
                                                            },
                                                      })}
                                                </SecondaryInput>

                                                <span className="sm:col-span-2">
                                                      <Controller
                                                            control={control}
                                                            name="accommodationNeeds"
                                                            render={({ field }) => (
                                                                  <RichTextEditor
                                                                        value={field.value}
                                                                        onChangeHandler={field.onChange}
                                                                        label="Accommodation Needs"
                                                                        placeHolder="Write about your  accommodation needs"
                                                                  />
                                                            )}
                                                      />
                                                </span>

                                                <span className="sm:col-span-2">
                                                      <Controller
                                                            name="proposalFile"
                                                            control={control}
                                                            render={({ field }) => (
                                                                  <FileDragDropContainer
                                                                        label="Session Proposal"
                                                                        value={field.value}
                                                                        onChangeHandler={field.onChange}
                                                                  />
                                                            )}
                                                      />
                                                </span>
                                          </span>
                                    </section>

                                    <section>
                                          <ModalSectionHeader title="Additional Information" />

                                          <span>
                                                <MultiplePhoneInput
                                                      control={control}
                                                      label="Reference Contact"
                                                      name="referenceContacts"
                                                      errorMessage={errors.referenceContacts}
                                                />
                                          </span>
                                    </section>
                              </div>

                              <ModalFooter>
                                    <ModalActionButtons resetHandler={formResetHandler} />
                              </ModalFooter>
                        </form>
                  </Modal>
            </>
      );
}

export default AdminAddOrEditSpeakerForm;
