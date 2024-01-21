import { Controller, UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import SecondaryInput from "@/shared/input/SecondaryInput";
import MultipleSecondaryInput from "@/shared/input/MultipleSecondaryInput";
import FileDragDropContainer from "@/shared/fileInput/FileDragDropContainer";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { ICallForPaperPostPresentationForm } from "@/admin/model/callForPaper/callForPaperApplyModel";

interface IPresentationAndPaperDetailForm {
      slideToPrev: () => void;
      formSubmitHandler: () => void;
      formContext: UseFormReturn<ICallForPaperPostPresentationForm>;
}

function PresentationAndPaperDetailForm({
      slideToPrev,
      formSubmitHandler,
      formContext: {
            control,
            register,
            formState: { errors },
      },
}: IPresentationAndPaperDetailForm) {
      return (
            <>
                  <div>
                        <SecondaryInput
                              isRequired
                              label="Preferred Presentation Format"
                              errorMessage={errors.preferredPresentationFormat?.message}
                        >
                              {register("preferredPresentationFormat", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <MultipleSecondaryInput
                              isRequired
                              control={control}
                              name="keyObjectives"
                              label="Key Objectives"
                              placeholder="Key Objectives"
                              errorMessage={errors.keyObjectives}
                              validation={{
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              }}
                        />

                        <MultipleSecondaryInput
                              isRequired
                              control={control}
                              name="contributions"
                              label="Contributions"
                              placeholder="Contributions"
                              errorMessage={errors.contributions}
                              validation={{
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              }}
                        />

                        <SecondaryInput
                              isRequired
                              label="Significance/Relevance"
                              errorMessage={errors.significanceRelevance?.message}
                        >
                              {register("significanceRelevance", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <SecondaryInput
                              label="Audio Visual Requirements"
                              errorMessage={errors.audioVisualRequirements?.message}
                        >
                              {register("audioVisualRequirements")}
                        </SecondaryInput>

                        <span className="sm:col-span-2">
                              <Controller
                                    name="fullPaperORExtendedAbstract"
                                    control={control}
                                    render={({ field }) => (
                                          <FileDragDropContainer
                                                label="Full Paper / Extended Abstract"
                                                value={field.value}
                                                onChangeHandler={field.onChange}
                                          />
                                    )}
                              />
                        </span>
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

export default PresentationAndPaperDetailForm;
