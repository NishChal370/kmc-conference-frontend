import { BaseSyntheticEvent } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import SecondaryInput from "@/shared/input/SecondaryInput";
import RichTextEditor from "@/shared/input/RichTextEditor";
import { Modal, ModalActionButtons, ModalFooter } from "@/shared/modal";
import { IDayThemeAddOrEditForm } from "@/admin/model/dayTheme/dayThemeModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import ConferenceDaySelectInput from "../../conferenceDay/containers/ConferenceDaySelectInput";

interface IAdminDayThemeAddOrEditForm {
      modalType?: "Add" | "Edit";
      closeModalHandler: () => void;
      formResetHandler: () => void;
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
      dayThemeAddOrEditForm: UseFormReturn<IDayThemeAddOrEditForm>;
}

function AdminDayThemeAddOrEditForm({
      modalType = "Add",
      closeModalHandler,
      formResetHandler,
      formSubmitHandler,
      dayThemeAddOrEditForm: {
            register,
            control,
            formState: { errors },
            watch,
      },
}: IAdminDayThemeAddOrEditForm) {
      // Watch values to compare
      const startTime = watch("plenaryStartTime");
      const endTime = watch("plenaryEndTime");

      return (
            <Modal
                  title={`${modalType} Theme Detail`}
                  size="w-full lg:!max-w-[50rem]"
                  closeHandler={closeModalHandler}
            >
                  <form className="flex flex-col gap-6 w-full" onSubmit={formSubmitHandler}>
                        <SecondaryInput isRequired label="Theme Title" errorMessage={errors.title?.message}>
                              {register("title", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        {modalType === "Edit" && (
                              <Controller
                                    name="day"
                                    control={control}
                                    rules={{
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    }}
                                    render={({ field: { onChange, value }, fieldState }) => (
                                          <ConferenceDaySelectInput
                                                isRequired
                                                selected={value}
                                                onChangeHandler={onChange}
                                                errorMessage={fieldState.error?.message}
                                          />
                                    )}
                              />
                        )}

                        <section className="flex flex-col gap-8 w-full mt-6">
                              <span className="flex w-full justify-between items-center gap-6">
                                    <hr className="border border-mute-1 w-full" />
                                    <p className="text-mute font-semibold text-center min-w-fit">
                                          Plenary Session
                                    </p>
                                    <hr className="border border-mute-1 w-full" />
                              </span>

                              <SecondaryInput
                                    isRequired
                                    label="Plenary Title"
                                    errorMessage={errors.plenaryTitle?.message}
                              >
                                    {register("plenaryTitle", {
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    })}
                              </SecondaryInput>

                              <span className="w-full flex items-center justify-between gap-5">
                                    <SecondaryInput
                                          isRequired
                                          type="time"
                                          label="Start Time"
                                          containerClassName="w-full"
                                          errorMessage={errors.plenaryStartTime?.message}
                                    >
                                          {register("plenaryStartTime", {
                                                required: {
                                                      value: true,
                                                      message: INPUT_ERROR_MESSAGE.empty,
                                                },
                                                validate: (value) => {
                                                      return (
                                                            !value ||
                                                            !endTime ||
                                                            value < endTime ||
                                                            INPUT_ERROR_MESSAGE.invalidStartTime
                                                      );
                                                },
                                          })}
                                    </SecondaryInput>

                                    <SecondaryInput
                                          isRequired
                                          type="time"
                                          label="End Time"
                                          containerClassName="w-full"
                                          errorMessage={errors.plenaryEndTime?.message}
                                    >
                                          {register("plenaryEndTime", {
                                                required: {
                                                      value: true,
                                                      message: INPUT_ERROR_MESSAGE.empty,
                                                },
                                                validate: (value) => {
                                                      return (
                                                            !value ||
                                                            !startTime ||
                                                            value > startTime ||
                                                            INPUT_ERROR_MESSAGE.invalidEndTime
                                                      );
                                                },
                                          })}
                                    </SecondaryInput>
                              </span>

                              <Controller
                                    control={control}
                                    name="plenaryDescription"
                                    rules={{
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    }}
                                    render={({ field, fieldState }) => (
                                          <RichTextEditor
                                                isRequired
                                                label="Description"
                                                value={field.value}
                                                onChangeHandler={field.onChange}
                                                placeHolder="Write Plenary description"
                                                errorMessage={fieldState.error?.message}
                                          />
                                    )}
                              />
                        </section>

                        <ModalFooter>
                              <ModalActionButtons resetHandler={formResetHandler} />
                        </ModalFooter>
                  </form>
            </Modal>
      );
}

export default AdminDayThemeAddOrEditForm;
