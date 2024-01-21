import { useFormContext } from "react-hook-form";
import ProfileForm from "../forms/ProfileForm";
import { IParticipationPersonalProfileForm } from "@/admin/model/participant/participantModel";

type IField = (keyof IParticipationPersonalProfileForm)[];

interface IProfileFormContainer {
      slideToPrev: () => void;
      submitToParentHandler: (data: (keyof IParticipationPersonalProfileForm)[]) => void;
}

function ProfileFormContainer({ slideToPrev, submitToParentHandler }: IProfileFormContainer) {
      const form = useFormContext<IParticipationPersonalProfileForm>();

      const formSubmitHandler = () => {
            const fields: IField = ["bio", "linkedInProfile", "twitterHandle"];

            submitToParentHandler(fields);
      };
      return <ProfileForm slideToPrev={slideToPrev} form={form} formSubmitHandler={formSubmitHandler} />;
}

export default ProfileFormContainer;
