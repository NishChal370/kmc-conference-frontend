import { UserRole } from "@/enum/commonEnum";
import { IDropdownOptionModel } from "@/models/input/dropDownModel";

/**
 * UserRole User is not allows to add through admin-panel 
 * so it is not added here.
 * 
 */
export const USER_ROLE_OPTIONS: IDropdownOptionModel[] = [
      { value: UserRole.SUPER_ADMIN, option: "Super Admin" },
      { value: UserRole.SITE_MANAGER, option: "Site Manager" },
      { value: UserRole.REVIEWER, option: "Reviewer" },
      { value: UserRole.READ_ONLY, option: "Readonly" },
]