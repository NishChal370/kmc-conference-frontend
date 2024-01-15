import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AdminUserTable from "../components/AdminUserTable";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import { Status } from "@/enum/commonEnum";
import { IUserViewOrEditModal } from "@/admin/model/user/userModel";
import useUserApi from "@/admin/hooks/user/useUserApi";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import { userSliceAction, userSliceState } from "../feature/userSlice";

interface IAdminUserTableContainer {
      openEditModal: ({ editingData }: { editingData: IUserViewOrEditModal }) => void;
      openViewModal: ({ viewingData }: { viewingData: IUserViewOrEditModal }) => void;
}

function AdminUserTableContainer({ openEditModal, openViewModal }: IAdminUserTableContainer) {
      const { search } = useLocation();

      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(userSliceState);

      const { getUsers } = useUserApi();

      const { getSearchParmaValues } = useURLQueryHandler();

      const { currentPageNumber } = getSearchParmaValues();

      const fetchData = () => {
            getUsers({ pageNumber: currentPageNumber });
      };

      const openViewModalHandler = (viewingData: IUserViewOrEditModal) => () => {
            openViewModal({ viewingData });
      };

      const openEditModalHandler = (editingData: IUserViewOrEditModal) => () => {
            openEditModal({ editingData });
      };

      useEffect(() => {
            fetchData();
      }, [search]);

      useEffect(() => {
            return () => {
                  dispatch(userSliceAction.resetUserSlice());
            };
      }, []);

      return (
            <>
                  <AdminUserTable
                        status={status}
                        users={data.registeredUsers}
                        openViewModalHandler={openViewModalHandler}
                        openEditModalHandler={openEditModalHandler}
                  />

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AdminUserTableContainer;
