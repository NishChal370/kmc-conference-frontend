import { IParticipationAccommodationForm } from "@/admin/model/participant/participantModel";
import { useFormContext } from "react-hook-form";
import AccommodationForm from "../forms/AccommodationForm";

interface IAccommodationFormContainer {
      slideToPrev: () => void;
      submitToParentHandler: (data: (keyof IParticipationAccommodationForm)[]) => void;
}

function AccommodationFormContainer({ slideToPrev, submitToParentHandler }: IAccommodationFormContainer) {
      const form = useFormContext<IParticipationAccommodationForm>();

      const formSubmitHandler = (fields: (keyof IParticipationAccommodationForm)[]) => () => {
            submitToParentHandler(fields);
      };
      return (
            <AccommodationForm slideToPrev={slideToPrev} form={form} formSubmitHandler={formSubmitHandler} />
      );
}

export default AccommodationFormContainer;
