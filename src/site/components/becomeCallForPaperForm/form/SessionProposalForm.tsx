import { Controller, UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";
import MultipleSecondaryInput from "@/shared/input/MultipleSecondaryInput";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { ICallForPaperPostSessionProposalForm } from "@/admin/model/callForPaper/callForPaperApplyModel";

interface ISessionProposalForm {
      slideToPrev: () => void;
      formSubmitHandler: () => void;
      formContext: UseFormReturn<ICallForPaperPostSessionProposalForm>;
}
function SessionProposalForm({
      formContext: {
            control,
            register,
            formState: { errors },
      },
      slideToPrev,
      formSubmitHandler,
}: ISessionProposalForm) {
      return (
            <>
                  <div>
                        <SecondaryInput
                              isRequired
                              label="Proposed Paper Title"
                              errorMessage={errors.proposedPaperSessionTitle?.message}
                        >
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
                              label="Keynotes"
                              placeholder="Keynotes"
                              errorMessage={errors.keywords}
                        />

                        <SecondaryInput
                              isRequired
                              label="Primary Field Category"
                              errorMessage={errors.primaryFieldCategory?.message}
                        >
                              {register("primaryFieldCategory", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <SecondaryInput
                              isRequired
                              label="Research Methodology"
                              errorMessage={errors.researchMethodology?.message}
                        >
                              {register("researchMethodology", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
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
                                          placeHolder="Write abstraction summary"
                                          errorMessage={fieldState.error?.message}
                                          containerClassName="md:col-span-2  pb-10 sm:pb-6 md:pb-0"
                                    />
                              )}
                        />

                        <MultipleSecondaryInput
                              control={control}
                              name="referencesOrCitations"
                              label="References/Citations"
                              placeholder="References/Citations"
                              errorMessage={errors.referencesOrCitations}
                        />
                  </div>
                  <span
                        className="flex  flex-col justify-end w-full self-end gap-6
                              md:flex-row md:w-fit md:min-w-[20rem]
                        "
                  >
                        <Button
                              type="button"
                              title="Previous"
                              variant="outlined"
                              onClickHandler={slideToPrev}
                        />

                        <Button type="button" title="Next" onClickHandler={formSubmitHandler} />
                  </span>
            </>
      );
}

export default SessionProposalForm;
