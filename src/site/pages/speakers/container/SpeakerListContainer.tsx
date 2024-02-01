import { useEffect } from "react";
import SpeakerList from "../components/SpeakerList";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import { Status } from "@/enum/commonEnum";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useSitePagination from "@/hooks/pagination/useSitePagination";
import useSpeakerContentApi from "@/admin/hooks/speaker/useSpeakerContentApi";
import { speakerSliceAction, speakersContentSliceState } from "@/admin/pages/speaker/feature/speakerSlice";
import SitePagination from "@/shared/pagination/SitePagination";

function SpeakerListContainer() {
      const dispatch = useAppDispatch();

      const { getSpeakersContent } = useSpeakerContentApi();

      const { status, data, error } = useAppSelector(speakersContentSliceState);

      const { pageNumber, changePageNumber } = useSitePagination();

      const fetchData = () => {
            getSpeakersContent({ pageNumber: pageNumber });
      };

      useEffect(() => {
            window.scroll({ top: 0, behavior: "smooth" });

            fetchData();
      }, [pageNumber]);

      useEffect(() => {
            return () => {
                  dispatch(speakerSliceAction.resetSpeakersContentSlice());
                  dispatch(speakerSliceAction.resetSpeakerContentSlice());
            };
      }, []);

      return (
            <>
                  {status === Status.SUCCEEDED ? (
                        <>
                              <SpeakerList speakers={data} />

                              <SitePagination
                                    totalPages={data.totalPages}
                                    currentPageNumber={pageNumber}
                                    updatePageNumber={changePageNumber}
                              />
                        </>
                  ) : undefined}

                  {status === Status.FAILED ? (
                        <ErrorMessage title={error?.title} detail={error?.detail} needTopPadding={false} />
                  ) : undefined}

                  {status === Status.DATA_NOT_FOUND ? <NotFoundMessage needTopPadding={false} /> : undefined}

                  {status === Status.IDEL || status === Status.LOADING ? <LoadingMessage /> : undefined}
            </>
      );
}

export default SpeakerListContainer;
