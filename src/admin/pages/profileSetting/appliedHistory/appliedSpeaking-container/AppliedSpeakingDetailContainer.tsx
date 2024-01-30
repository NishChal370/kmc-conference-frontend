import { useEffect } from "react";
import { useAppSelector } from "@/app/hooks";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { appliedHistorySliceState } from "../feature/appliedHistorySlice";
import { Status } from "@/enum/commonEnum";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import AppliedSpeakingDetail from "../appliedSpeaking-components/AppliedSpeakingDetail";

function AppliedSpeakingDetailContainer() {
      const { status, data, error, isToRefetch } =
            useAppSelector(appliedHistorySliceState).appliedSpeakerBasic;

      const { getApplicationSpeakerBasicInfo } = useAppliedHistoryApi();

      useEffect(() => {
            getApplicationSpeakerBasicInfo();
      }, [isToRefetch]);

      return (
            <>
                  {status === Status.SUCCEEDED && data && <AppliedSpeakingDetail appliedSpeaking={data} />}

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AppliedSpeakingDetailContainer;
