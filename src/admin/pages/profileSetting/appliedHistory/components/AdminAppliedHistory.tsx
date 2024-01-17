import AppliedSessionCard from "./AppliedSessionCard";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import { Status } from "@/enum/commonEnum";
import { IApiErrorDetail } from "@/models/commonModel";
import { IAppliedHistoryModel } from "@/admin/model/appliedHistory/appliedHistoryModel";

interface IAdminAppliedHistory {
      pageTitle: string;
      data: IAppliedHistoryModel[];
      status: Status;
      error?: IApiErrorDetail;
      viewButtonHandler: (sessionId: IAppliedHistoryModel["sessionId"]) => () => void;
}

function AdminAppliedHistory({ pageTitle, data, status, error, viewButtonHandler }: IAdminAppliedHistory) {
      return (
            <div className="flex flex-col gap-10 w-full h-full">
                  <h1 className="font-bold text-base tracking-wide">{pageTitle}</h1>

                  {status === Status.SUCCEEDED && (
                        <section
                              className="self-center grid grid-cols-1 w-full gap-x-10 gap-y-6
                                    sm:self-start
                                    md:grid-cols-2 sm:w-fit
                              "
                        >
                              {data.map((session) => (
                                    <AppliedSessionCard
                                          key={session.sessionId}
                                          title={session.title}
                                          time={session.startTime + " " + session.endTime}
                                          location={session.location}
                                          approvalStatus={session.approvalStatus}
                                          viewButtonHandler={viewButtonHandler(session.sessionId)}
                                    />
                              ))}
                        </section>
                  )}

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </div>
      );
}

export default AdminAppliedHistory;
