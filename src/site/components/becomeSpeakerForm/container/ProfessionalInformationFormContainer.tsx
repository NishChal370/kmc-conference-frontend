import { useFormContext } from "react-hook-form";
import ProfessionalInformationForm from "../form/ProfessionalInformationForm";
import { ISpeakerProfessionalAddForm } from "@/admin/model/speaker/adminSpeakerModel";

type IField = (keyof ISpeakerProfessionalAddForm)[];

interface IProfessionalInformationFormContainer {
      slideToPrev: () => void;
      submitToParent: (fields: IField) => void;
}

function ProfessionalInformationFormContainer({
      submitToParent,
      slideToPrev,
}: IProfessionalInformationFormContainer) {
      const formContext = useFormContext<ISpeakerProfessionalAddForm>();

      const formSubmitHandler = () => {
            const fields: IField = [
                  "expertiseInField",
                  "previousConferences",
                  "previousExperience",
                  "previousSpeakingEngagements",
                  "publications",
            ];

            submitToParent(fields);
      };

      return (
            <ProfessionalInformationForm
                  slideToPrev={slideToPrev}
                  professionalInformationForm={formContext}
                  formSubmitHandler={formSubmitHandler}
            />
      );
}

export default ProfessionalInformationFormContainer;
