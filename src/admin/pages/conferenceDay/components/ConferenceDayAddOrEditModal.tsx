import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { Modal, ModalActionButtons, ModalFooter } from "@/shared/modal";
import { IConferenceDayForm } from "@/admin/model/conferenceDay/conferenceDayModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";

interface IConferenceDayAddOrEditModal {
      modalType?: "Add" | "Edit";
      closeModalHandler: () => void;
      formResetHandler: () => void;
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
      conferenceDayForm: UseFormReturn<IConferenceDayForm>;
}

function ConferenceDayAddOrEditModal({
      modalType = "Add",
      closeModalHandler,
      formResetHandler,
      formSubmitHandler,
      conferenceDayForm: {
            register,
            formState: { errors },
      },
}: IConferenceDayAddOrEditModal) {
      return (
            <Modal
                  title={`${modalType} Conference Day Detail`}
                  size="w-full md:!w-[70%] md:!max-w-[60rem]"
                  closeHandler={closeModalHandler}
            >
                  <form className="flex flex-col gap-6" onSubmit={formSubmitHandler}>
                        <div
                              className="flex flex-col gap-x-6 gap-y-7
                                    sm:grid sm:grid-cols-2
                              "
                        >
                              <SecondaryInput
                                    containerClassName="col-span-2"
                                    isRequired
                                    type="date"
                                    label="Date"
                                    errorMessage={errors.date?.message}
                              >
                                    {register("date", {
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    })}
                              </SecondaryInput>

                              <span
                                    className="col-span-2 flex flex-col gap-x-6 gap-y-7
                                          sm:flex-row 
                                    "
                              >
                                    <SecondaryInput
                                          isRequired
                                          label="Location Info"
                                          containerClassName="w-full"
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
                                          label="Venue City"
                                          containerClassName="w-full"
                                          errorMessage={errors.venueCity?.message}
                                    >
                                          {register("venueCity", {
                                                required: {
                                                      value: true,
                                                      message: INPUT_ERROR_MESSAGE.empty,
                                                },
                                          })}
                                    </SecondaryInput>

                                    <SecondaryInput
                                          isRequired
                                          label="Venue State"
                                          containerClassName="w-full"
                                          errorMessage={errors.venueState?.message}
                                    >
                                          {register("venueState", {
                                                required: {
                                                      value: true,
                                                      message: INPUT_ERROR_MESSAGE.empty,
                                                },
                                          })}
                                    </SecondaryInput>
                              </span>

                              <SecondaryInput
                                    isRequired
                                    label="Parking Info"
                                    errorMessage={errors.parkingInfo?.message}
                              >
                                    {register("parkingInfo", {
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    })}
                              </SecondaryInput>

                              <SecondaryInput
                                    isRequired
                                    label="Parking Location"
                                    errorMessage={errors.parkingLocation?.message}
                              >
                                    {register("parkingLocation", {
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    })}
                              </SecondaryInput>

                              <SecondaryInput
                                    isRequired
                                    label="Accommodation Info"
                                    errorMessage={errors.hotelInfo?.message}
                              >
                                    {register("hotelInfo", {
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    })}
                              </SecondaryInput>

                              <SecondaryInput
                                    isRequired
                                    label="Accommodation Location"
                                    errorMessage={errors.hotelLocation?.message}
                              >
                                    {register("hotelLocation", {
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

export default ConferenceDayAddOrEditModal;
