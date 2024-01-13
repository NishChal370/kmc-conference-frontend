import useModal from "@/admin/hooks/modal/useModal";
import AdminScheduleTopicTableContainer from "./containers/AdminScheduleTopicTableContainer";
import AdminScheduleTopicEditFormContainer from "./containers/AdminScheduleTopicEditFormContainer";
import { IModal } from "@/admin/model/modal/useModalModel";
import { FieldStatus } from "@/admin/enum/modal/modalEnum";
import { IScheduleModel } from "@/admin/model/schedule/scheduleModel";
import { IScheduleTopicModel } from "@/admin/model/scheduleTopic/scheduleTopicModel";
import AdminScheduleTopicViewModal from "./components/AdminScheduleTopicViewModal";

interface IAdminScheduleTopic {
      isVisible: boolean;
      scheduleId: IScheduleModel["id"];
}

function AdminScheduleTopic({ isVisible, scheduleId }: IAdminScheduleTopic) {
      const { modalState, openEditModal, openViewModal, closeModal } =
            useModal<IModal<IScheduleTopicModel>>();

      return (
            <>
                  <AdminScheduleTopicTableContainer
                        isVisible={isVisible}
                        scheduleId={scheduleId}
                        openViewModal={openViewModal}
                        openEditModal={openEditModal}
                  />

                  {[FieldStatus.Edit].includes(modalState.modalStatus) && modalState.modalData?.edit && (
                        <AdminScheduleTopicEditFormContainer
                              closeModalHandler={closeModal}
                              scheduleTopicDetail={modalState.modalData.edit}
                        />
                  )}

                  {FieldStatus.View === modalState.modalStatus && modalState.modalData?.view && (
                        <AdminScheduleTopicViewModal
                              selectedTopicDetail={modalState.modalData.view}
                              closeModalHandler={closeModal}
                        />
                  )}
            </>
      );
}

export default AdminScheduleTopic;
