import UpdateBecomeSpeakerForm from "../form/UpdateBecomeSpeakerForm";
import useAppForm from "@/hooks/form/useAppForm";
import { getFileOrNull } from "@/utils/dataHelpers";
import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import { ISpeakerAddModal, ISpeakerNewSessionAddForm } from "@/admin/model/speaker/becomeSpeakerModel";

interface IUpdateBecomeSpeakerFormContainer {
      closeModal: () => void;
      sessionId: ISpeakerAddModal["sessionChoice"]["sessionId"];
}
function UpdateBecomeSpeakerFormContainer({ sessionId, closeModal }: IUpdateBecomeSpeakerFormContainer) {
      const form = useAppForm<ISpeakerNewSessionAddForm>({
            defaultValues: {
                  proposalFile: {
                        newFiles: [],
                        oldFiles: [],
                  },
            },
      });

      const { handleSubmit, reset } = form;
      const { addSpeakerNewSession } = useSpeakerApi();

      const formSubmitHandler = handleSubmit((newSession) => {
            addSpeakerNewSession({
                  sessionId: sessionId,
                  sessionProposal: getFileOrNull(newSession.proposalFile),
                  avRequirements: newSession.avRequirements,
                  preferredSessionLengthMinutes: newSession.preferredSessionLengthMinutes,
            }).then(closeModal);
      });

      const formResetHandler = () => {
            reset();
      };

      return (
            <UpdateBecomeSpeakerForm
                  form={form}
                  formSubmitHandler={formSubmitHandler}
                  formResetHandler={formResetHandler}
            />
      );
}

export default UpdateBecomeSpeakerFormContainer;
