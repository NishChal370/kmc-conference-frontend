import { useEffect } from "react";
import useAppForm from "@/hooks/form/useAppForm";
import useAdminProfileApi from "@/admin/hooks/profile/useAdminProfile";
import { IAdminProfileEditForm, IAdminProfileModel } from "@/admin/model/profile/adminProfileModel";
import ProfileEditModal from "../components/ProfileEditModal";

interface IProfileEditModalContainer {
      closeModalHandler: () => void;
      adminProfileDetail: IAdminProfileModel;
}

function ProfileEditModalContainer({ adminProfileDetail, closeModalHandler }: IProfileEditModalContainer) {
      const adminProfileForm = useAppForm<IAdminProfileEditForm>();
      const { handleSubmit, reset } = adminProfileForm;

      const { updateAdminProfile } = useAdminProfileApi();

      const formSubmitHandler = handleSubmit((adminProfileUpdatedData) => {
            updateAdminProfile(adminProfileUpdatedData).then(closeModalHandler);
      });

      const formResetHandler = () => {
            reset();
      };

      const setInitialValue = () => {
            const initialValue: IAdminProfileEditForm = {
                  emailAddress: adminProfileDetail.email,
                  firstName: adminProfileDetail.firstName,
                  lastName: adminProfileDetail.lastName,
                  dateOfBirth: adminProfileDetail.dateOfBirth,
                  gender: adminProfileDetail.gender,
                  phoneNumber: adminProfileDetail.phoneNumber,
                  title: adminProfileDetail.title,
                  affiliation: adminProfileDetail.affiliation,
                  jobTitle: adminProfileDetail.jobTitle,
            };

            reset(initialValue);
      };

      useEffect(() => {
            setInitialValue();
      }, []);

      return (
            <ProfileEditModal
                  adminProfileForm={adminProfileForm}
                  closeModalHandler={closeModalHandler}
                  formResetHandler={formResetHandler}
                  formSubmitHandler={formSubmitHandler}
            />
      );
}

export default ProfileEditModalContainer;
