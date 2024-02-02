import { useEffect } from "react";
import ProfileBody from "../components/ProfileBody";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useAdminProfileApi from "@/admin/hooks/profile/useAdminProfile";
import { adminProfileDetailSliceState, adminProfileSliceAction } from "../feature/profileSlice";
import { Status } from "@/enum/commonEnum";
import { IAdminProfileModel } from "@/admin/model/profile/adminProfileModel";

interface IProfileBodyContainer {
      openAdminProfileEditModal: (data: IAdminProfileModel) => void;
}
function ProfileBodyContainer({ openAdminProfileEditModal }: IProfileBodyContainer) {
      const dispatch = useAppDispatch();
      const { status, data, isToRefetch, error } = useAppSelector(adminProfileDetailSliceState);

      const { getAdminProfile } = useAdminProfileApi();

      const fetchData = () => {
            getAdminProfile();
      };

      const editButtonHandler = (adminProfileDetail: IAdminProfileModel) => () => {
            openAdminProfileEditModal(adminProfileDetail);
      };

      useEffect(() => {
            fetchData();
      }, [isToRefetch]);

      useEffect(() => {
            return () => {
                  dispatch(adminProfileSliceAction.resetAdminProfileSlice());
            };
      }, []);

      return (
            <>
                  {status === Status.SUCCEEDED && data && (
                        <ProfileBody detail={data} editButtonHandler={editButtonHandler} />
                  )}

                  {status === Status.FAILED && (
                        <ErrorMessage title={error?.title} detail={error?.detail} traceId={error?.traceId} />
                  )}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default ProfileBodyContainer;
