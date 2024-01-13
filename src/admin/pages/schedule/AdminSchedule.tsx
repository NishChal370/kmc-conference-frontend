import { useParams } from "react-router-dom";
import Header from "@/admin/shared/header/Header";
import AdminScheduleActionBar from "./components/AdminScheduleActionBar";
import AdminScheduleTableContainer from "./container/AdminScheduleTableContainer";
import AdminScheduleAddModalContainer from "./container/AdminScheduleAddModalContainer";
import AdminScheduleEditModalContainer from "./container/AdminScheduleEditModalContainer";
import AdminSchedulePaginationContainer from "./container/AdminSchedulePaginationContainer";
import { errorToastMessage } from "@/utils/alert";
import useModal from "@/admin/hooks/modal/useModal";
import { IModal } from "@/admin/model/modal/useModalModel";
import { FieldStatus } from "@/admin/enum/modal/modalEnum";
import { IScheduleModel } from "@/admin/model/schedule/scheduleModel";
import AdminScheduleThemeFilterContainer from "./container/AdminScheduleThemeFilterContainer";

function AdminSchedule() {
      const { themeId } = useParams();
      const { modalState, openAddModal, openEditModal, closeModal } = useModal<IModal<IScheduleModel>>();

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

                        <AdminScheduleTableContainer openEditModal={openEditModal} />

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
            </>
      );
}

export default AdminSchedule;
