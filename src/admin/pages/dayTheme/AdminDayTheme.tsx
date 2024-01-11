import { useParams } from "react-router-dom";
import Header from "@/admin/shared/header/Header";
import AdminDayThemeDayFilter from "./components/AdminDayThemeDayFilter";
import AdminDayThemeTableContainer from "./container/AdminDayThemeTableContainer";
import AdminDayThemeAddFormContainer from "./container/AdminDayThemeAddFormContainer";
import AdminDayThemePaginationContainer from "./container/AdminDayThemePaginationContainer";
import useModal from "@/admin/hooks/modal/useModal";
import { FieldStatus } from "@/admin/enum/modal/modalEnum";
import { IModal } from "@/admin/model/modal/useModalModel";
import { IDayThemeModel } from "@/admin/model/dayTheme/dayThemeModel";
import AdminDayThemeActionBar from "./components/AdminDayThemeActionBar";
import { errorToastMessage } from "@/utils/alert";
import AdminDayThemeEditFormContainer from "./container/AdminDayThemeEditFormContainer";

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
                                    dayId ? openAddModal() : errorToastMessage("Pease select Day")
                              }
                        />
                  </span>

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AdminDayThemeDayFilter />

                        <AdminDayThemeTableContainer openEditModal={openEditModal} />

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
            </>
      );
}

export default AdminDayTheme;
