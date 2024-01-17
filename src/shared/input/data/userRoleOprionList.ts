import { UserRole } from "@/enum/commonEnum";
import { IDropdownOptionModel } from "@/models/input/dropDownModel";

/**
 * UserRole User is not allows to add through admin-panel 
 * so it is not added here.
 * 
 */
export const USER_ROLE_OPTIONS: IDropdownOptionModel[] = [
      { value: UserRole.SUPER_ADMIN, option: UserRole.SUPER_ADMIN },
      { value: UserRole.SITE_MANAGER, option: UserRole.SITE_MANAGER },
      { value: UserRole.REVIEWER, option: UserRole.REVIEWER },
      { value: UserRole.READ_ONLY, option: UserRole.READ_ONLY },
]