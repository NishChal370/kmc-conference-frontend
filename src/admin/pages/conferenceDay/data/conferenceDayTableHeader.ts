import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const CONFERENCE_DAY_TABLE_HEADER: ITableHeaderDataList = [
      { id: "index", title: "#", className: "sm:text-start" },
      { id: "date", title: "Date", className: "sm:text-start" },
      { id: "location", title: "Location", className: "sm:text-start" },
      { id: "parking", title: "Parking", className: "sm:text-start" },
      { id: "accommodation", title: "Accommodation", className: "sm:text-start" },
      { id: "action", title: "Action" },
] as const;