import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";
import { IDropdownOptionModel } from "@/models/input/dropDownModel";

export const SPEAKER_APPROVAL_STATUS_OPTION: IDropdownOptionModel[] = [
      { option: "Accepted", value: SpeakerApprovalStatus.ACCEPTED },
      { option: "Pending", value: SpeakerApprovalStatus.PENDING },
      { option: "Rejected", value: SpeakerApprovalStatus.REJECTED },
];