import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import { auditLogSliceAction, auditLogSlicesState } from "../feature/auditLogSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import useAuditLogApi from "@/admin/hooks/auditLog/useAuditLogApi";
import { Status } from "@/enum/commonEnum";
import AuditLogTable from "../components/AuditLogTable";
import { AUDIT_LOG_SORT_VALUE } from "../data/auditLogSortValue";

function AuditLogTableContainer() {
      const dispatch = useAppDispatch();

      const { search } = useLocation();

      const { status, error, data } = useAppSelector(auditLogSlicesState);

      const { getAuditLogDetail } = useAuditLogApi();

      const { getSearchParmaValues, changeQuerySortBy } = useURLQueryHandler();
      const { currentPageNumber, getCurrentOrderBy, getSearchParamSortBy } = getSearchParmaValues({
            sortingValueList: AUDIT_LOG_SORT_VALUE,
      });

      const fetchData = () => {
            getAuditLogDetail({
                  pageNumber: currentPageNumber,
            });
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
                  dispatch(auditLogSliceAction.resetAuditLogSlice());
            };
      }, []);

      return (
            <>
                  <AuditLogTable
                        status={status}
                        sortHandler={sortHandler}
                        sortDetail={{ getOrderBy: getCurrentOrderBy, getSort: getSearchParamSortBy }}
                        currentPageNumber={currentPageNumber}
                        auditLogs={data.logEntries}
                  />

                  {status === Status.FAILED && (
                        <ErrorMessage title={error?.title} detail={error?.detail} traceId={error?.traceId} />
                  )}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AuditLogTableContainer;
