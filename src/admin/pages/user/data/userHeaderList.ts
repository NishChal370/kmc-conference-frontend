import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const USER_HEADER_LIST: ITableHeaderDataList = [
      { id: "index", title: "#" },
      { id: "title", title: "Title", className: "sm:text-start" },
      { id: "full-name", title: "Full Name", className: "sm:text-start" },
      { id: "gender", title: "Gender", className: "sm:text-start" },
      { id: "phone-number", title: "Phone Number", className: "sm:text-start" },
      { id: "email", title: "Email", className: "sm:text-start" },
      { id: "action", title: "Action" },
]