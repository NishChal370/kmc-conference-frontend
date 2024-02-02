import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/app/hooks";
import SpeakerDetail from "../components/SpeakerDetail";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import useSpeakerContentApi from "@/admin/hooks/speaker/useSpeakerContentApi";
import { ISpeakerContentModel } from "@/admin/model/speaker/speakerContentModel";
import { speakerContentDetailSliceState } from "@/admin/pages/speaker/feature/speakerSlice";
import { Status } from "@/enum/commonEnum";
import { SCHEDULE_PATH } from "@/site/constants/routePath";
import { IScheduleChoice } from "@/admin/model/schedule/scheduleModel";

interface ISpeakerDetailContainer {
      speakerId: ISpeakerContentModel["id"];
}
function SpeakerDetailContainer({ speakerId }: ISpeakerDetailContainer) {
      const navigate = useNavigate();

      const { status, error, data } = useAppSelector(speakerContentDetailSliceState);

      const { getSpeakerContentDetail } = useSpeakerContentApi();

      const fetchData = () => {
            getSpeakerContentDetail({ id: speakerId });
      };

      const navigateToSessionDetail = (sessionId: IScheduleChoice["sessionId"]) => () => {
            navigate(SCHEDULE_PATH.detail.full(sessionId));
      };

      useEffect(() => {
            fetchData();
      }, [speakerId]);

      return (
            <>
                  {data ? (
                        <SpeakerDetail speaker={data} navigateToSessionDetail={navigateToSessionDetail} />
                  ) : undefined}

                  {status === Status.FAILED && (
                        <ErrorMessage
                              title={error?.title}
                              detail={error?.detail}
                              needTopPadding={false}
                              traceId={error?.traceId}
                        />
                  )}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage needTopPadding={false} />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default SpeakerDetailContainer;
