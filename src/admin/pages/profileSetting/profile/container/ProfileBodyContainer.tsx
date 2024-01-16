import { useEffect } from "react";
import ProfileBody from "../components/ProfileBody";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import { useAppSelector } from "@/app/hooks";
import useAdminProfileApi from "@/admin/hooks/profile/useAdminProfile";
import { adminProfileDetailSliceState } from "../feature/profileSlice";
import { Status } from "@/enum/commonEnum";
import { IAdminProfileModel } from "@/admin/model/profile/adminProfileModel";

interface IProfileBodyContainer {
      openAdminProfileEditModal: (data: IAdminProfileModel) => void;
}
function ProfileBodyContainer({ openAdminProfileEditModal }: IProfileBodyContainer) {
      const { getAdminProfile } = useAdminProfileApi();
      const { status, data, isToRefetch, error } = useAppSelector(adminProfileDetailSliceState);

      const fetchData = () => {
            getAdminProfile();
      };

      const editButtonHandler = (adminProfileDetail: IAdminProfileModel) => () => {
            openAdminProfileEditModal(adminProfileDetail);
      };

      const navigateHandler = (path?: string) => () => {
            //TODO: ad navigateor here
      };

      useEffect(() => {
            fetchData();
      }, [isToRefetch]);

      return (
            <>
                  {status === Status.SUCCEEDED && data && (
                        <ProfileBody
                              detail={data}
                              navigateHandler={navigateHandler}
                              editButtonHandler={editButtonHandler}
                        />
                  )}

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default ProfileBodyContainer;
