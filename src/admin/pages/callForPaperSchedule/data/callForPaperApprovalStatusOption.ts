import { IDropdownOptionModel } from "@/models/input/dropDownModel";
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";

export const CALL_FOR_PAPER_APPROVAL_STATUS_OPTION: IDropdownOptionModel[] = [
      { option: "Accepted", value: CallForPaperApprovalStatus.ACCEPTED },
      { option: "Pending", value: CallForPaperApprovalStatus.PENDING },
      { option: "Rejected", value: CallForPaperApprovalStatus.REJECTED },
];