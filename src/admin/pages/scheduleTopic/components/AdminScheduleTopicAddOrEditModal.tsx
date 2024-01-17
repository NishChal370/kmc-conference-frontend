import { BaseSyntheticEvent } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import SecondaryInput from "@/shared/input/SecondaryInput";
import RichTextEditor from "@/shared/input/RichTextEditor";
import { IModalType } from "@/admin/model/modal/modalModel";
import { Modal, ModalActionButtons, ModalFooter } from "@/shared/modal";
import { IScheduleTopicForm } from "@/admin/model/scheduleTopic/scheduleTopicModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";

interface IAdminScheduleTopicAddOrEditModal {
      modalType?: IModalType;
      closeModalHandler: () => void;
      formResetHandler: () => void;
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
      scheduleTopicForm: UseFormReturn<IScheduleTopicForm>;
}

function AdminScheduleTopicAddOrEditModal({
      modalType = "Add",
      closeModalHandler,
      formResetHandler,
      formSubmitHandler,
      scheduleTopicForm: {
            control,
            register,
            formState: { errors },
      },
}: IAdminScheduleTopicAddOrEditModal) {
      return (
            <Modal
                  title={`${modalType} Topic Detail`}
                  size="w-full lg:!max-w-[64rem]"
                  closeHandler={closeModalHandler}
            >
                  <form className="flex flex-col gap-6 w-full" onSubmit={formSubmitHandler}>
                        <SecondaryInput isRequired label="Title" errorMessage={errors.title?.message}>
                              {register("title", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <Controller
                              control={control}
                              name="description"
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
                                          placeHolder="Write session topic description"
                                          errorMessage={fieldState.error?.message}
                                    />
                              )}
                        />

                        <Controller
                              control={control}
                              name="kmcHighlights"
                              rules={{
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              }}
                              render={({ field, fieldState }) => (
                                    <RichTextEditor
                                          isRequired
                                          label="KMC Highlights"
                                          value={field.value}
                                          onChangeHandler={field.onChange}
                                          placeHolder="Write kmc highlights"
                                          errorMessage={fieldState.error?.message}
                                    />
                              )}
                        />

                        <Controller
                              control={control}
                              name="keyNote"
                              rules={{
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              }}
                              render={({ field, fieldState }) => (
                                    <RichTextEditor
                                          isRequired
                                          label="Key Note"
                                          value={field.value}
                                          onChangeHandler={field.onChange}
                                          placeHolder="Write  key note"
                                          errorMessage={fieldState.error?.message}
                                    />
                              )}
                        />

                        <Controller
                              control={control}
                              name="internationalCases"
                              rules={{
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              }}
                              render={({ field, fieldState }) => (
                                    <RichTextEditor
                                          isRequired
                                          label="International Cases"
                                          value={field.value}
                                          onChangeHandler={field.onChange}
                                          placeHolder="Write international cases"
                                          errorMessage={fieldState.error?.message}
                                    />
                              )}
                        />

                        <Controller
                              control={control}
                              name="workshop"
                              rules={{
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              }}
                              render={({ field, fieldState }) => (
                                    <RichTextEditor
                                          isRequired
                                          label="Workshop"
                                          value={field.value}
                                          onChangeHandler={field.onChange}
                                          placeHolder="Write workshop"
                                          errorMessage={fieldState.error?.message}
                                    />
                              )}
                        />

                        <ModalFooter>
                              <ModalActionButtons resetHandler={formResetHandler} />
                        </ModalFooter>
                  </form>
            </Modal>
      );
}

export default AdminScheduleTopicAddOrEditModal;
