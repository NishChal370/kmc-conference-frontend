import Button from "@/shared/button/Button";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";

interface IProfessionalInformationForm {
      submitToParent: () => void;
}
function ProfessionalInformationForm({ submitToParent }: IProfessionalInformationForm) {
      return (
            <>
                  <div>
                        <SecondaryInput label="Expertise in Field" />
                        <SecondaryInput label="Publication" />
                        <SecondaryInput label="Previous Speaking Engagement" />
                        <RichTextEditor
                              containerClassName="col-span-1 md:col-span-2 pb-10 sm:pb-6 md:pb-0"
                              label="Previous Experience"
                              value=""
                              onChangeHandler={() => {}}
                        />
                        <RichTextEditor
                              containerClassName="md:col-span-2  pb-10 sm:pb-6 md:pb-0"
                              label="Previous Experience"
                              value=""
                              onChangeHandler={() => {}}
                        />
                  </div>

                  <span className="flex justify-end w-full md:w-fit min-w-[10rem] self-end">
                        <Button title="Next" onClickHandler={submitToParent} />
                  </span>
            </>
      );
}

export default ProfessionalInformationForm;
