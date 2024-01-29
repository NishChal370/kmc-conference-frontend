import { useEffect } from "react";
import SpeakerList from "../components/SpeakerList";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import LoadingAnimation from "@/shared/loading/LoadingAnimation";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import { Status } from "@/enum/commonEnum";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useInfiniteScroll from "@/hooks/infiniteScroll/useInfiniteScroll";
import useSpeakerContentApi from "@/admin/hooks/speaker/useSpeakerContentApi";
import { speakerSliceAction, speakersContentSliceState } from "@/admin/pages/speaker/feature/speakerSlice";

function SpeakerListContainer() {
      const dispatch = useAppDispatch();
      const { getSpeakersContent } = useSpeakerContentApi();

      const { status, data, error } = useAppSelector(speakersContentSliceState);
      const { pageNumber, totalPages, loader, toShowLoader } = useInfiniteScroll({
            totalPages: data.totalPages,
      });

      useEffect(() => {
            getSpeakersContent({ pageNumber: pageNumber });
      }, [pageNumber]);

      useEffect(() => {
            return () => {
                  dispatch(speakerSliceAction.resetSpeakersContentSlice());
                  dispatch(speakerSliceAction.resetSpeakerContentSlice());
            };
      }, []);

      return (
            <>
                  {[Status.SUCCEEDED, Status.LOADING].includes(status) && <SpeakerList speakers={data} />}

                  {status === Status.FAILED && (
                        <ErrorMessage title={error?.title} detail={error?.detail} needTopPadding={false} />
                  )}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage needTopPadding={false} />}

                  {totalPages === 0
                        ? (status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />
                        : undefined}

                  <div
                        ref={loader}
                        className="flex flex-col items-center justify-center w-full gap-4 text-center"
                  >
                        {toShowLoader ? (
                              <span className="flex flex-col gap-2 font-medium w-[30%]">
                                    Loading More Data
                                    <LoadingAnimation />
                              </span>
                        ) : undefined}
                  </div>
            </>
      );
}

export default SpeakerListContainer;
