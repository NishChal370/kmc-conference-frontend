import { useFormContext } from "react-hook-form";
import AccommodationForm from "../forms/AccommodationForm";
import { IParticipationAccommodationForm } from "@/admin/model/participant/attendScheduleModel";

type IField = (keyof IParticipationAccommodationForm)[];
interface IAccommodationFormContainer {
      slideToPrev: () => void;
      submitToParentHandler: (data: IField) => void;
}

function AccommodationFormContainer({ slideToPrev, submitToParentHandler }: IAccommodationFormContainer) {
      const form = useFormContext<IParticipationAccommodationForm>();

      const formSubmitHandler = () => {
            const fields: IField = [
                  "arrivalDate",
                  "departureDate",
                  "modeOfTransportation",
                  "hotelPreferences",
                  "roommatePreferences",
            ];

            submitToParentHandler(fields);
      };
      return (
            <AccommodationForm slideToPrev={slideToPrev} form={form} formSubmitHandler={formSubmitHandler} />
      );
}

export default AccommodationFormContainer;
