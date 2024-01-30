import { BaseSyntheticEvent } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import PhoneInput from "@/shared/input/PhoneInput";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { Modal, ModalActionButtons, ModalFooter, ModalSectionHeader } from "@/shared/modal";
import { IAppliedParticipationEditForm } from "@/admin/model/appliedHistory/appliedHistoryModel";
import { REGEX } from "@/helper/regex";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";

interface IAppliedParticipationEditModal {
      participationEditForm: UseFormReturn<IAppliedParticipationEditForm>;
      formResetHandler: () => void;
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
      closeAppliedParticipationEditForm: () => void;
}

function AppliedParticipationEditModal({
      participationEditForm: {
            control,
            register,
            formState: { errors },
      },
      formResetHandler,
      formSubmitHandler,
      closeAppliedParticipationEditForm,
}: IAppliedParticipationEditModal) {
      return (
            <Modal
                  title="Edit Applied Participation Detail"
                  size="w-full lg:!max-w-[76rem]"
                  closeHandler={closeAppliedParticipationEditForm}
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

                                          <div className="sm:col-span-2">
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
                                    </span>
                              </section>

                              <section>
                                    <ModalSectionHeader title="Contact Information" />

                                    <span>
                                          <SecondaryInput
                                                isRequired
                                                label="Address"
                                                errorMessage={errors.address?.message}
                                          >
                                                {register("address", {
                                                      required: {
                                                            value: true,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                })}
                                          </SecondaryInput>

                                          <SecondaryInput
                                                isRequired
                                                label="City"
                                                errorMessage={errors.city?.message}
                                          >
                                                {register("city", {
                                                      required: {
                                                            value: true,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                })}
                                          </SecondaryInput>

                                          <SecondaryInput
                                                isRequired
                                                label="State"
                                                errorMessage={errors.state?.message}
                                          >
                                                {register("state", {
                                                      required: {
                                                            value: true,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                })}
                                          </SecondaryInput>

                                          <SecondaryInput
                                                isRequired
                                                label="Country"
                                                errorMessage={errors.country?.message}
                                          >
                                                {register("country", {
                                                      required: {
                                                            value: true,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                })}
                                          </SecondaryInput>

                                          <SecondaryInput
                                                isRequired
                                                label="Postal Code"
                                                errorMessage={errors.postalCode?.message}
                                          >
                                                {register("postalCode", {
                                                      required: {
                                                            value: true,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                })}
                                          </SecondaryInput>
                                    </span>
                              </section>

                              <section>
                                    <ModalSectionHeader title="Emergency Contact Information" />

                                    <span>
                                          <SecondaryInput
                                                isRequired
                                                label="Emergency Contact Name"
                                                errorMessage={errors.emergencyContactName?.message}
                                          >
                                                {register("emergencyContactName", {
                                                      required: {
                                                            value: true,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                })}
                                          </SecondaryInput>

                                          <PhoneInput
                                                isRequired
                                                control={control}
                                                variant="secondary"
                                                label="Emergency Contact Number"
                                                name="emergencyContactNumber"
                                          />

                                          <SecondaryInput
                                                isRequired
                                                label="Emergency Contact Relation"
                                                errorMessage={
                                                      errors.relationshipWithEmergencyContact?.message
                                                }
                                          >
                                                {register("relationshipWithEmergencyContact", {
                                                      required: {
                                                            value: true,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                })}
                                          </SecondaryInput>
                                    </span>
                              </section>

                              <section>
                                    <ModalSectionHeader title="Session Specifics Information" />

                                    <span>
                                          <SecondaryInput
                                                isRequired
                                                label="Registration Type"
                                                errorMessage={errors.registrationType?.message}
                                          >
                                                {register("registrationType", {
                                                      required: {
                                                            value: true,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                })}
                                          </SecondaryInput>

                                          <SecondaryInput
                                                isRequired
                                                label="Track Preferences"
                                                errorMessage={errors.trackPreferences?.message}
                                          >
                                                {register("trackPreferences", {
                                                      required: {
                                                            value: true,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                })}
                                          </SecondaryInput>

                                          <SecondaryInput
                                                label="Special Requirements"
                                                errorMessage={errors.specialRequirements?.message}
                                          >
                                                {register("specialRequirements")}
                                          </SecondaryInput>
                                    </span>
                              </section>

                              <section>
                                    <ModalSectionHeader title="Accommodation and Travel" />

                                    <span>
                                          <SecondaryInput
                                                isRequired
                                                type="date"
                                                label="Arrival Date"
                                                errorMessage={errors.arrivalDate?.message}
                                          >
                                                {register("arrivalDate", {
                                                      required: {
                                                            value: true,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                })}
                                          </SecondaryInput>

                                          <SecondaryInput
                                                isRequired
                                                type="date"
                                                label="Departure Date"
                                                errorMessage={errors.departureDate?.message}
                                          >
                                                {register("departureDate", {
                                                      required: {
                                                            value: true,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                })}
                                          </SecondaryInput>

                                          <SecondaryInput
                                                label="Transportation mode"
                                                errorMessage={errors.modeOfTransportation?.message}
                                          >
                                                {register("modeOfTransportation")}
                                          </SecondaryInput>

                                          <br className="hidden md:flex" />

                                          <SecondaryInput
                                                label="Hotel Preference"
                                                errorMessage={errors.hotelPreferences?.message}
                                          >
                                                {register("hotelPreferences")}
                                          </SecondaryInput>

                                          <SecondaryInput
                                                label="Room Preference"
                                                errorMessage={errors.roommatePreferences?.message}
                                          >
                                                {register("roommatePreferences")}
                                          </SecondaryInput>
                                    </span>
                              </section>

                              <section>
                                    <ModalSectionHeader title="Additional Information" />
                                    <span>
                                          <SecondaryInput
                                                isRequired
                                                label="conference Discovery Source"
                                                errorMessage={errors.conferenceDiscoverySource?.message}
                                          >
                                                {register("conferenceDiscoverySource", {
                                                      required: {
                                                            value: true,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                })}
                                          </SecondaryInput>

                                          <SecondaryInput
                                                label="Expectation/Goals"
                                                errorMessage={errors.expectationsGoals?.message}
                                          >
                                                {register("expectationsGoals")}
                                          </SecondaryInput>
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

export default AppliedParticipationEditModal;
