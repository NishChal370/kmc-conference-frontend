import { useParams } from "react-router-dom";
import Header from "@/admin/shared/header/Header";
import AdminScheduleActionBar from "./components/AdminScheduleActionBar";
import AdminScheduleTableContainer from "./container/AdminScheduleTableContainer";
import AdminScheduleAddModalContainer from "./container/AdminScheduleAddModalContainer";
import AdminScheduleEditModalContainer from "./container/AdminScheduleEditModalContainer";
import AdminSchedulePaginationContainer from "./container/AdminSchedulePaginationContainer";
import AdminScheduleThemeFilterContainer from "./container/AdminScheduleThemeFilterContainer";
import { errorToastMessage } from "@/utils/alert";
import useModal from "@/admin/hooks/modal/useModal";
import { IModal } from "@/admin/model/modal/useModalModel";
import { FieldStatus } from "@/admin/enum/modal/modalEnum";
import { IScheduleModel } from "@/admin/model/schedule/scheduleModel";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import AdminScheduleTopicAddFormContainer from "../scheduleTopic/containers/AdminScheduleTopicAddFormContainer";

function AdminSchedule() {
      const { themeId } = useParams();
      const { modalState, openAddModal, openEditModal, closeModal } = useModal<IModal<IScheduleModel>>();

      const [topicAddModal, openTopicAddModal, closeTopicAddModalHandler] =
            useExtraModal<IScheduleModel["id"]>();

      const openAddModalHandler = () => {
            themeId ? openAddModal() : errorToastMessage("Please select Day");
      };

      return (
            <>
                  <span className="flex justify-between items-end">
                        <Header pageHeaderName="Session" />

                        <AdminScheduleActionBar addButtonHandler={openAddModalHandler} />
                  </span>

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AdminScheduleThemeFilterContainer />

                        <AdminScheduleTableContainer
                              openEditModal={openEditModal}
                              openTopicAddModal={openTopicAddModal}
                        />

                        <AdminSchedulePaginationContainer />
                  </section>

                  {[FieldStatus.Edit].includes(modalState.modalStatus) && modalState.modalData?.edit && (
                        <AdminScheduleEditModalContainer
                              closeModalHandler={closeModal}
                              selectedScheduleDetail={modalState.modalData.edit}
                        />
                  )}

                  {[FieldStatus.Add].includes(modalState.modalStatus) && themeId && (
                        <AdminScheduleAddModalContainer
                              selectedThemeId={parseInt(themeId)}
                              closeModal={closeModal}
                        />
                  )}

                  {topicAddModal?.isOpen && topicAddModal.data && (
                        <AdminScheduleTopicAddFormContainer
                              selectedSessionId={topicAddModal.data}
                              closeModalHandler={closeTopicAddModalHandler}
                        />
                  )}
            </>
      );
}

export default AdminSchedule;
