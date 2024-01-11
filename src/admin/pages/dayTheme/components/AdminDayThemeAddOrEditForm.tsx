import { BaseSyntheticEvent } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import SecondaryInput from "@/shared/input/SecondaryInput";
import RichTextEditor from "@/shared/input/RichTextEditor";
import { Modal, ModalActionButtons, ModalFooter } from "@/shared/modal";
import { IDayThemeAddOrEditForm } from "@/admin/model/dayTheme/dayThemeModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";

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
      },
}: IAdminDayThemeAddOrEditForm) {
      return (
            <Modal
                  title={`${modalType} Theme Detail`}
                  size="w-full lg:!max-w-[50rem]"
                  closeHandler={closeModalHandler}
            >
                  <form className="flex flex-col gap-6 w-full" onSubmit={formSubmitHandler}>
                        <SecondaryInput label="Theme Title" errorMessage={errors.title?.message}>
                              {register("title", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <section className="flex flex-col gap-8 w-full mt-6">
                              <span className="flex w-full justify-between items-center gap-6">
                                    <hr className="border border-mute-1 w-full" />
                                    <p className="text-mute font-semibold text-center min-w-fit">
                                          Plenary Session
                                    </p>
                                    <hr className="border border-mute-1 w-full" />
                              </span>

                              <SecondaryInput
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
                                          })}
                                    </SecondaryInput>

                                    <SecondaryInput
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
