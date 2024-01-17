import useUserApi from "@/admin/hooks/user/useUserApi";
import { IAdminUserAddForm } from "@/admin/model/user/userModel";
import useAppForm from "@/hooks/form/useAppForm";
import AdminUserAddModal from "../components/AdminUserAddModal";

interface IAdminUserAddModalContainer {
      closeModal: () => void;
}
function AdminUserAddModalContainer({ closeModal }: IAdminUserAddModalContainer) {
      const userForm = useAppForm<IAdminUserAddForm>();
      const { handleSubmit, reset } = userForm;

      const { addUserDetail } = useUserApi();

      const formSubmitHandler = handleSubmit((newUserDetail) => {
            addUserDetail(newUserDetail).then(closeModal);
      });

      const formResetHandler = () => {
            reset();
      };

      return (
            <AdminUserAddModal
                  userForm={userForm}
                  formSubmitHandler={formSubmitHandler}
                  formResetHandler={formResetHandler}
                  closeModalHandler={closeModal}
            />
      );
}

export default AdminUserAddModalContainer;
