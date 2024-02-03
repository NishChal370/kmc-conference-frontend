import { UserStatus } from "@/enum/user/userEnum";
import { IDropdownOptionModel } from "@/models/input/dropDownModel";

/**
 * User can convert to Active or Blocked only.
 * so, other UserStatus is not added here.
 * 
 */
export const USER_STATUS_OPTIONS: IDropdownOptionModel[] = [
      { value: UserStatus.ACTIVE, option: "Active" },
      { value: UserStatus.BLOCKED, option: "Blocked" },
] as const;