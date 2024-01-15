import { BaseSyntheticEvent } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import ToggleButton from "@/shared/button/ToggleButton";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";
import FileDragDropContainer from "@/shared/fileInput/FileDragDropContainer";
import MultipleSecondaryInput from "@/shared/input/MultipleSecondaryInput";
import { Modal, ModalActionButtons, ModalFooter, ModalSectionHeader } from "@/shared/modal";
import { IAdminCallForPaperForm } from "@/admin/model/callForPaper/callForPaperModel";
import { REGEX } from "@/helper/regex";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";

interface IAdminCallForPaperAddOrEditForm {
      modalType?: "Add" | "Edit";
      closeModalHandler: () => void;
      formResetHandler: () => void;
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
      callForPaperAddOrEditForm: UseFormReturn<IAdminCallForPaperForm>;
}

function AdminCallForPaperAddOrEditForm({
      modalType = "Add",
      closeModalHandler,
      formResetHandler,
      formSubmitHandler,
      callForPaperAddOrEditForm: {
            register,
            control,
            formState: { errors },
      },
}: IAdminCallForPaperAddOrEditForm) {
      return (
            <Modal
                  title={`${modalType} Call For Paper Detail`}
                  size="w-full lg:!max-w-[76rem]"
                  closeHandler={closeModalHandler}
            >
                  <form
                        className="flex flex-col gap-12 w-full
                              [&>section]:flex [&>section]:flex-col  [&>section]:gap-10
                              [&>section>span]:grid [&>section>span]:sm:grid-cols-2 [&>section>span]:gap-x-10  [&>section>span]:gap-y-12
                        "
                        onSubmit={formSubmitHandler}
                  >
                        <section>
                              <ModalSectionHeader title="Personal and Professional Information" />

                              <span>
                                    <SecondaryInput label="LinkedIn">
                                          {register("linkedInProfile", {
                                                pattern: {
                                                      value: REGEX.URL,
                                                      message: INPUT_ERROR_MESSAGE.invalidUrl,
                                                },
                                          })}
                                    </SecondaryInput>

                                    <SecondaryInput label="Twitter Handler">
                                          {register("twitterHandler", {
                                                pattern: {
                                                      value: REGEX.URL,
                                                      message: INPUT_ERROR_MESSAGE.invalidUrl,
                                                },
                                          })}
                                    </SecondaryInput>

                                    <SecondaryInput label="Professional Website">
                                          {register("professionalWebsite", {
                                                pattern: {
                                                      value: REGEX.URL,
                                                      message: INPUT_ERROR_MESSAGE.invalidUrl,
                                                },
                                          })}
                                    </SecondaryInput>

                                    <Controller
                                          name="briefBiography"
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
                                                      containerClassName="sm:col-span-2"
                                                      placeHolder="Write your biography"
                                                      errorMessage={fieldState.error?.message}
                                                />
                                          )}
                                    />
                              </span>
                        </section>

                        <section>
                              <ModalSectionHeader title="Paper and Session Proposals" />

                              <span>
                                    <SecondaryInput isRequired label="Proposed Paper/Session Title">
                                          {register("proposedPaperSessionTitle", {
                                                required: {
                                                      value: true,
                                                      message: INPUT_ERROR_MESSAGE.empty,
                                                },
                                          })}
                                    </SecondaryInput>

                                    <MultipleSecondaryInput
                                          control={control}
                                          name="keywords"
                                          label="Keywords"
                                          placeholder="Keywords"
                                          errorMessage={errors.keywords}
                                    />

                                    <SecondaryInput isRequired label="Primary Field Category">
                                          {register("primaryFieldCategory", {
                                                required: {
                                                      value: true,
                                                      message: INPUT_ERROR_MESSAGE.empty,
                                                },
                                          })}
                                    </SecondaryInput>

                                    <SecondaryInput label="Research Methodology">
                                          {register("researchMethodology")}
                                    </SecondaryInput>

                                    <Controller
                                          name="abstractSummary"
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
                                                      label="Abstract Summary"
                                                      value={field.value}
                                                      onChangeHandler={field.onChange}
                                                      containerClassName="sm:col-span-2"
                                                      placeHolder="Write abstract summary"
                                                      errorMessage={fieldState.error?.message}
                                                />
                                          )}
                                    />
                              </span>
                        </section>

                        <section>
                              <ModalSectionHeader title="Presentation and Paper Details" />

                              <span>
                                    <MultipleSecondaryInput
                                          control={control}
                                          name="keyObjectives"
                                          label="Key Objectives"
                                          placeholder="Key Objectives"
                                    />

                                    <MultipleSecondaryInput
                                          control={control}
                                          name="contributions"
                                          label="Contributions"
                                          placeholder="Contributions"
                                    />

                                    <SecondaryInput label="Significance/Relevance">
                                          {register("significanceRelevance")}
                                    </SecondaryInput>

                                    <SecondaryInput label="Preferred Presentation Format">
                                          {register("preferredPresentationFormat", {
                                                required: {
                                                      value: true,
                                                      message: INPUT_ERROR_MESSAGE.empty,
                                                },
                                          })}
                                    </SecondaryInput>

                                    <SecondaryInput label="Audio Visual Requirements">
                                          {register("audioVisualRequirements")}
                                    </SecondaryInput>

                                    <span className="sm:col-span-2">
                                          <Controller
                                                name="fullPaperORExtendedAbstract"
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
                              <ModalSectionHeader title="Previous Experience and References" />

                              <span>
                                    <MultipleSecondaryInput
                                          control={control}
                                          name="previousExperience"
                                          label="Previous Experience"
                                          placeholder="Previous Experience"
                                    />

                                    <MultipleSecondaryInput
                                          control={control}
                                          name="listOfConferences"
                                          label="List of Conferences"
                                          placeholder="List of Conferences"
                                          validation={{
                                                pattern: {
                                                      value: REGEX.URL,
                                                      message: INPUT_ERROR_MESSAGE.invalidUrl,
                                                },
                                          }}
                                    />

                                    <MultipleSecondaryInput
                                          control={control}
                                          name="referencesOrCitations"
                                          label="References or Citations"
                                          placeholder="References or Citations"
                                    />
                              </span>
                        </section>

                        <section>
                              <ModalSectionHeader title="Participation Preferences" />

                              <span>
                                    <Controller
                                          name="willParticipateInPanel"
                                          control={control}
                                          render={({ field }) => (
                                                <ToggleButton
                                                      label="Willing Participate In Panel"
                                                      value={field.value}
                                                      onChangeHandler={field.onChange}
                                                      buttonName={{
                                                            one: "Yes, I will",
                                                            two: "No, I can not",
                                                      }}
                                                />
                                          )}
                                    />

                                    <Controller
                                          name="willParticipateInWorkshop"
                                          control={control}
                                          render={({ field }) => (
                                                <ToggleButton
                                                      label="Will Participate in Workshop"
                                                      value={field.value}
                                                      onChangeHandler={field.onChange}
                                                      buttonName={{
                                                            one: "Yes, I will",
                                                            two: "No, I can not",
                                                      }}
                                                />
                                          )}
                                    />

                                    <span className="sm:col-span-2">
                                          <Controller
                                                control={control}
                                                name="specialAccommodationNeeds"
                                                render={({ field }) => (
                                                      <RichTextEditor
                                                            value={field.value}
                                                            onChangeHandler={field.onChange}
                                                            label="Special Accommodation Needs"
                                                            placeHolder="Write about your accommodation needs"
                                                      />
                                                )}
                                          />
                                    </span>

                                    <span className="sm:col-span-2">
                                          <Controller
                                                control={control}
                                                name="additionalRequirements"
                                                render={({ field }) => (
                                                      <RichTextEditor
                                                            value={field.value}
                                                            onChangeHandler={field.onChange}
                                                            label="Additional Requirements"
                                                            placeHolder="Write about your  additional requirements"
                                                      />
                                                )}
                                          />
                                    </span>
                              </span>
                        </section>

                        <ModalFooter>
                              <ModalActionButtons resetHandler={formResetHandler} />
                        </ModalFooter>
                  </form>
            </Modal>
      );
}

export default AdminCallForPaperAddOrEditForm;
