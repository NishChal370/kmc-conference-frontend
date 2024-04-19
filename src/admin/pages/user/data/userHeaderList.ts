import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const USER_HEADER_LIST: ITableHeaderDataList = [
      { id: "index", title: "#", sortValue: "index" },
      { id: "title", title: "Title", className: "sm:text-start", sortValue: "Title" },
      { id: "full-name", title: "Full Name", className: "sm:text-start", sortValue: "FullName" },
      { id: "gender", title: "Gender", className: "sm:text-start", sortValue: "Gender" },
      { id: "phone-number", title: "Phone Number", className: "sm:text-start", sortValue: "PhoneNumber" },
      { id: "email", title: "Email", className: "sm:text-start", sortValue: "Email" },
      { id: "status", title: "Status", className: "sm:text-start", sortValue: "UserStatus" },
      { id: "action", title: "Action" },
]