import { UserRole } from "@/enum/commonEnum";
import { TIconType } from "@/models/icon/iconModel";

export interface ISideNavDetail {
      readonly id: string,
      readonly title: string,
      readonly Icon: TIconType,
      readonly subNav?: ReadonlyArray<ISideNavDetail>,
      readonly pathName: string,
      readonly allowedRole?: UserRole[],
}
