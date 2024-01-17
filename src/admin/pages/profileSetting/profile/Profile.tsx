import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import ProfileBodyContainer from "./container/ProfileBodyContainer";
import { IAdminProfileModel } from "@/admin/model/profile/adminProfileModel";
import ProfileEditModalContainer from "./container/ProfileEditModalContainer";

function Profile() {
      const [adminProfileDetail, openAdminProfileEditModal, closeAdminProfileModal] =
            useExtraModal<IAdminProfileModel>();
      return (
            <>
                  <ProfileBodyContainer openAdminProfileEditModal={openAdminProfileEditModal} />

                  {adminProfileDetail?.data && adminProfileDetail.isOpen && (
                        <ProfileEditModalContainer
                              closeModalHandler={closeAdminProfileModal}
                              adminProfileDetail={adminProfileDetail.data}
                        />
                  )}
            </>
      );
}

export default Profile;
