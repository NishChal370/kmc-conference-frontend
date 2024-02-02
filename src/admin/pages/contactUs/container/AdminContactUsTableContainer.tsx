import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { contactUsDetailsSliceState, contactUsSliceAction } from "../feature/contactUsSlice";
import useContactUsApi from "@/admin/hooks/contactUs/useContactUsApi";
import { useURLQueryValues } from "@/hooks/urlQueryHandler";
import { Status } from "@/enum/commonEnum";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import AdminContactUsTable from "../components/AdminContactUsTable";
import {
      IContactUsDeleteRequest,
      IContactUsUpdateForm,
      IContactUsViewModal,
} from "@/admin/model/contactUs/contactUsModel";

interface IAdminContactUsTableContainer {
      openViewModal: ({ viewingData }: { viewingData: IContactUsViewModal }) => void;
      openEditStatusModal: ({ editingData }: { editingData: IContactUsUpdateForm }) => void;
}
function AdminContactUsTableContainer({ openEditStatusModal, openViewModal }: IAdminContactUsTableContainer) {
      const dispatch = useAppDispatch();

      const { search } = useLocation();

      const { status, error, data } = useAppSelector(contactUsDetailsSliceState);

      const { getContactUs, deleteContactUs } = useContactUsApi();

      const { currentPageNumber } = useURLQueryValues();

      const fetchData = () => {
            getContactUs({ pageNumber: currentPageNumber });
      };

      const openEditStatusModalHandler = (editingData: IContactUsUpdateForm) => () => {
            openEditStatusModal({ editingData });
      };

      const openViewModalHandler = (viewingData: IContactUsViewModal) => () => {
            openViewModal({ viewingData });
      };

      const deleteNewsHandler = (deletingDetail: IContactUsDeleteRequest) => () => {
            deleteContactUs(deletingDetail);
      };

      useEffect(() => {
            fetchData();
      }, [search]);

      useEffect(() => {
            return () => {
                  dispatch(contactUsSliceAction.resetContactUsDetails());
            };
      }, []);

      return (
            <>
                  <AdminContactUsTable
                        status={status}
                        currentPageNumber={currentPageNumber}
                        contactUsDetails={data.contactUs}
                        openEditStatusModalHandler={openEditStatusModalHandler}
                        openViewModalHandler={openViewModalHandler}
                        deleteNewsHandler={deleteNewsHandler}
                  />

                  {status === Status.FAILED && (
                        <ErrorMessage title={error?.title} detail={error?.detail} traceId={error?.traceId} />
                  )}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AdminContactUsTableContainer;
