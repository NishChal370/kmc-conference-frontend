import { ISpeakerSessionDetailAddFrom } from "@/admin/model/speaker/adminSpeakerModel";
import { useFormContext } from "react-hook-form";
import SessionForm from "../form/SessionForm";

type IField = (keyof ISpeakerSessionDetailAddFrom)[];

interface ISessionFormContainer {
      slideToPrev: () => void;
      submitToParent: (fields: IField) => void;
}
function SessionFormContainer({ slideToPrev, submitToParent }: ISessionFormContainer) {
      const formContext = useFormContext<ISpeakerSessionDetailAddFrom>();

      const formSubmitHandler = () => {
            const fields: IField = [
                  "accommodationNeeds",
                  "avRequirements",
                  "preferredSessionLengthMinutes",
                  "sessionProposal",
                  "willingToTravel",
            ];

            submitToParent(fields);
      };

      return (
            <SessionForm
                  slideToPrev={slideToPrev}
                  formContext={formContext}
                  formSubmitHandler={formSubmitHandler}
            />
      );
}

export default SessionFormContainer;