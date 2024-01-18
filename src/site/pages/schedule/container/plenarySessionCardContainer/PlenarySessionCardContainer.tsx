import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "@/app/hooks";
import useDayThemeApi from "@/admin/hooks/dayTheme/useDayThemeApi";
import { dayThemeState } from "@/admin/pages/dayTheme/feature/dayThemeSlice";
import LoadingAnimation from "@/shared/loading/LoadingAnimation";
import { ErrorBanner, NotFoundMessage } from "@/shared/errorMessage";
import { Status } from "@/enum/commonEnum";
import PlenarySessionCard from "../../components/PlenarySessionCard";

function PlenarySessionCardContainer() {
      const { themeId: paramThemeId } = useParams();
      const { getDayThemeById } = useDayThemeApi();

      const { status, data, error } = useAppSelector(dayThemeState);

      useEffect(() => {
            if (!paramThemeId) return;

            getDayThemeById({ themeId: +paramThemeId });
      }, [paramThemeId]);

      return (
            <>
                  {status === Status.SUCCEEDED && data && <PlenarySessionCard detail={data} />}

                  {status === Status.LOADING && (
                        <span className="w-full flex flex-col gap-1 justify-center items-center">
                              <p className=" font-medium">Getting theme detail</p>
                              <LoadingAnimation />
                        </span>
                  )}

                  {status === Status.DATA_NOT_FOUND && (
                        <NotFoundMessage
                              showViewAllButton={false}
                              needTopPadding={false}
                              title="Theme Detail not found"
                              imageSize="!w-[4rem] !h-[4rem]"
                        />
                  )}

                  {status === Status.FAILED && (
                        <ErrorBanner title="Plenary Session" message={error?.detail} />
                  )}
            </>
      );
}

export default PlenarySessionCardContainer;
