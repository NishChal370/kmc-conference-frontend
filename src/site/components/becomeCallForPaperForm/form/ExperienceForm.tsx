import { UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import MultipleSecondaryInput from "@/shared/input/MultipleSecondaryInput";
import { ICallForPaperPostExperienceForm } from "@/admin/model/callForPaper/callForPaperApplyModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { REGEX } from "@/helper/regex";

interface IExperienceForm {
      slideToPrev: () => void;
      formSubmitHandler: () => void;
      formContext: UseFormReturn<ICallForPaperPostExperienceForm>;
}
function ExperienceForm({
      formContext: {
            control,
            formState: { errors },
      },
      slideToPrev,
      formSubmitHandler,
}: IExperienceForm) {
      return (
            <>
                  <div className="!flex  flex-col gap-6">
                        <MultipleSecondaryInput
                              control={control}
                              name="previousExperience"
                              label="Previous Experience Link"
                              placeholder="Previous Experience link"
                              errorMessage={errors.previousExperience}
                              validation={{
                                    pattern: {
                                          value: REGEX.URL,
                                          message: INPUT_ERROR_MESSAGE.invalidUrl,
                                    },
                              }}
                        />

                        <MultipleSecondaryInput
                              control={control}
                              name="listOfConferences"
                              label="Previous Conference Links"
                              placeholder="Previous Conference link"
                              errorMessage={errors.listOfConferences}
                              validation={{
                                    pattern: {
                                          value: REGEX.URL,
                                          message: INPUT_ERROR_MESSAGE.invalidUrl,
                                    },
                              }}
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

export default ExperienceForm;
