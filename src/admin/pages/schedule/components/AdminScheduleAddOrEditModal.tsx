import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { Modal, ModalActionButtons, ModalFooter } from "@/shared/modal";
import { IModalType } from "@/admin/model/modal/modalModel";
import { IScheduleForm } from "@/admin/model/schedule/scheduleModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";

interface IAdminScheduleAddOrEditModal {
      modalType?: IModalType;
      closeModalHandler: () => void;
      formResetHandler: () => void;
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
      scheduleForm: UseFormReturn<IScheduleForm>;
}

function AdminScheduleAddOrEditModal({
      modalType,
      scheduleForm: {
            register,
            formState: { errors },
      },
      closeModalHandler,
      formResetHandler,
      formSubmitHandler,
}: IAdminScheduleAddOrEditModal) {
      return (
            <Modal
                  title={`${modalType} Session Detail`}
                  size="w-full md:!w-[70%] md:!max-w-[60rem]"
                  closeHandler={closeModalHandler}
            >
                  <form className="flex flex-col gap-6" onSubmit={formSubmitHandler}>
                        <div
                              className="flex flex-col gap-x-6 gap-y-7
                                    sm:grid sm:grid-cols-2
                              "
                        >
                              <SecondaryInput isRequired label="Title" errorMessage={errors.title?.message}>
                                    {register("title", {
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    })}
                              </SecondaryInput>

                              <SecondaryInput
                                    isRequired
                                    label="Location"
                                    placeHolder="Room name"
                                    errorMessage={errors.location?.message}
                              >
                                    {register("location", {
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    })}
                              </SecondaryInput>

                              <SecondaryInput
                                    isRequired
                                    type="time"
                                    label="Start Time"
                                    errorMessage={errors.startTime?.message}
                              >
                                    {register("startTime", {
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    })}
                              </SecondaryInput>

                              <SecondaryInput
                                    isRequired
                                    type="time"
                                    label="End Time"
                                    errorMessage={errors.endTime?.message}
                              >
                                    {register("endTime", {
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    })}
                              </SecondaryInput>
                        </div>

                        <ModalFooter>
                              <ModalActionButtons resetHandler={formResetHandler} />
                        </ModalFooter>
                  </form>
            </Modal>
      );
}

export default AdminScheduleAddOrEditModal;
