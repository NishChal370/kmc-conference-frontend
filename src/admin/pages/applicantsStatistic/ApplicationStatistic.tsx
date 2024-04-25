import { IApplicationsStatistic } from "@/admin/model/applicantsStatistic/applicantsStatisticModel";
import AppIcon from "@/shared/icon/AppIcon";
import LoadingAnimation from "@/shared/loading/LoadingAnimation";

interface IApplicationStatistic {
      isLoading: boolean;
      data: IApplicationsStatistic;
}

function ApplicationStatistic({ data, isLoading }: IApplicationStatistic) {
      return (
            <section
                  className="flex flex-col w-full gap-6
                        sm:gap-10 sm:flex-row
                  "
            >
                  <div className="w-full border border-default px-4 py-5 rounded-lg flex justify-between">
                        <span className="flex flex-col gap-2">
                              <p className="font-semibold text-sm">Total Participant</p>
                              {isLoading ? (
                                    <LoadingAnimation />
                              ) : (
                                    <h5 className="text-3xl font-semibold">
                                          {data.totalParticipant > 1000 ? "+1000" : data.totalParticipant}
                                    </h5>
                              )}
                        </span>

                        <aside className=" bg-blue-900/10 h-fit p-2 rounded">
                              <AppIcon className="text-blue-900" name="participant" />
                        </aside>
                  </div>

                  <div className="w-full border border-default px-4 py-5 rounded-lg flex justify-between">
                        <span className="flex flex-col gap-2">
                              <p className="font-semibold text-sm">Total Speaker</p>
                              {isLoading ? (
                                    <LoadingAnimation />
                              ) : (
                                    <h5 className="text-3xl font-semibold">
                                          {data.totalSpeaker > 1000 ? "+1000" : data.totalSpeaker}
                                    </h5>
                              )}
                        </span>

                        <aside className=" bg-emerald-900/10 h-fit p-2 rounded">
                              <AppIcon className="text-emerald-900" name="speaker" />
                        </aside>
                  </div>

                  <div className="w-full border border-default px-4 py-5 rounded-lg flex justify-between">
                        <span className="flex flex-col gap-3">
                              <p className="font-semibold text-sm">Total Call For Paper</p>

                              {isLoading ? (
                                    <LoadingAnimation />
                              ) : (
                                    <h5 className="text-3xl font-semibold">
                                          {data.totalProposal > 1000 ? "+1000" : data.totalProposal}
                                    </h5>
                              )}
                        </span>

                        <aside className=" bg-red/10 h-fit p-2 rounded">
                              <AppIcon className="text-red" name="callForPaper" />
                        </aside>
                  </div>
            </section>
      );
}

export default ApplicationStatistic;
