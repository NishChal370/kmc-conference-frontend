import useAppForm from "@/hooks/form/useAppForm";
import {
      IConferenceDayForm,
      IConferenceDayPostRequest,
} from "@/admin/model/conferenceDay/conferenceDayModel";
import useConferenceDayApi from "@/admin/hooks/conferenceDay/useConferenceDayApi";
import ConferenceDayAddOrEditModal from "../components/ConferenceDayAddOrEditModal";

interface IConferenceDayAddModalContainer {
      closeModal: () => void;
}
function ConferenceDayAddModalContainer({ closeModal }: IConferenceDayAddModalContainer) {
      const conferenceDayForm = useAppForm<IConferenceDayForm>();
      const { handleSubmit, reset } = conferenceDayForm;

      const { addConferenceDayDetail } = useConferenceDayApi();

      const formSubmitHandler = handleSubmit((newConferenceDay) => {
            const conferenceDay: IConferenceDayPostRequest = {
                  date: newConferenceDay.date,
                  venueInfo: {
                        parkingInfo: newConferenceDay.parkingInfo,
                        parkingLocation: newConferenceDay.parkingLocation,
                        hotelInfo: newConferenceDay.hotelInfo,
                        hotelLocation: newConferenceDay.hotelLocation,
                        location: newConferenceDay.location,
                        venueCity: newConferenceDay.venueCity,
                        venueState: newConferenceDay.venueState,
                  },
            };
            addConferenceDayDetail(conferenceDay).then(closeModal);
      });

      const formResetHandler = () => {
            reset();
      };

      return (
            <ConferenceDayAddOrEditModal
                  conferenceDayForm={conferenceDayForm}
                  formSubmitHandler={formSubmitHandler}
                  formResetHandler={formResetHandler}
                  closeModalHandler={closeModal}
            />
      );
}

export default ConferenceDayAddModalContainer;
