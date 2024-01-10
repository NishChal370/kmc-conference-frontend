import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import ErrorMessage from "@/shared/errorMessage/ErrorMessage";
import ConferenceDayTable from "../components/ConferenceDayTable";
import NotFoundMessage from "@/shared/errorMessage/NotFoundMessage";
import { Status } from "@/enum/commonEnum";
import { useAppSelector } from "@/app/hooks";
import { useURLQueryValues } from "@/hooks/urlQueryHandler";
import useConferenceDayApi from "@/admin/hooks/conferenceDay/useConferenceDayApi";
import { conferenceDayState } from "../feature/conferenceDaySlice";

function ConferenceDayTableContainer() {
      const { search } = useLocation();

      const { status, error, data } = useAppSelector(conferenceDayState);

      const { getConferenceDayDetail } = useConferenceDayApi();

      const { currentPageNumber } = useURLQueryValues();

      const fetchData = () => {
            getConferenceDayDetail({ pageNumber: currentPageNumber });
      };

      useEffect(() => {
            fetchData();
      }, [search]);

      return (
            <>
                  <ConferenceDayTable status={status} conferenceDay={data.days} />

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default ConferenceDayTableContainer;
