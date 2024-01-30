import { BaseSyntheticEvent } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { Modal, ModalActionButtons, ModalFooter, ModalSectionHeader } from "@/shared/modal";
import { IAppliedCallForPaperEditForm } from "@/admin/model/appliedHistory/appliedHistoryModel";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { REGEX } from "@/helper/regex";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import RichTextEditor from "@/shared/input/RichTextEditor";
import MultipleSecondaryInput from "@/shared/input/MultipleSecondaryInput";

interface IAppliedCallForPaperEditModal {
      callForPaperEditForm: UseFormReturn<IAppliedCallForPaperEditForm>;
      formResetHandler: () => void;
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
      closeAppliedCallForPaperEditForm: () => void;
}

function AppliedCallForPaperEditModal({
      callForPaperEditForm: {
            control,
            register,
            formState: { errors },
      },
      formResetHandler,
      formSubmitHandler,
      closeAppliedCallForPaperEditForm,
}: IAppliedCallForPaperEditModal) {
      return (
            <Modal
                  title="Edit Applied Speaker Detail"
                  size="w-full lg:!max-w-[76rem]"
                  closeHandler={closeAppliedCallForPaperEditForm}
            >
                  <form className="flex flex-col gap-12 w-full" onSubmit={formSubmitHandler}>
                        <div
                              className="flex flex-col gap-20 justify-center w-full
                                    [&>section]:flex [&>section]:flex-col  [&>section]:gap-10
                                    [&>section>span]:grid [&>section>span]:md:grid-cols-2 [&>section>span]:gap-x-10  [&>section>span]:gap-y-12
                              "
                        >
                              <section>
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

                                          <div className="sm:col-span-2">
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
                                                                  placeHolder="Write your biography"
                                                                  errorMessage={fieldState.error?.message}
                                                            />
                                                      )}
                                                />
                                          </div>
                                    </span>
                              </section>

                              <section>
                                    <ModalSectionHeader title="Previous Experience" />

                                    <span>
                                          <MultipleSecondaryInput
                                                control={control}
                                                name="previousExperience"
                                                label="Previous Experience"
                                                placeholder="Previous experience link"
                                                errorMessage={errors.previousExperience}
                                          />

                                          <MultipleSecondaryInput
                                                control={control}
                                                name="listOfConferences"
                                                label="List of Conference"
                                                placeholder="previous conference link"
                                                errorMessage={errors.listOfConferences}
                                          />
                                    </span>
                              </section>

                              <section>
                                    <ModalSectionHeader title="Participation Preferences" />

                                    <span>
                                          <span className="sm:col-span-2">
                                                <Controller
                                                      control={control}
                                                      name="specialAccommodationNeeds"
                                                      render={({ field }) => (
                                                            <RichTextEditor
                                                                  value={field.value}
                                                                  onChangeHandler={field.onChange}
                                                                  label="Special Accommodation Needs"
                                                                  placeHolder="Write about your  accommodation needs"
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
                        </div>

                        <ModalFooter>
                              <ModalActionButtons resetHandler={formResetHandler} />
                        </ModalFooter>
                  </form>
            </Modal>
      );
}

export default AppliedCallForPaperEditModal;
