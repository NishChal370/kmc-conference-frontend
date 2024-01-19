import Button from "@/shared/button/Button";
import ToggleButton from "@/shared/button/ToggleButton";
import FileDragDropContainer from "@/shared/fileInput/FileDragDropContainer";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";

interface ISessionForm {
      slideToPrev: () => void;
      submitToParent: () => void;
}
function SessionForm({ slideToPrev, submitToParent }: ISessionForm) {
      return (
            <>
                  <div>
                        <SecondaryInput label="Audio/View Requirement" />

                        <SecondaryInput label="Preferred session length (in minutes)" />

                        <ToggleButton
                              label="Willing to travel"
                              value={false}
                              onChangeHandler={() => {}}
                              buttonName={{
                                    one: "Yes, I will",
                                    two: "No, I can not",
                              }}
                        />

                        <RichTextEditor
                              containerClassName="md:col-span-2 pb-10 sm:pb-6 md:pb-0"
                              label="Accommodation Needs"
                              placeHolder="Write about your accommodation needs"
                              value=""
                              onChangeHandler={() => {}}
                        />

                        <span className="md:col-span-2">
                              <FileDragDropContainer
                                    label="Session Proposal"
                                    onChangeHandler={() => {}}
                                    value={{}}
                              />
                        </span>
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

export default SessionForm;
