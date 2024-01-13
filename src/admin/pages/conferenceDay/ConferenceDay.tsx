import Header from "@/admin/shared/header/Header";
import ConferenceDayActionBar from "./components/ConferenceDayActionBar";
import ConferenceDayTableContainer from "./containers/ConferenceDayTableContainer";
import ConferenceDayAddModalContainer from "./containers/ConferenceDayAddModalContainer";
import ConferenceDayEditModalContainer from "./containers/ConferenceDayEditModalContainer";
import ConferenceDayPaginationContainer from "./containers/ConferenceDayPaginationContainer";
import useModal from "@/admin/hooks/modal/useModal";
import { FieldStatus } from "@/admin/enum/modal/modalEnum";
import { IModal } from "@/admin/model/modal/useModalModel";
import { IConferenceDayModel } from "@/admin/model/conferenceDay/conferenceDayModel";

function ConferenceDay() {
      const { modalState, openAddModal, openEditModal, closeModal } = useModal<IModal<IConferenceDayModel>>();

      return (
            <>
                  <span className="flex justify-between items-end">
                        <Header pageHeaderName="Conference Day" />

                        <ConferenceDayActionBar addButtonHandler={openAddModal} />
                  </span>

                  <span className="flex flex-col gap-6">
                        <ConferenceDayTableContainer openEditModal={openEditModal} />

                        <ConferenceDayPaginationContainer />
                  </span>

                  {[FieldStatus.Edit].includes(modalState.modalStatus) && modalState.modalData?.edit && (
                        <ConferenceDayEditModalContainer
                              conferenceDayDetail={modalState.modalData?.edit}
                              closeModalHandler={closeModal}
                        />
                  )}

                  {[FieldStatus.Add].includes(modalState.modalStatus) && (
                        <ConferenceDayAddModalContainer closeModal={closeModal} />
                  )}
            </>
      );
}

export default ConferenceDay;
