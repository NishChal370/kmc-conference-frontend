import { useFormContext } from "react-hook-form";
import PersonalInformation from "../form/PersonalInformation";
import { ISpeakerPersonalAddForm } from "@/admin/model/speaker/adminSpeakerModel";

type IField = (keyof ISpeakerPersonalAddForm)[];

interface IPersonalInformationContainer {
      submitToParent: (fields: IField) => void;
}

function PersonalInformationContainer({ submitToParent }: IPersonalInformationContainer) {
      const formContext = useFormContext<ISpeakerPersonalAddForm>();

      const formSubmitHandler = () => {
            const fields: IField = ["bio", "linkedInProfile", "professionalWebsite", "twitterHandle"];

            submitToParent(fields);
      };

      return <PersonalInformation formContext={formContext} formSubmitHandler={formSubmitHandler} />;
}

export default PersonalInformationContainer;
