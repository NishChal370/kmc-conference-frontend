import Button from "@/shared/button/Button";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";

interface IPersonalInformation {
      slideToPrev: () => void;
      submitToParent: () => void;
}
function PersonalInformation({ slideToPrev, submitToParent }: IPersonalInformation) {
      return (
            <>
                  <div>
                        <SecondaryInput label="LinkedIn" />
                        <SecondaryInput label="Twitter" />
                        <SecondaryInput label="Personal website" />
                        <RichTextEditor
                              containerClassName="md:col-span-2  pb-10 sm:pb-6 md:pb-0"
                              label="Add Biography"
                              placeHolder="Write your biography"
                              value=""
                              onChangeHandler={() => {}}
                        />
                  </div>

                  <span
                        className="flex  flex-col justify-end w-full  md:min-w-[20rem] self-end gap-6
                              md:flex-row md:w-fit 
                        "
                  >
                        <Button title="Previous" variant="outlined" onClickHandler={slideToPrev} />
                        <Button title="Next" onClickHandler={submitToParent} />
                  </span>
            </>
      );
}

export default PersonalInformation;
