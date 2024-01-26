import { useEffect } from "react";
import SpeakerList from "../components/SpeakerList";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import { Status } from "@/enum/commonEnum";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useSpeakerContentApi from "@/admin/hooks/speaker/useSpeakerContentApi";
import { speakerSliceAction, speakersContentSliceState } from "@/admin/pages/speaker/feature/speakerSlice";

function SpeakerListContainer() {
      const dispatch = useAppDispatch();
      const { getSpeakersContent } = useSpeakerContentApi();

      const { status, data, error } = useAppSelector(speakersContentSliceState);

      useEffect(() => {
            getSpeakersContent();

            return () => {
                  dispatch(speakerSliceAction.resetSpeakersContentSlice());
                  dispatch(speakerSliceAction.resetSpeakerContentSlice());
            };
      }, []);

      return (
            <>
                  {status === Status.SUCCEEDED && <SpeakerList speakers={data} />}

                  {status === Status.FAILED && (
                        <ErrorMessage title={error?.title} detail={error?.detail} needTopPadding={false} />
                  )}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage needTopPadding={false} />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default SpeakerListContainer;
