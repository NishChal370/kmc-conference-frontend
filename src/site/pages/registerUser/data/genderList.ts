import { GENDER } from "@/enum/commonEnum";
import { IDropdownOptionModel } from "@/models/input/dropDownModel";

export const GENDER_OPTIONS: IDropdownOptionModel[] = [
      { value: GENDER.MALE, option: GENDER.MALE },
      { value: GENDER.FEMALE, option: GENDER.FEMALE },
      { value: GENDER.OTHERS, option: GENDER.OTHERS },
]