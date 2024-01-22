import { IDayThemeByIdResponse } from "@/admin/model/dayTheme/dayThemeModel";
import SanitizedContent from "@/shared/sanitizedContent/SanitizedContent";

interface IPlenarySessionCard {
      detail: IDayThemeByIdResponse;
}
function PlenarySessionCard({ detail }: IPlenarySessionCard) {
      return (
            <>
                  <div className="bg-primary/5 rounded-md flex flex-col gap-4 w-full h-fit px-6 py-5">
                        <h1 className="font-semibold text-lg text-primary">{detail.title}</h1>

                        <article className="flex flex-col gap-2.5 w-full h-fit text-sm">
                              <span className="flex flex-col gap-0.5 items-start justify-start w-full h-fit">
                                    <h5 className=" font-medium">
                                          Plenary Session: {detail.plenarySession.title}
                                    </h5>
                                    <p className="text-xs font-medium">
                                          {detail.plenarySession.startTime}-{""}
                                          {detail.plenarySession.endTime}
                                    </p>
                              </span>

                              <SanitizedContent htmlContent={detail.plenarySession.description} />
                        </article>
                  </div>
            </>
      );
}

export default PlenarySessionCard;
