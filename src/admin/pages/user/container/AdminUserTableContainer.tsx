import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AdminUserTable from "../components/AdminUserTable";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import { Status } from "@/enum/commonEnum";
import {
      IAdminUserRoleChangeModal,
      IAdminUserStatusChangeModal,
      IUserViewOrEditModal,
} from "@/admin/model/user/userModel";
import useUserApi from "@/admin/hooks/user/useUserApi";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import { userSliceAction, userSliceState } from "../feature/userSlice";
import { USER_SORT_VALUE } from "../data/userSortValue";

interface IAdminUserTableContainer {
      openEditRoleModal: (data: IAdminUserRoleChangeModal) => void;
      openEditStatusModal: (data: IAdminUserStatusChangeModal) => void;
      openViewModal: ({ viewingData }: { viewingData: IUserViewOrEditModal }) => void;
}

function AdminUserTableContainer({
      openViewModal,
      openEditRoleModal,
      openEditStatusModal,
}: IAdminUserTableContainer) {
      const { search } = useLocation();

      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(userSliceState);

      const { getUsers } = useUserApi();

      const { getSearchParmaValues, changeQuerySortBy } = useURLQueryHandler();

      const { currentPageNumber, getCurrentOrderBy, getSearchParamSortBy } = getSearchParmaValues({
            sortingValueList: USER_SORT_VALUE,
      });

      const fetchData = () => {
            getUsers({
                  pageNumber: currentPageNumber,
                  sortBy: getSearchParamSortBy(),
                  order: getCurrentOrderBy(),
            });
      };

      const openViewModalHandler = (viewingData: IUserViewOrEditModal) => () => {
            openViewModal({ viewingData });
      };

      const openEditRoleModalHandler = (editingData: IAdminUserRoleChangeModal) => () => {
            openEditRoleModal(editingData);
      };

      const openEditStatusModalHandler = (editingData: IAdminUserStatusChangeModal) => () => {
            openEditStatusModal(editingData);
      };

      const sortHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            const currentSortValue = e.currentTarget.dataset.value;

            if (currentSortValue) changeQuerySortBy({ sortBy: currentSortValue });
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
                        sortHandler={sortHandler}
                        sortDetail={{ getOrderBy: getCurrentOrderBy, getSort: getSearchParamSortBy }}
                        currentPageNumber={currentPageNumber}
                        users={data.registeredUsers}
                        openViewModalHandler={openViewModalHandler}
                        openEditRoleModalHandler={openEditRoleModalHandler}
                        openEditStatusModalHandler={openEditStatusModalHandler}
                  />

                  {status === Status.FAILED && (
                        <ErrorMessage title={error?.title} detail={error?.detail} traceId={error?.traceId} />
                  )}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AdminUserTableContainer;
