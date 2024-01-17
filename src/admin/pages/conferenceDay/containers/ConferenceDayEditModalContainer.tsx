import { useEffect } from "react";
import ConferenceDayAddOrEditModal from "../components/ConferenceDayAddOrEditModal";
import useAppForm from "@/hooks/form/useAppForm";
import useConferenceDayApi from "@/admin/hooks/conferenceDay/useConferenceDayApi";
import { IConferenceDayForm, IConferenceDayModel } from "@/admin/model/conferenceDay/conferenceDayModel";

interface IConferenceDayEditModalContainer {
      closeModalHandler: () => void;
      conferenceDayDetail: IConferenceDayModel;
}
function ConferenceDayEditModalContainer({
      closeModalHandler,
      conferenceDayDetail,
}: IConferenceDayEditModalContainer) {
      const conferenceDayForm = useAppForm<IConferenceDayForm>();
      const { handleSubmit, reset } = conferenceDayForm;

      const { updateConferenceDayDetail } = useConferenceDayApi();

      const formSubmitHandler = handleSubmit((conferenceUpdatedDay) => {
            const conferenceDay: IConferenceDayModel = {
                  id: conferenceDayDetail.id,
                  date: conferenceUpdatedDay.date,
                  venueInfo: {
                        parkingInfo: conferenceUpdatedDay.parkingInfo,
                        parkingLocation: conferenceUpdatedDay.parkingLocation,
                        hotelInfo: conferenceUpdatedDay.hotelInfo,
                        hotelLocation: conferenceUpdatedDay.hotelLocation,
                        location: conferenceUpdatedDay.location,
                        venueCity: conferenceUpdatedDay.venueCity,
                        venueState: conferenceUpdatedDay.venueState,
                  },
            };

            updateConferenceDayDetail(conferenceDay).then(closeModalHandler);
      });

      const formResetHandler = () => {
            reset();
      };

      useEffect(() => {
            const initialValue: IConferenceDayForm = {
                  date: conferenceDayDetail.date,
                  parkingInfo: conferenceDayDetail.venueInfo.parkingInfo,
                  parkingLocation: conferenceDayDetail.venueInfo.parkingLocation,
                  hotelInfo: conferenceDayDetail.venueInfo.hotelInfo,
                  hotelLocation: conferenceDayDetail.venueInfo.hotelLocation,
                  location: conferenceDayDetail.venueInfo.location,
                  venueCity: conferenceDayDetail.venueInfo.venueCity,
                  venueState: conferenceDayDetail.venueInfo.venueState,
            };

            reset(initialValue);
      }, []);

      return (
            <ConferenceDayAddOrEditModal
                  modalType="Edit"
                  conferenceDayForm={conferenceDayForm}
                  formSubmitHandler={formSubmitHandler}
                  formResetHandler={formResetHandler}
                  closeModalHandler={closeModalHandler}
            />
      );
}

export default ConferenceDayEditModalContainer;
