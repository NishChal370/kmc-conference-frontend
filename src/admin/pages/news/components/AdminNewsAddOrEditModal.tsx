import { BaseSyntheticEvent } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { Modal, ModalActionButtons, ModalFooter, ModalSectionHeader } from "@/shared/modal";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { INewAddOrEditForm } from "@/admin/model/news/newsModel";
import ImageSelectInput from "@/shared/fileInput/ImageSelectInput";

interface IAdminNewsAddOrEditModal {
      newsAddOrEditForm: UseFormReturn<INewAddOrEditForm>;
      formResetHandler: () => void;
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
      closeNewsAddOrEditForm: () => void;
}
function AdminNewsAddOrEditModal({
      closeNewsAddOrEditForm,
      formResetHandler,
      formSubmitHandler,
      newsAddOrEditForm: {
            register,
            control,
            formState: { errors },
      },
}: IAdminNewsAddOrEditModal) {
      return (
            <Modal
                  title="Edit Applied Speaker Detail"
                  size="w-full lg:!max-w-[76rem]"
                  closeHandler={closeNewsAddOrEditForm}
            >
                  <form className="flex flex-col gap-12 w-full" onSubmit={formSubmitHandler}>
                        <div
                              className="flex flex-col gap-20 justify-center w-full
                                    [&>section]:flex [&>section]:flex-col  [&>section]:gap-10
                                    [&>section>span]:grid [&>section>span]:md:grid-cols-1  [&>section>span]:gap-y-12
                              "
                        >
                              <section>
                                    <ImageSelectInput name="image" control={control} />

                                    <ModalSectionHeader title="News and Updates Detail" />

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

                                          <Controller
                                                name="content"
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
                                                            label="Content"
                                                            value={field.value}
                                                            onChangeHandler={field.onChange}
                                                            placeHolder="Write content"
                                                            errorMessage={fieldState.error?.message}
                                                      />
                                                )}
                                          />
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

export default AdminNewsAddOrEditModal;
