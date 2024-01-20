import { useFormContext } from "react-hook-form";
import ProfessionalInformationForm from "../form/ProfessionalInformationForm";
import { ISpeakerProfessionalAddForm } from "@/admin/model/speaker/adminSpeakerModel";

type IField = (keyof ISpeakerProfessionalAddForm)[];

interface IProfessionalInformationFormContainer {
      submitToParent: (fields: IField) => void;
}

function ProfessionalInformationFormContainer({ submitToParent }: IProfessionalInformationFormContainer) {
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
                  professionalInformationForm={formContext}
                  formSubmitHandler={formSubmitHandler}
            />
      );
}

export default ProfessionalInformationFormContainer;
