import { ContactReplyStatus } from "@/enum/contactUs/contactUsEnum";
import { IDropdownOptionModel } from "@/models/input/dropDownModel";

export const CONTACT_US_REPLY_STATUS_OPTION: IDropdownOptionModel[] = [
      { option: "Not Reply", value: ContactReplyStatus.NotReplied },
      { option: "Replied", value: ContactReplyStatus.Replied },
      { option: "Ignored", value: ContactReplyStatus.Ignored },
]