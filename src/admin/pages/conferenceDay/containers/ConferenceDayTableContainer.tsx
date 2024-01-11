import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import ErrorMessage from "@/shared/errorMessage/ErrorMessage";
import ConferenceDayTable from "../components/ConferenceDayTable";
import NotFoundMessage from "@/shared/errorMessage/NotFoundMessage";
import { Status } from "@/enum/commonEnum";
import { useAppSelector } from "@/app/hooks";
import { useURLQueryValues } from "@/hooks/urlQueryHandler";
import useConferenceDayApi from "@/admin/hooks/conferenceDay/useConferenceDayApi";
import { conferenceDayState } from "../feature/conferenceDaySlice";
import {
      IConferenceDayDeleteRequest,
      IConferenceDayModel,
} from "@/admin/model/conferenceDay/conferenceDayModel";
import { ADMIN_DAY_THEME_PATH } from "@/admin/constants/routePath";

interface IConferenceDayTableContainer {
      openEditModal: ({ editingData }: { editingData: IConferenceDayModel }) => void;
}

function ConferenceDayTableContainer({ openEditModal }: IConferenceDayTableContainer) {
      const navigate = useNavigate();

      const { search } = useLocation();

      const { status, error, data } = useAppSelector(conferenceDayState);

      const { getConferenceDayDetail, deleteConferenceDayDetail } = useConferenceDayApi();

      const { currentPageNumber } = useURLQueryValues();

      const fetchData = () => {
            getConferenceDayDetail({ pageNumber: currentPageNumber });
      };

      const editButtonHandler = (data: { editingData: IConferenceDayModel }) => () => {
            openEditModal(data);
      };

      const deleteButtonHandler = (conferenceDayDetail: IConferenceDayDeleteRequest) => () => {
            deleteConferenceDayDetail(conferenceDayDetail);
      };

      const viewThemeHandler = (dayId: IConferenceDayModel["id"]) => () => {
            navigate(ADMIN_DAY_THEME_PATH.theme.full(dayId));
      };

      useEffect(() => {
            fetchData();
      }, [search]);

      return (
            <>
                  <ConferenceDayTable
                        status={status}
                        conferenceDay={data.days}
                        viewThemeHandler={viewThemeHandler}
                        deleteButtonHandler={deleteButtonHandler}
                        editButtonHandler={editButtonHandler}
                  />

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default ConferenceDayTableContainer;
