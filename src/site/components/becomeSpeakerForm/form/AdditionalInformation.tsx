import Button from "@/shared/button/Button";
import AgreementCheckBox from "@/shared/input/AgreementCheckBox";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { ChangeEvent } from "react";

interface IAdditionalInformation {
      slideToPrev: () => void;
}
function AdditionalInformation({ slideToPrev }: IAdditionalInformation) {
      return (
            <>
                  <div className="!flex flex-col gap-6 w-full">
                        <SecondaryInput label="Reference Contact" />

                        <span className="!flex flex-col gap-4 w-full">
                              <AgreementCheckBox
                                    label="I Agree to the Conference Participation Dates"
                                    name="Agreed Dates"
                                    checked={false}
                                    onChange={function (event: ChangeEvent<HTMLInputElement>): void {
                                          throw new Error("Function not implemented.");
                                    }}
                              />

                              <AgreementCheckBox
                                    label="I Agree to the Terms and Conditions"
                                    name={""}
                                    checked={false}
                                    onChange={function (event: ChangeEvent<HTMLInputElement>): void {
                                          throw new Error("Function not implemented.");
                                    }}
                              />
                        </span>
                  </div>
                  <span
                        className="flex  flex-col justify-end w-full  md:min-w-[20rem] self-end gap-6
                        md:flex-row md:w-fit 
                  "
                  >
                        <Button title="Previous" variant="outlined" onClickHandler={slideToPrev} />
                        <Button type="submit" title="Submit" />
                  </span>
            </>
      );
}

export default AdditionalInformation;
