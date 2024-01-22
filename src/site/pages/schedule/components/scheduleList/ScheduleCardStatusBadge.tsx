import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";

interface IScheduleCardStatusBadge {
      isParticipant?: boolean;
      speakerApproval?: SpeakerApprovalStatus;
      callForPaperApproval?: CallForPaperApprovalStatus;
}

function ScheduleCardStatusBadge({
      isParticipant,
      speakerApproval,
      callForPaperApproval,
}: IScheduleCardStatusBadge) {
      return (
            <section className="w-full flex  max-w-fit">
                  <span className="min-w-[90%] max-w-[10rem] md:max-w-[30rem] flex overflow-scroll no-scrollbar">
                        <div className="flex gap-1.5 w-full text-xs">
                              {isParticipant && (
                                    <p className="px-1.5 py-0.5 select-none bg-green-950/10 text-green-950 rounded-sm min-w-fit">
                                          Participating
                                    </p>
                              )}

                              {speakerApproval?.toString() && (
                                    <p
                                          className={`px-1.5 py-0.5 select-none rounded-sm min-w-fit 
                                               ${
                                                     speakerApproval === SpeakerApprovalStatus.PENDING &&
                                                     " bg-gray-900/10 text-gray-900"
                                               }
                                                ${
                                                      speakerApproval === SpeakerApprovalStatus.ACCEPTED &&
                                                      " bg-green-950/10 text-green-950"
                                                }
                                                ${
                                                      speakerApproval === SpeakerApprovalStatus.REJECTED &&
                                                      " bg-primary/10 text-primary"
                                                }
                                          `}
                                    >
                                          {"Speaker: " + SpeakerApprovalStatus[speakerApproval]}
                                    </p>
                              )}

                              {callForPaperApproval?.toString() && (
                                    <p
                                          className={`px-1.5 py-0.5 select-none rounded-sm min-w-fit 
                                               ${
                                                     callForPaperApproval ===
                                                           CallForPaperApprovalStatus.PENDING &&
                                                     " bg-gray-900/10 text-gray-900"
                                               }
                                                ${
                                                      callForPaperApproval ===
                                                            CallForPaperApprovalStatus.ACCEPTED &&
                                                      " bg-green-950/10 text-green-950"
                                                }
                                                ${
                                                      callForPaperApproval ===
                                                            CallForPaperApprovalStatus.REJECTED &&
                                                      " bg-primary/10 text-primary"
                                                }
                                          `}
                                    >
                                          {"Proposal: " + CallForPaperApprovalStatus[callForPaperApproval]}
                                    </p>
                              )}
                        </div>
                  </span>
            </section>
      );
}

export default ScheduleCardStatusBadge;
