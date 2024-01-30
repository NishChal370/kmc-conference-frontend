import { useMemo } from "react";
import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";
import AppliedSessionCardMenu from "./AppliedSessionCardMenu";

interface IAppliedSessionCard {
      title: string;
      time: string;
      location: string;
      approvalStatus?: SpeakerApprovalStatus | CallForPaperApprovalStatus;
      deleteButtonHandler: () => void;
      viewDetailButtonHandler: () => void;
}

function AppliedSessionCard({
      time,
      title,
      location,
      approvalStatus,
      deleteButtonHandler,
      viewDetailButtonHandler,
}: IAppliedSessionCard) {
      const badge = useMemo(() => {
            let badge = null;

            switch (approvalStatus) {
                  case SpeakerApprovalStatus.PENDING | CallForPaperApprovalStatus.PENDING:
                        badge = (
                              <p className="bg-mute/5 rounded-sm px-2 py-0.5 text-mute tracking-wider">
                                    Pending
                              </p>
                        );
                        break;

                  case SpeakerApprovalStatus.ACCEPTED | CallForPaperApprovalStatus.ACCEPTED:
                        badge = (
                              <p className="bg-green-950/5 rounded-sm px-2 py-0.5 text-green-950 tracking-wider">
                                    Accepted
                              </p>
                        );
                        break;

                  case SpeakerApprovalStatus.REJECTED | CallForPaperApprovalStatus.REJECTED:
                        badge = (
                              <p className="bg-error/5 rounded-sm px-2 py-0.5 text-error tracking-wider">
                                    Rejected
                              </p>
                        );
                        break;
                  default:
                        badge = null;
                        break;
            }

            return badge;
      }, [approvalStatus]);

      return (
            <div
                  className="flex flex-col justify-between gap-4 border px-4 py-5 rounded-md 
                        min-w-full  max-w-full 
                        sm:min-w-[24rem]  sm:max-w-[24rem]
                        md:min-w-[20rem]  md:max-w-[20rem]
                        lg:min-w-[24rem]  lg:max-w-[24rem]
                  "
            >
                  <section className="relative flex flex-col gap-2 w-full h-full">
                        <header className="flex flex-col w-full h-full">
                              <h5 className="text-xl font-semibold line-clamp-1">{title}</h5>
                              <span className="flex gap-1.5">
                                    <p>{time}</p>
                                    <p className="text-mute">|</p>
                                    <p>{location}</p>
                              </span>
                        </header>
                        <span>
                              <span className="flex items-center justify-start gap-2 w-full overflow-scroll text-xs">
                                    {badge}
                              </span>
                        </span>

                        <aside className="absolute top-0 right-0">
                              <AppliedSessionCardMenu deleteButtonHandler={deleteButtonHandler} />
                        </aside>
                  </section>

                  <footer className="flex gap-4 self-end">
                        <button
                              type="button"
                              onClick={viewDetailButtonHandler}
                              className="text-primary active:text-primary/80"
                        >
                              View Detail
                        </button>
                  </footer>
            </div>
      );
}

export default AppliedSessionCard;
