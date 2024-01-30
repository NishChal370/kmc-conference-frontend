import { useMemo, useState } from "react";
import useWindowSize from "@/site/hooks/windowsResize/useWindowSize";

interface ISpeakerListWrapper {
      children: ({
            showingSpeakerId,
            handleClick,
            activeRowIndex,
      }: {
            showingSpeakerId?: number;
            activeRowIndex: number;
            getColumnsCount: number;
            handleClick: ({ index, speakerId }: { index: number; speakerId: number }) => () => void;
      }) => JSX.Element;
}

function SpeakerListWrapper({ children }: ISpeakerListWrapper) {
      const [showingSpeakerId, setShowingSpeakerId] = useState<number>();
      const [activeUserIndex, setActiveUserIndex] = useState<number | null>(null);
      const size = useWindowSize();

      // Determine the number of columns based on the window width
      const getColumnsCount = useMemo(() => {
            if (size.width >= 1280) return 4; // xl: 4 columns
            else if (size.width >= 1024) return 3; // lg: 3 columns
            else if (size.width >= 640) return 2; // sm: 2 columns
            return 1; // base: 1 column
      }, [size]);

      const handleClick =
            ({ index, speakerId }: { index: number; speakerId: number }) =>
            () => {
                  // If the clicked image is already active, deactivate it, otherwise activate it
                  setActiveUserIndex((currentActiveUserIndex) => {
                        if (currentActiveUserIndex !== index) {
                              window.scroll(0, 400);
                        }

                        return currentActiveUserIndex === index ? null : index;
                  });

                  setShowingSpeakerId(speakerId);

                  window.scroll(0, 400);
            };

      // Calculate the row index of the active user
      const activeRowIndex = useMemo(
            () => (activeUserIndex !== null ? Math.floor(activeUserIndex / getColumnsCount) : -1),
            [activeUserIndex, getColumnsCount]
      );

      return <>{children({ showingSpeakerId, handleClick, activeRowIndex, getColumnsCount })}</>;
}

export default SpeakerListWrapper;
