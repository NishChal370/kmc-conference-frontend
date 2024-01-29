import { useFormContext } from "react-hook-form";
import AdditionalInformation from "../form/AdditionalInformation";
import { ISpeakerAdditionalDetailAddFrom } from "@/admin/model/speaker/becomeSpeakerModel";

interface IAdditionalInformationContainer {
      slideToPrev: () => void;
}
function AdditionalInformationContainer({ slideToPrev }: IAdditionalInformationContainer) {
      const formContext = useFormContext<ISpeakerAdditionalDetailAddFrom>();

      return <AdditionalInformation formContext={formContext} slideToPrev={slideToPrev} />;
}

export default AdditionalInformationContainer;
