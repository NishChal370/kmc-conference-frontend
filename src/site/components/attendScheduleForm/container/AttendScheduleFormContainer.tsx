import { IParticipationAddForm, IParticipationAddModal } from "@/admin/model/participant/participantModel";
import { FormProvider, useForm } from "react-hook-form";
import AttendScheduleForm from "../forms/AttendScheduleForm";
import useParticipantApi from "@/admin/hooks/participant/useParticipant";

interface IAttendScheduleFormContainer {
      closeModal: () => void;
      selectedSessionId: IParticipationAddModal["sessionChoice"]["sessionId"];
}
function AttendScheduleFormContainer({ closeModal, selectedSessionId }: IAttendScheduleFormContainer) {
      const methods = useForm<IParticipationAddForm>();
      const { handleSubmit, trigger } = methods;

      const { addParticipation } = useParticipantApi();

      const partialSubmitHandler = async (fields: any) => {
            const result = await trigger(fields);

            if (!result) throw new Error("Error in submitted fields " + fields);
      };

      const formSubmitHandler = handleSubmit((participationData) => {
            console.log("Submitted ", participationData);
            addParticipation({
                  address: participationData.address,
                  city: participationData.city,
                  state: participationData.state,
                  postalCode: participationData.postalCode,
                  country: participationData.country,
                  registrationType: participationData.registrationType,
                  registrationFeePaymentDetails: participationData.registrationFeePaymentDetails,
                  specialRequirements: participationData.specialRequirements,
                  sessionChoices: [selectedSessionId],
                  trackPreferences: participationData.trackPreferences,
                  bio: participationData.bio,
                  linkedInProfile: participationData.linkedInProfile,
                  twitterHandle: participationData.twitterHandle,
                  hotelPreferences: participationData.hotelPreferences,
                  roommatePreferences: participationData.roommatePreferences,
                  arrivalDate: participationData.arrivalDate,
                  departureDate: participationData.departureDate,
                  modeOfTransportation: participationData.modeOfTransportation,
                  emergencyContactName: participationData.emergencyContactName,
                  relationshipWithEmergencyContact: participationData.relationshipWithEmergencyContact,
                  emergencyContactNumber: participationData.emergencyContactNumber,
                  conferenceDiscoverySource: participationData.conferenceDiscoverySource,
                  expectationsGoals: participationData.expectationsGoals,
                  hasReadPrivacy: participationData.hasReadPrivacy,
                  consentToPhotography: participationData.consentToPhotography,
            }).then(closeModal);
      });
      return (
            <FormProvider {...methods}>
                  <AttendScheduleForm
                        submitFullForm={formSubmitHandler}
                        partialSubmitHandler={partialSubmitHandler}
                  />
            </FormProvider>
      );
}

export default AttendScheduleFormContainer;
