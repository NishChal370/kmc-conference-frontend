import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useLocation } from "react-router-dom";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import AdminCallForPaperTable from "../components/AdminCallForPaperTable";
import { useURLQueryValues } from "@/hooks/urlQueryHandler";
import useCallForPaperApi from "@/admin/hooks/callForPaper/useCallForPaperApi";
import { Status } from "@/enum/commonEnum";
import {
      IAdminCallForPaperDeleteRequest,
      IAdminCallForPaperViewModal,
} from "@/admin/model/callForPaper/callForPaperModel";
import { callForPaperBasicInfoSliceState, callForPaperSliceAction } from "../feature/callForPaperSlice";

interface IAdminCallForPaperTableContainer {
      openViewModal: (data: IAdminCallForPaperViewModal) => void;
}

function AdminCallForPaperTableContainer({ openViewModal }: IAdminCallForPaperTableContainer) {
      const { search } = useLocation();

      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(callForPaperBasicInfoSliceState);

      const { getCallForPaperBasicInfo, deleteCallForPaperDetail } = useCallForPaperApi();

      const { currentPageNumber } = useURLQueryValues();

      const fetchData = () => {
            getCallForPaperBasicInfo({ pageNumber: currentPageNumber });
      };

      const openViewModalHandler = (viewingData: IAdminCallForPaperViewModal) => () => {
            openViewModal(viewingData);
      };

      const deleteCallForPaperDetailHandler = (deletingDetail: IAdminCallForPaperDeleteRequest) => () => {
            deleteCallForPaperDetail(deletingDetail);
      };

      useEffect(() => {
            fetchData();
      }, [search]);

      useEffect(() => {
            return () => {
                  dispatch(callForPaperSliceAction.resetCallForPaperBasicInfoSlice());
            };
      }, []);

      return (
            <>
                  <AdminCallForPaperTable
                        status={status}
                        callForPaperBasicInfo={data.calls}
                        openViewModalHandler={openViewModalHandler}
                        deleteCallForPaperDetailHandler={deleteCallForPaperDetailHandler}
                  />

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AdminCallForPaperTableContainer;
