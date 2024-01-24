import { useFormContext } from "react-hook-form";
import AdditionalDetailForm from "../forms/AdditionalDetailForm";
import { IParticipationAdditionalForm } from "@/admin/model/participant/attendScheduleModel";

interface IAdditionalDetailFormContainer {
      slideToPrev: () => void;
}

function AdditionalDetailFormContainer({ slideToPrev }: IAdditionalDetailFormContainer) {
      const form = useFormContext<IParticipationAdditionalForm>();

      return <AdditionalDetailForm slideToPrev={slideToPrev} form={form} />;
}

export default AdditionalDetailFormContainer;
