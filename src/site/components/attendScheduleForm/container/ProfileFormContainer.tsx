import { IParticipationPersonalProfileForm } from "@/admin/model/participant/participantModel";
import { useFormContext } from "react-hook-form";
import ProfileForm from "../forms/ProfileForm";

interface IProfileFormContainer {
      slideToPrev: () => void;
      submitToParentHandler: (data: (keyof IParticipationPersonalProfileForm)[]) => void;
}

function ProfileFormContainer({ slideToPrev, submitToParentHandler }: IProfileFormContainer) {
      const form = useFormContext<IParticipationPersonalProfileForm>();

      const formSubmitHandler = (fields: (keyof IParticipationPersonalProfileForm)[]) => () => {
            submitToParentHandler(fields);
      };
      return <ProfileForm slideToPrev={slideToPrev} form={form} formSubmitHandler={formSubmitHandler} />;
}

export default ProfileFormContainer;
