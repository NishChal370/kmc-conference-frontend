import { useParams } from "react-router-dom";
import Header from "@/admin/shared/header/Header";
import AdminDayThemeActionBar from "./components/AdminDayThemeActionBar";
import AdminDayThemeViewModal from "./components/AdminDayThemeViewModal";
import AdminDayThemeTableContainer from "./container/AdminDayThemeTableContainer";
import AdminDayThemeAddFormContainer from "./container/AdminDayThemeAddFormContainer";
import AdminDayThemeEditFormContainer from "./container/AdminDayThemeEditFormContainer";
import AdminDayThemeDayFilterContainer from "./container/AdminDayThemeDayFilterContainer";
import AdminDayThemePaginationContainer from "./container/AdminDayThemePaginationContainer";
import { errorToastMessage } from "@/utils/alert";
import useModal from "@/admin/hooks/modal/useModal";
import { FieldStatus } from "@/admin/enum/modal/modalEnum";
import { IModal } from "@/admin/model/modal/useModalModel";
import { IDayThemeModel } from "@/admin/model/dayTheme/dayThemeModel";

function AdminDayTheme() {
      const { dayId } = useParams();

      const { modalState, openAddModal, openEditModal, openViewModal, closeModal } =
            useModal<IModal<IDayThemeModel>>();

      return (
            <>
                  <span className="flex justify-between items-end">
                        <Header />

                        <AdminDayThemeActionBar
                              addButtonHandler={() =>
                                    dayId ? openAddModal() : errorToastMessage("Please select Day")
                              }
                        />
                  </span>

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AdminDayThemeDayFilterContainer />

                        <AdminDayThemeTableContainer
                              openViewModal={openViewModal}
                              openEditModal={openEditModal}
                        />

                        <AdminDayThemePaginationContainer />
                  </section>

                  {[FieldStatus.Add].includes(modalState.modalStatus) && dayId && (
                        <AdminDayThemeAddFormContainer
                              selectedDayId={parseInt(dayId)}
                              closeModalHandler={closeModal}
                        />
                  )}

                  {[FieldStatus.Edit].includes(modalState.modalStatus) && modalState.modalData?.edit && (
                        <AdminDayThemeEditFormContainer
                              selectedDayTheme={modalState.modalData?.edit}
                              closeModalHandler={closeModal}
                        />
                  )}

                  {[FieldStatus.View].includes(modalState.modalStatus) && modalState.modalData?.view && (
                        <AdminDayThemeViewModal
                              closeModalHandler={closeModal}
                              dayThemeDetail={modalState.modalData?.view}
                        />
                  )}
            </>
      );
}

export default AdminDayTheme;
