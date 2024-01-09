import { BaseSyntheticEvent } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import PhoneInput from "@/shared/input/PhoneInput";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";
import ImageSelectInput from "@/shared/fileInput/ImageSelectInput";
import MultiplePhoneInput from "@/shared/input/MultiplePhoneInput";
import MultipleSecondaryInput from "@/shared/input/MultipleSecondaryInput";
import FileDragDropContainer from "@/shared/fileInput/FileDragDropContainer";
import { Modal, ModalSectionHeader, ModalFooter, ModalActionButtons } from "@/shared/modal";
import { REGEX } from "@/helper/regex";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { IAdminSpeakerEditForm } from "@/admin/model/speaker/adminSpeakerModel";

interface IAdminAddOrEditSpeakerForm {
      modalType?: "Add" | "Edit";
      closeModalHandler: () => void;
      formResetHandler: () => void;
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
      speakerEditForm: UseFormReturn<IAdminSpeakerEditForm>;
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
                        size="w-full md:w-[90%]"
                        closeHandler={closeModalHandler}
                  >
                        <form className="flex flex-col gap-12" onSubmit={formSubmitHandler}>
                              <div
                                    className="flex flex-col gap-20 justify-center w-full
                                          [&>section]:flex [&>section]:flex-col  [&>section]:gap-10
                                          [&>section>h5]:text-md [&>section>h5]:font-semibold [&>section>h5]:bg-primary/5 [&>section>h5]:text-primary [&>section>h5]:py-2 [&>section>h5]:px-4 [&>section>h5]:rounded-sm
                                          [&>section>span]:grid [&>section>span]:sm:grid-cols-2 [&>section>span]:gap-x-10  [&>section>span]:gap-y-12
                                    "
                              >
                                    <section>
                                          <ModalSectionHeader title="Profile Information" />

                                          <ImageSelectInput name="photo" control={control} />

                                          <span>
                                                <SecondaryInput
                                                      isRequired
                                                      label="First Name"
                                                      errorMessage={errors.firstName?.message}
                                                >
                                                      {register("firstName", {
                                                            required: {
                                                                  value: true,
                                                                  message: INPUT_ERROR_MESSAGE.empty,
                                                            },
                                                      })}
                                                </SecondaryInput>

                                                <SecondaryInput
                                                      label="Middle Name"
                                                      errorMessage={errors.middleName?.message}
                                                >
                                                      {register("middleName")}
                                                </SecondaryInput>

                                                <SecondaryInput
                                                      isRequired
                                                      label="Last Name"
                                                      errorMessage={errors.lastName?.message}
                                                >
                                                      {register("lastName", {
                                                            required: {
                                                                  value: true,
                                                                  message: INPUT_ERROR_MESSAGE.empty,
                                                            },
                                                      })}
                                                </SecondaryInput>

                                                <PhoneInput
                                                      isRequired
                                                      name="phone"
                                                      control={control}
                                                      variant="secondary"
                                                />

                                                <SecondaryInput
                                                      isRequired
                                                      label="Email"
                                                      errorMessage={errors.email?.message}
                                                >
                                                      {register("email", {
                                                            required: {
                                                                  value: true,
                                                                  message: INPUT_ERROR_MESSAGE.empty,
                                                            },
                                                      })}
                                                </SecondaryInput>
                                          </span>
                                    </section>
                                    <section>
                                          <ModalSectionHeader title="Professional Information" />

                                          <span>
                                                <SecondaryInput
                                                      isRequired
                                                      label="Title"
                                                      errorMessage={errors.title?.message}
                                                >
                                                      {register("title", {
                                                            required: {
                                                                  value: true,
                                                                  message: INPUT_ERROR_MESSAGE.empty,
                                                            },
                                                      })}
                                                </SecondaryInput>

                                                <SecondaryInput
                                                      isRequired
                                                      label="Affiliation"
                                                      errorMessage={errors.affiliation?.message}
                                                >
                                                      {register("affiliation", {
                                                            required: {
                                                                  value: true,
                                                                  message: INPUT_ERROR_MESSAGE.empty,
                                                            },
                                                      })}
                                                </SecondaryInput>

                                                <SecondaryInput
                                                      isRequired
                                                      label="Designation"
                                                      errorMessage={errors.jobTitle?.message}
                                                >
                                                      {register("jobTitle", {
                                                            required: {
                                                                  value: true,
                                                                  message: INPUT_ERROR_MESSAGE.empty,
                                                            },
                                                      })}
                                                </SecondaryInput>

                                                <SecondaryInput
                                                      isRequired
                                                      label="LinkedIn"
                                                      errorMessage={errors.linkedInProfile?.message}
                                                >
                                                      {register("linkedInProfile", {
                                                            required: {
                                                                  value: true,
                                                                  message: INPUT_ERROR_MESSAGE.empty,
                                                            },
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
                                                <SecondaryInput
                                                      label="Willing to travel"
                                                      errorMessage={errors.willingToTravel?.message}
                                                >
                                                      {register("willingToTravel")}
                                                </SecondaryInput>

                                                <SecondaryInput
                                                      label="Audio/View Requirement"
                                                      errorMessage={errors.avRequirements?.message}
                                                >
                                                      {register("avRequirements")}
                                                </SecondaryInput>

                                                <SecondaryInput
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
                                                            defaultValue={{ oldFiles: [], newFiles: [] }}
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
