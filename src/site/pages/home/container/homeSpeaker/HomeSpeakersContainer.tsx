import { useEffect } from "react";
import HomeSpeakers from "../../components/homeSpeaker/HomeSpeakers";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useSpeakerContentApi from "@/admin/hooks/speaker/useSpeakerContentApi";
import { speakerSliceAction, speakersContentSliceState } from "@/admin/pages/speaker/feature/speakerSlice";

function HomeSpeakersContainer() {
      const dispatch = useAppDispatch();
      const { status, data, error } = useAppSelector(speakersContentSliceState);

      const { getSpeakersContent } = useSpeakerContentApi();

      useEffect(() => {
            getSpeakersContent();

            return () => {
                  dispatch(speakerSliceAction.resetSpeakerContentSlice());
            };
      }, []);

      return <HomeSpeakers status={status} speakers={data} error={error} />;
}

export default HomeSpeakersContainer;
