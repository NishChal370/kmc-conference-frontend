import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import ErrorMessage from "@/shared/errorMessage/ErrorMessage";
import ConferenceDayTable from "../components/ConferenceDayTable";
import NotFoundMessage from "@/shared/errorMessage/NotFoundMessage";
import { Status } from "@/enum/commonEnum";
import { useAppSelector } from "@/app/hooks";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import useConferenceDayApi from "@/admin/hooks/conferenceDay/useConferenceDayApi";
import { conferenceDaysState } from "../feature/conferenceDaySlice";
import {
      IConferenceDayDeleteRequest,
      IConferenceDayModel,
} from "@/admin/model/conferenceDay/conferenceDayModel";
import { ADMIN_DAY_THEME_PATH } from "@/admin/constants/routePath";
import { CONFERENCE_DAY_SORT_VALUE } from "../data/conferenceDaySortingValue";

interface IConferenceDayTableContainer {
      openEditModal: ({ editingData }: { editingData: IConferenceDayModel }) => void;
}

function ConferenceDayTableContainer({ openEditModal }: IConferenceDayTableContainer) {
      const navigate = useNavigate();

      const { search } = useLocation();

      const { status, error, data } = useAppSelector(conferenceDaysState);

      const { getConferenceDayDetail, deleteConferenceDayDetail } = useConferenceDayApi();

      const { changeQuerySortBy, getSearchParmaValues } = useURLQueryHandler();

      const { currentPageNumber, getSearchParamSortBy, getCurrentOrderBy } = getSearchParmaValues({
            sortingValueList: CONFERENCE_DAY_SORT_VALUE,
      });

      const fetchData = () => {
            getConferenceDayDetail({
                  pageNumber: currentPageNumber,
                  sortBy: getSearchParamSortBy(),
                  order: getCurrentOrderBy(),
            });
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

      const sortHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            const currentSortValue = e.currentTarget.dataset.value;

            if (currentSortValue) changeQuerySortBy({ sortBy: currentSortValue });
      };

      useEffect(() => {
            fetchData();
      }, [search]);

      return (
            <>
                  <ConferenceDayTable
                        sortHandler={sortHandler}
                        status={status}
                        currentPageNumber={currentPageNumber}
                        conferenceDay={data.days}
                        viewThemeHandler={viewThemeHandler}
                        deleteButtonHandler={deleteButtonHandler}
                        editButtonHandler={editButtonHandler}
                        sortDetail={{ getOrderBy: getCurrentOrderBy, getSort: getSearchParamSortBy }}
                  />

                  {status === Status.FAILED && (
                        <ErrorMessage title={error?.title} detail={error?.detail} traceId={error?.traceId} />
                  )}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default ConferenceDayTableContainer;
